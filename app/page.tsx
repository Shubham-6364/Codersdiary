import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Terminal, ChevronRight, Github, Linkedin, Mail,
  Cloud, Container, Settings, Layers, BarChart,
  Code, ShieldCheck, ExternalLink, BookOpen, Clock, Users,
  ArrowRight, Award, CheckCircle
} from 'lucide-react'
import { projects } from '@/data/projects'
import { courses } from '@/data/courses'
import TerminalWindow from '@/components/TerminalWindow'

export const metadata: Metadata = {
  title: 'Shubham Rajawat | Senior DevOps & Cloud Engineer',
  description:
    'Portfolio of Shubham Rajawat — Senior DevOps & Cloud Engineer with 4+ years building production-grade Kubernetes, AWS, Terraform, and CI/CD infrastructure. Available for opportunities.',
}

/* ── Data ── */
const skills = [
  { name: 'Cloud Platforms', icon: Cloud,      tags: ['AWS', 'Azure', 'GCP'],         color: '#f97316' },
  { name: 'Containers',      icon: Container,  tags: ['Docker', 'K8s', 'Helm'],       color: '#10b981' },
  { name: 'CI/CD',           icon: Settings,   tags: ['GitHub Actions', 'ArgoCD', 'Jenkins'], color: '#f59e0b' },
  { name: 'IaC',             icon: Layers,     tags: ['Terraform', 'Ansible', 'Pulumi'], color: '#fb923c' },
  { name: 'Linux & OS',      icon: Terminal,   tags: ['RHEL', 'Ubuntu', 'Shell'],     color: '#f43f5e' },
  { name: 'Observability',   icon: BarChart,   tags: ['Prometheus', 'Grafana', 'ELK'], color: '#06b6d4' },
  { name: 'SRE & Reliability', icon: ShieldCheck, tags: ['SLOs', 'Runbooks', 'On-call'], color: '#fbbf24' },
  { name: 'Security & DevSecOps', icon: Code, tags: ['Trivy', 'Falco', 'OPA'],       color: '#ec4899' },
]

const certifications = [
  { name: 'AWS Solutions Architect',    issuer: 'Amazon Web Services',  color: '#f59e0b', abbr: 'SAA' },
  { name: 'CKS — Kubernetes Security', issuer: 'CNCF / Linux Foundation', color: '#f97316', abbr: 'CKS' },
  { name: 'RHCSA — Linux Admin',        issuer: 'Red Hat',              color: '#f43f5e', abbr: 'EX200' },
  { name: 'Terraform Associate',        issuer: 'HashiCorp',            color: '#fb923c', abbr: 'TF' },
]

const featuredCourses = courses.filter((c) => c.featured)

const colorMap: Record<string, string> = {
  blue: 'badge-blue', emerald: 'badge-emerald', amber: 'badge-amber',
  purple: 'badge-purple', rose: 'badge-rose', indigo: 'badge-indigo',
}

export default function HomePage() {
  return (
    <main>
      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-bg-orb hero-bg-orb-1" aria-hidden="true" />
        <div className="hero-bg-orb hero-bg-orb-2" aria-hidden="true" />
        <div className="hero-bg-grid" aria-hidden="true" />

        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid">
            {/* Left */}
            <div className="animate-fade-up">
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                Open to Opportunities
              </div>

              <h1 className="hero-name">
                Shubham<br />
                <span className="text-gradient">Rajawat</span>
              </h1>

              <p className="hero-title">Senior DevOps &amp; Cloud Engineer</p>

              <p className="hero-desc">
                I design and build resilient, cloud-native infrastructure at scale — Kubernetes platforms, GitOps pipelines, and observability stacks that teams rely on 24/7.
              </p>

              <div className="hero-ctas">
                <Link href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
                  View Projects <ChevronRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/courses" className="btn btn-secondary" id="hero-explore-courses-btn">
                  Explore Courses
                </Link>
              </div>

              <div className="hero-social">
                <a href="https://github.com/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub profile">
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
                <a href="https://linkedin.com/in/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn profile">
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a href="mailto:hello@codersdiary.online" className="hero-social-link" aria-label="Send email">
                  <Mail size={16} aria-hidden="true" /> Email
                </a>
              </div>
            </div>

            {/* Right — Terminal */}
            <div className="animate-fade-up-2">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ STATS ══════════════════════════════ */}
      <div className="stats-bar" aria-label="Key statistics">
        <div className="container">
          <dl className="stats-grid">
            {[
              { value: '4+',   label: 'Years Experience',   color: 'var(--blue-light)' },
              { value: '6+',   label: 'Production Projects', color: 'var(--emerald-light)' },
              { value: '200+', label: 'Servers Automated',   color: 'var(--amber-light)' },
              { value: '7K+',  label: 'Students Taught',     color: 'var(--purple-light)' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <dt className="sr-only">{s.label}</dt>
                <dd className="stat-value" style={{ color: s.color }}>{s.value}</dd>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ═══════════════════════════════ SKILLS ═════════════════════════════ */}
      <section className="section" id="skills" aria-labelledby="skills-heading" style={{ background: 'rgba(15,23,42,0.3)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Tech Arsenal</span>
            <h2 className="heading-lg" id="skills-heading" style={{ marginTop: '0.75rem' }}>
              Tools I Work With Daily
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              End-to-end DevOps toolchain mastery — from infrastructure to observability.
            </p>
          </div>

          <ul className="skills-grid animate-fade-up-2" aria-label="Technology skills">
            {skills.map(({ name, icon: Icon, tags, color }) => (
              <li key={name} className="skill-item">
                <div className="skill-icon" aria-hidden="true">
                  <Icon size={24} color={color} />
                </div>
                <h3 className="skill-name">{name}</h3>
                <div className="skill-tags" aria-label={`${name} technologies`}>
                  {tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════ PROJECTS ═══════════════════════════ */}
      <section className="section" id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Portfolio</span>
            <h2 className="heading-lg" id="projects-heading" style={{ marginTop: '0.75rem' }}>
              Production Engineering Work
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Real projects with real metrics — not tutorial apps.
            </p>
          </div>

          <ul className="projects-grid" aria-label="Portfolio projects">
            {projects.map((project, i) => (
              <li key={project.id} className={`project-card animate-fade-up-${Math.min(i + 1, 5)}`}>
                {/* Header */}
                <div className="project-card-header">
                  <div>
                    <span className={`badge ${colorMap[project.categoryColor] ?? 'badge-slate'}`} style={{ marginBottom: '0.625rem' }}>
                      {project.category}
                    </span>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="project-card-desc">{project.description}</p>

                {/* Tech stack */}
                <div className="project-tags" aria-label="Technologies used">
                  {project.techStack.slice(0, 5).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="tag">+{project.techStack.length - 5}</span>
                  )}
                </div>

                {/* Metrics */}
                <dl className="project-metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="metric">
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="metric-value">{m.value}</dd>
                      <p className="metric-label">{m.label}</p>
                    </div>
                  ))}
                </dl>

                {/* Footer links */}
                <div className="project-card-footer">
                  <Link
                    href={`/projects/${project.id}`}
                    className="project-link"
                    id={`project-detail-${project.id}`}
                  >
                    <BookOpen size={14} aria-hidden="true" /> Case Study
                  </Link>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" /> Live
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════ COURSES ════════════════════════════ */}
      <section className="section" id="courses" aria-labelledby="courses-heading" style={{ background: 'rgba(15,23,42,0.3)' }}>
        <div className="container">
          <div className="section-header animate-fade-up" style={{ marginBottom: '3rem' }}>
            <span className="label">I Also Teach</span>
            <h2 className="heading-lg" id="courses-heading" style={{ marginTop: '0.75rem' }}>
              DevOps Courses & Bootcamps
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              7,000+ students have learnt cloud-native DevOps through my programmes.
            </p>
          </div>

          <ul className="courses-grid animate-fade-up-2" aria-label="Featured courses">
            {featuredCourses.map((course) => {
              const discount = course.originalPrice
                ? Math.round((1 - course.price / course.originalPrice) * 100)
                : 0

              return (
                <li key={course.id} className="course-card">
                  <div className="course-card-badges">
                    <span className="badge badge-blue">{course.category}</span>
                    <span className="badge badge-slate">{course.level}</span>
                    {course.language !== 'English' && (
                      <span className="badge badge-amber">
                        {course.language === 'Hindi' ? '🇮🇳 Hindi' : '🌐 EN+HI'}
                      </span>
                    )}
                  </div>

                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>

                  <div className="course-card-meta">
                    <span className="course-card-meta-item">
                      <Clock size={13} aria-hidden="true" /> {course.duration}
                    </span>
                    <span className="course-card-meta-item">
                      <Users size={13} aria-hidden="true" /> {course.students.toLocaleString('en-IN')} students
                    </span>
                  </div>

                  <div className="course-card-pricing">
                    <span className="course-price-current">{course.currency}{course.price.toLocaleString('en-IN')}</span>
                    {course.originalPrice && (
                      <span className="course-price-original">{course.currency}{course.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                    {discount > 0 && (
                      <span className="course-price-discount">{discount}% OFF</span>
                    )}
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="btn btn-secondary"
                    id={`course-detail-${course.slug}`}
                    style={{ justifyContent: 'center', marginTop: '0.25rem' }}
                  >
                    View Course <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/courses" className="btn btn-primary" id="view-all-courses-btn">
              View All 8 Courses <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CERTIFICATIONS ═════════════════════ */}
      <section className="section-sm" aria-labelledby="certs-heading" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="label">Credentials</span>
            <h2 className="heading-md" id="certs-heading" style={{ marginTop: '0.75rem' }}>
              Industry Certifications
            </h2>
          </div>

          <ul className="certs-row" aria-label="Professional certifications">
            {certifications.map((cert) => (
              <li key={cert.name} className="cert-card">
                <div
                  className="cert-icon-wrapper"
                  aria-hidden="true"
                  style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}44` }}
                >
                  <Award size={22} color={cert.color} />
                </div>
                <div>
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-issuer">{cert.issuer} · {cert.abbr}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════ CONTACT ════════════════════════════ */}
      <section className="section" id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-section">
            <div className="contact-cta-box animate-fade-up">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>
                  Let&apos;s Build Together
                </span>
                <h2 className="heading-lg" id="contact-heading">
                  Interested in Hiring Me?
                </h2>
                <p className="body-lg" style={{ maxWidth: '560px', margin: '1.25rem auto 2.5rem' }}>
                  I&apos;m open to senior DevOps, Cloud, and SRE roles. Let&apos;s connect and talk about how I can help your team ship faster and with more confidence.
                </p>

                <div className="contact-links">
                  <a
                    href="mailto:hello@codersdiary.online"
                    className="btn btn-primary"
                    id="contact-email-btn"
                  >
                    <Mail size={16} aria-hidden="true" /> Get in Touch
                  </a>
                  <a
                    href="https://linkedin.com/in/shubhamrajawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="contact-linkedin-btn"
                  >
                    <Linkedin size={16} aria-hidden="true" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/shubhamrajawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="contact-github-btn"
                  >
                    <Github size={16} aria-hidden="true" /> GitHub
                  </a>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-2" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
                  {[
                    'Remote-friendly',
                    'Available immediately',
                    'India / Global',
                  ].map((t) => (
                    <div key={t} className="flex" style={{ alignItems: 'center', gap: '0.375rem', color: 'var(--text-3)', fontSize: '0.875rem' }}>
                      <CheckCircle size={14} color="var(--emerald)" aria-hidden="true" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
