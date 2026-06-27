import { NextRequest, NextResponse } from 'next/server'

const audienceLabels: Record<string, string> = {
  'recruiter-public': 'Recruiter — Public Sector / Government',
  'recruiter-private': 'Recruiter — Private Sector / Corporate',
  'consulting-client': 'Consulting Project / Partnership',
  collaborator: 'Collaboration / Connection',
}

// In-memory rate limit store (resets on server cold start)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 3
  const record = rateLimitMap.get(ip)
  if (!record || now - record.lastReset > windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }
  if (record.count >= maxRequests) return true
  record.count++
  return false
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .slice(0, 2000)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 },
      )
    }

    const { name, email, reachingOutAs, message } = await req.json()

    if (!name || !email || !reachingOutAs || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    if (!isValidEmail(String(email))) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const safeName = sanitize(String(name))
    const safeEmail = sanitize(String(email))
    const safeMessage = sanitize(String(message))
    const audienceLabel = audienceLabels[reachingOutAs] ?? sanitize(String(reachingOutAs))

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL ?? 'josephcarl.briones@gmail.com'

    // Graceful no-key handling — log and return success in dev
    if (!apiKey || apiKey === 'your_resend_api_key_here') {
      console.log('Contact form submission (Resend not yet configured):', {
        name: safeName,
        email: safeEmail,
        reachingOutAs,
        message: safeMessage,
      })
      return NextResponse.json({ success: true, note: 'Resend not yet configured' })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'josephcarlbriones.com <hello@josephcarlbriones.com>',
        to: [contactEmail],
        subject: `[${audienceLabel}] Message from ${safeName}`,
        reply_to: safeEmail,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #090E1A; color: #F4F6FA; padding: 40px; border-radius: 8px;">
            <h2 style="color: #5B97FF; margin: 0 0 24px; font-size: 1.25rem;">New message from josephcarlbriones.com</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: rgba(244,246,250,0.5); font-size: 0.875rem; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #F4F6FA; font-size: 0.9375rem;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(244,246,250,0.5); font-size: 0.875rem; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #F4F6FA; font-size: 0.9375rem;"><a href="mailto:${safeEmail}" style="color: #5B97FF;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(244,246,250,0.5); font-size: 0.875rem; vertical-align: top;">Reaching out as</td>
                <td style="padding: 10px 0; color: #F4F6FA; font-size: 0.9375rem;">${audienceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(244,246,250,0.5); font-size: 0.875rem; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #F4F6FA; font-size: 0.9375rem; line-height: 1.65;">${safeMessage.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
