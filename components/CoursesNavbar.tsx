'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/courses',             label: 'All Courses' },
  { href: '/courses#instructor',  label: 'Instructor' },
]

export default function CoursesNavbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link href="/courses" className="navbar-logo" aria-label="CodersDiary Learn — Home">
          <span className="navbar-logo-icon" aria-hidden="true">
            <BookOpen size={18} color="#fff" />
          </span>
          CodersDiary<span className="text-gradient"> Learn</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links" aria-label="Courses navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}

          <Link
            href="/courses"
            className="btn btn-primary"
            id="courses-nav-enroll-btn"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Courses mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="navbar-link"
            style={{ fontSize: '1.0625rem' }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/courses"
          className="btn btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ justifyContent: 'center' }}
        >
          Enroll Now
        </Link>
      </nav>
    </header>
  )
}
