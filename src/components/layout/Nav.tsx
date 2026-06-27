'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/awards', label: 'Awards' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10,15,30,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#F4F6FA',
              letterSpacing: '-0.01em',
            }}
          >
            Joseph Carl R. Briones
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex" style={{ gap: '2px', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? '#4F8EF7' : 'rgba(245,245,243,0.7)',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#F5F5F3'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(245,245,243,0.7)'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              style={{
                backgroundColor: '#4F8EF7',
                color: '#ffffff',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '8px 20px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get in touch
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: '#F5F5F3',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent
            side="right"
            style={{
              backgroundColor: '#0F1629',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              width: '280px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '48px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4F8EF7' }}>JCB</span>
                <span style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.6)', marginLeft: '8px' }}>
                  Joseph Carl R. Briones
                </span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '12px 16px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: pathname === link.href ? '#4F8EF7' : '#F5F5F3',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    backgroundColor:
                      pathname === link.href ? 'rgba(79,142,247,0.1)' : 'transparent',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: '16px' }}>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button
                    style={{
                      backgroundColor: '#4F8EF7',
                      color: '#ffffff',
                      borderRadius: '9999px',
                      width: '100%',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
