'use client'

import { useState } from 'react'

const audienceOptions = [
  { value: 'recruiter-public', label: "I'm a recruiter (public sector / government)" },
  { value: 'recruiter-private', label: "I'm a recruiter (private sector / corporate)" },
  { value: 'consulting-client', label: 'I have a consulting project or partnership' },
  { value: 'collaborator', label: "I'd like to collaborate or connect" },
]

export default function ContactForm({ defaultAudience }: { defaultAudience?: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reachingOutAs: defaultAudience || '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', reachingOutAs: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '0.9375rem',
    color: '#F5F5F3',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'rgba(245,245,243,0.7)',
    marginBottom: '8px',
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '40px',
          backgroundColor: 'rgba(79,142,247,0.08)',
          border: '1px solid rgba(79,142,247,0.25)',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '16px' }}>&#10003;</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#F5F5F3', margin: '0 0 8px' }}>
          Message sent
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(245,245,243,0.6)', margin: 0 }}>
          Thank you for reaching out. I&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
        <div>
          <label style={labelStyle}>Your name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.5)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            placeholder="First Last"
          />
        </div>
        <div>
          <label style={labelStyle}>Your email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.5)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>I am reaching out as *</label>
        <select
          required
          value={form.reachingOutAs}
          onChange={(e) => setForm({ ...form, reachingOutAs: e.target.value })}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.5)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
        >
          <option value="" disabled style={{ backgroundColor: '#0F1629' }}>
            Select one...
          </option>
          {audienceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ backgroundColor: '#0F1629' }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Tell me more *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.5)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          placeholder="What are you working on? What are you looking for?"
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '0.875rem', color: '#ef4444', margin: 0 }}>
          Something went wrong. Please try again or email josephcarl.briones@gmail.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          backgroundColor: status === 'sending' ? 'rgba(79,142,247,0.5)' : '#4F8EF7',
          color: '#ffffff',
          border: 'none',
          borderRadius: '9999px',
          padding: '14px 32px',
          fontSize: '0.9375rem',
          fontWeight: 500,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transition: 'opacity 0.2s ease',
          alignSelf: 'flex-start',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      <style jsx>{`
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  )
}
