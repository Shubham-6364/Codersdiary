import Link from 'next/link'
import { Terminal, Github, Linkedin, Mail, Youtube } from 'lucide-react'

const footerLinks = [
  { href: '/courses', label: 'Courses' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/shubhamrajawat', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/shubhamrajawat', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://youtube.com/@codersdiary', label: 'YouTube', icon: Youtube },
  { href: 'mailto:hello@codersdiary.online', label: 'Email', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <Link href="/" className="navbar-logo" aria-label="CodersDiary home" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              <span className="navbar-logo-icon" aria-hidden="true">
                <Terminal size={16} color="#fff" />
              </span>
              Coders<span className="text-gradient">Diary</span>
            </Link>
            <p className="footer-copy" style={{ marginTop: '0.5rem' }}>
              Built by Engineers. For Engineers.
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center' }}
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
