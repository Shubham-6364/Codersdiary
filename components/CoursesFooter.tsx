import Link from 'next/link'
import { BookOpen, Github, Linkedin, Mail, Youtube } from 'lucide-react'

const footerLinks = [
  { href: '/courses', label: 'All Courses' },
  { href: '/courses#instructor', label: 'Instructor' },
  { href: 'mailto:hello@codersdiary.online', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://youtube.com/@codersdiary', label: 'YouTube', icon: Youtube },
  { href: 'https://linkedin.com/in/shubhamrajawat', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/shubhamrajawat', label: 'GitHub', icon: Github },
  { href: 'mailto:hello@codersdiary.online', label: 'Email', icon: Mail },
]

export default function CoursesFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <Link href="/courses" className="navbar-logo" aria-label="CodersDiary Learn home" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              <span className="navbar-logo-icon" aria-hidden="true">
                <BookOpen size={16} color="#fff" />
              </span>
              CodersDiary<span className="text-gradient"> Learn</span>
            </Link>
            <p className="footer-copy" style={{ marginTop: '0.5rem' }}>
              Built by Engineers. For Engineers.
            </p>
            <p className="footer-copy" style={{ marginTop: '0.25rem', opacity: 0.6, fontSize: '0.8rem' }}>
              7,000+ engineers upskilled · Hindi & English
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-links" aria-label="Courses footer navigation">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="footer-social-icon"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="divider" style={{ marginTop: '2rem', marginBottom: '1.5rem' }} />

        <p className="footer-copy text-center">
          © {new Date().getFullYear()} CodersDiary · Shubham Rajawat · All rights reserved.
        </p>
      </div>
    </footer>
  )
}
