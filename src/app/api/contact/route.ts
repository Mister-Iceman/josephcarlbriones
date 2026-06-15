import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const audienceLabels: Record<string, string> = {
  'recruiter-public': '\uD83C\uDFDB\uFE0F Recruiter \u2014 Public Sector / Government',
  'recruiter-private': '\uD83D\uDCBC Recruiter \u2014 Private Sector / Corporate',
  'consulting-client': '\uD83E\uDD1D Consulting Project / Partnership',
  collaborator: '\uD83C\uDF10 Collaboration / Connection',
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, reachingOutAs, message } = await req.json()

    if (!name || !email || !reachingOutAs || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const audienceLabel = audienceLabels[reachingOutAs] || reachingOutAs

    await resend.emails.send({
      from: 'josephcarlbriones.com <hello@josephcarlbriones.com>',
      to: 'josephcarl.briones@gmail.com',
      replyTo: email,
      subject: `[${audienceLabel}] Message from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0F1E; color: #F5F5F3; padding: 40px; border-radius: 12px;">
          <h2 style="color: #4F8EF7; margin: 0 0 24px; font-size: 1.25rem;">New message from josephcarlbriones.com</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,243,0.5); font-size: 0.875rem; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #F5F5F3; font-size: 0.9375rem;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,243,0.5); font-size: 0.875rem; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #F5F5F3; font-size: 0.9375rem;"><a href="mailto:${email}" style="color: #4F8EF7;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,243,0.5); font-size: 0.875rem; vertical-align: top;">Reaching out as</td>
              <td style="padding: 10px 0; color: #F5F5F3; font-size: 0.9375rem;">${audienceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,243,0.5); font-size: 0.875rem; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #F5F5F3; font-size: 0.9375rem; line-height: 1.65;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
