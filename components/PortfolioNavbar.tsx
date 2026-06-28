'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Terminal, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#about',    label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills',   label: 'Skills' },
  { href: '/#contact',  label: 'Contact' },
]

export default function PortfolioNavbar() {
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
        <Link href="/" className="navbar-logo" aria-label="CodersDiary — Portfolio">
          <span className="navbar-logo-icon" aria-hidden="true">
            <Terminal size={18} color="#fff" />
          </span>
          Coders<span className="text-gradient">Diary</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links" aria-label="Portfolio navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
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
      <nav className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Portfolio mobile navigation">
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
      </nav>
    </header>
  )
}
