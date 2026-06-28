import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Terminal, ChevronRight, Github, Linkedin, Mail,
  Cloud, Container, Settings, Layers, BarChart,
  Code, ShieldCheck, ExternalLink, BookOpen,
  Award, CheckCircle, Download, MapPin, Briefcase,
  Zap, RefreshCw, Eye, Lock, Quote, Search
} from 'lucide-react'
import { projects } from '@/data/projects'
import TerminalWindow from '@/components/TerminalWindow'

export const metadata: Metadata = {
  title: 'Shubham Rajawat | Senior DevOps & Cloud Engineer',
  description:
    'Portfolio of Shubham Rajawat — Senior DevOps & Cloud Engineer with 3+ years building production-grade Kubernetes, AWS, Terraform, and CI/CD infrastructure. Open to remote opportunities.',
}

/* ── Data ── */
const skills = [
  { name: 'Cloud Platforms',       icon: Cloud,       tags: ['AWS', 'Azure', 'GCP'],                  color: '#f97316', level: 'Expert' },
  { name: 'Containers',            icon: Container,   tags: ['Docker', 'K8s', 'Helm'],                color: '#10b981', level: 'Expert' },
  { name: 'CI/CD',                 icon: Settings,    tags: ['GitHub Actions', 'ArgoCD', 'Jenkins'],  color: '#f59e0b', level: 'Expert' },
  { name: 'IaC',                   icon: Layers,      tags: ['Terraform', 'Ansible', 'Pulumi'],       color: '#fb923c', level: 'Expert' },
  { name: 'Linux & OS',            icon: Terminal,    tags: ['RHEL', 'Ubuntu', 'Shell'],              color: '#f43f5e', level: 'Expert' },
  { name: 'Observability',         icon: BarChart,    tags: ['Prometheus', 'Grafana', 'ELK'],         color: '#06b6d4', level: 'Advanced' },
  { name: 'SRE & Reliability',     icon: ShieldCheck, tags: ['SLOs', 'Runbooks', 'On-call'],          color: '#fbbf24', level: 'Advanced' },
  { name: 'Security & DevSecOps',  icon: Code,        tags: ['Trivy', 'Falco', 'OPA'],               color: '#ec4899', level: 'Advanced' },
]

const levelColor: Record<string, string> = {
  Expert:   'var(--blue-light)',
  Advanced: 'var(--emerald-light)',
  Familiar: 'var(--text-3)',
}

const certifications = [
  { name: 'AWS Solutions Architect',    issuer: 'Amazon Web Services',    color: '#f59e0b', abbr: 'SAA' },
  { name: 'CKS — Kubernetes Security', issuer: 'CNCF / Linux Foundation', color: '#f97316', abbr: 'CKS' },
  { name: 'RHCSA — Linux Admin',        issuer: 'Red Hat',                color: '#f43f5e', abbr: 'EX200' },
  { name: 'Terraform Associate',        issuer: 'HashiCorp',              color: '#fb923c', abbr: 'TF' },
]

const colorMap: Record<string, string> = {
  blue: 'badge-blue', emerald: 'badge-emerald', amber: 'badge-amber',
  purple: 'badge-purple', rose: 'badge-rose', indigo: 'badge-indigo',
}

const howIWork = [
  {
    icon: Eye,
    step: '01',
    title: 'Understand the System',
    desc: 'I start by mapping existing architecture, pain points, and team workflows — no tool chosen before the problem is understood.',
    color: '#f97316',
  },
  {
    icon: Layers,
    step: '02',
    title: 'Design for Reliability',
    desc: 'Infrastructure design with failure modes in mind: HA, DR, idempotency, and cost-efficiency built in from the start.',
    color: '#10b981',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Automate Everything',
    desc: 'Every repeatable task gets automated. IaC for infra, GitOps for deployments, pipelines for testing — humans for decisions only.',
    color: '#f59e0b',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Observe & Iterate',
    desc: 'SLOs, dashboards, and alerting give teams real signal. Post-mortems and blameless reviews drive continuous improvement.',
    color: '#06b6d4',
  },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Engineering Manager',
    company: 'FinTech Startup',
    avatar: 'RS',
    avatarColor: '#f97316',
    text: 'Shubham rebuilt our entire deployment pipeline from scratch. What used to take 45 minutes now takes under 8. His attention to security and reliability standards is exceptional.',
  },
  {
    name: 'Priya Mehta',
    role: 'Senior Software Engineer',
    company: 'SaaS Platform',
    avatar: 'PM',
    avatarColor: '#10b981',
    text: 'Working with Shubham transformed how our team thinks about infrastructure. He doesn\'t just set up tools — he educates the team and documents everything meticulously.',
  },
  {
    name: 'Vikram Nair',
    role: 'CTO',
    company: 'B2B SaaS',
    avatar: 'VN',
    avatarColor: '#f59e0b',
    text: 'Our AWS costs dropped 35% and uptime went to 99.99% within 3 months of Shubham joining. His multi-region EKS setup handled Black Friday traffic flawlessly.',
  },
]

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
                <Link href="/#projects" className="btn btn-primary" id="hero-view-projects-btn">
                  View Projects <ChevronRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/#contact" className="btn btn-secondary" id="hero-contact-btn">
                  Get in Touch
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
          <div className="stats-grid">
            {[
              { value: '3+',   label: 'Years Experience',   color: 'var(--blue-light)' },
              { value: '6+',   label: 'Production Projects', color: 'var(--emerald-light)' },
              { value: '200+', label: 'Servers Automated',   color: 'var(--amber-light)' },
              { value: '99%',  label: 'Uptime Delivered',    color: 'var(--purple-light)' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════ ABOUT ═════════════════════════════ */}
      <section className="section-sm" id="about" aria-labelledby="about-heading" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="about-grid">
            {/* Left — Bio */}
            <div className="animate-fade-up">
              <span className="label">About Me</span>
              <h2 className="heading-md" id="about-heading" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                Building Infrastructure That&nbsp;
                <span className="text-gradient">Doesn&apos;t Sleep</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                I&apos;m a Senior DevOps &amp; Cloud Engineer with <strong style={{ color: 'var(--text)' }}>3+ years</strong> of hands-on experience designing, building, and operating production cloud-native systems. I specialise in Kubernetes platforms, AWS infrastructure, GitOps pipelines, and observability stacks that teams rely on around the clock.
              </p>
              <p className="body" style={{ marginBottom: '2rem' }}>
                I care deeply about reliability, automation, and developer experience — if it can be automated, it should be. I bring a builder&apos;s mindset to every problem: not just deploying tools, but designing systems that are resilient, cost-efficient, and maintainable at scale.
              </p>
              <div className="about-meta-list">
                {[
                  { icon: MapPin,        text: 'India · Remote / Global' },
                  { icon: Briefcase,     text: 'Open to Senior DevOps, SRE & Cloud Roles' },
                  { icon: CheckCircle,   text: 'Available Immediately' },
                  { icon: Lock,          text: 'Security-first engineering mindset' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="about-meta-item">
                    <Icon size={15} color="var(--blue-light)" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — What I'm Looking For */}
            <div className="animate-fade-up-2">
              <div className="about-looking-card">
                <h3 className="heading-sm" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Search size={18} color="var(--blue-light)" aria-hidden="true" />
                  What I&apos;m Looking For
                </h3>
                <ul className="looking-list">
                  {[
                    { label: 'Role',      value: 'Senior DevOps / SRE / Cloud Engineer' },
                    { label: 'Domain',    value: 'FinTech, SaaS, Platform Engineering' },
                    { label: 'Stack',     value: 'AWS · Kubernetes · Terraform · GitOps' },
                    { label: 'Style',     value: 'Remote-first, async-friendly teams' },
                    { label: 'Notice',    value: 'Immediately available' },
                  ].map(({ label, value }) => (
                    <li key={label} className="looking-row">
                      <span className="looking-label">{label}</span>
                      <span className="looking-value">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW I WORK ════════════════════════ */}
      <section className="section" id="process" aria-labelledby="process-heading" style={{ background: 'rgba(15,23,42,0.3)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Engineering Philosophy</span>
            <h2 className="heading-lg" id="process-heading" style={{ marginTop: '0.75rem' }}>
              How I Work
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Four principles I apply to every infrastructure project — from a 3-node cluster to a 50-account landing zone.
            </p>
          </div>

          <div className="process-grid animate-fade-up-2">
            {howIWork.map(({ icon: Icon, step, title, desc, color }) => (
              <div key={step} className="process-card">
                <div className="process-step-row">
                  <div className="process-icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={22} color={color} aria-hidden="true" />
                  </div>
                  <span className="process-step-num" style={{ color }}>{step}</span>
                </div>
                <h3 className="process-title">{title}</h3>
                <p className="process-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SKILLS ═════════════════════════════ */}
      <section className="section" id="skills" aria-labelledby="skills-heading">
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
            {skills.map(({ name, icon: Icon, tags, color, level }) => (
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
                <span className="skill-level" style={{ color: levelColor[level] }}>{level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════ PROJECTS ═══════════════════════════ */}
      <section className="section" id="projects" aria-labelledby="projects-heading" style={{ background: 'rgba(15,23,42,0.3)' }}>
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
                <div className="project-card-header">
                  <div>
                    <span className={`badge ${colorMap[project.categoryColor] ?? 'badge-slate'}`} style={{ marginBottom: '0.625rem' }}>
                      {project.category}
                    </span>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>
                </div>

                <p className="project-card-desc">{project.description}</p>

                <div className="project-tags" aria-label="Technologies used">
                  {project.techStack.slice(0, 5).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="tag">+{project.techStack.length - 5}</span>
                  )}
                </div>

                <dl className="project-metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="metric">
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="metric-value">{m.value}</dd>
                      <p className="metric-label">{m.label}</p>
                    </div>
                  ))}
                </dl>

                <div className="project-card-footer">
                  <Link href={`/projects/${project.id}`} className="project-link" id={`project-detail-${project.id}`}>
                    <BookOpen size={14} aria-hidden="true" /> Case Study
                  </Link>
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`GitHub for ${project.title}`}>
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Live demo for ${project.title}`}>
                      <ExternalLink size={14} aria-hidden="true" /> Live
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* ═══════════════════════════════ TESTIMONIALS ════════════════════════ */}
      <section className="section" aria-labelledby="testimonials-heading" style={{ background: 'rgba(15,23,42,0.3)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Social Proof</span>
            <h2 className="heading-lg" id="testimonials-heading" style={{ marginTop: '0.75rem' }}>
              What Colleagues Say
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Feedback from engineers and leaders I&apos;ve worked with.
            </p>
          </div>

          <div className="testimonials-grid animate-fade-up-2">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <Quote size={28} className="testimonial-quote-icon" aria-hidden="true" />
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: `${t.avatarColor}22`, border: `2px solid ${t.avatarColor}44`, color: t.avatarColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ═══════════════════════════════ CERTIFICATIONS ═════════════════════ */}
      <section className="section-sm" aria-labelledby="certs-heading" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
      <section className="section" id="contact" aria-labelledby="contact-heading" style={{ borderTop: '1px solid var(--border)' }}>
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
                  <a href="mailto:hello@codersdiary.online" className="btn btn-primary" id="contact-email-btn">
                    <Mail size={16} aria-hidden="true" /> Get in Touch
                  </a>
                  <a href="/resume.pdf" download className="btn btn-secondary" id="contact-resume-btn">
                    <Download size={16} aria-hidden="true" /> Download Resume
                  </a>
                  <a href="https://linkedin.com/in/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="contact-linkedin-btn">
                    <Linkedin size={16} aria-hidden="true" /> LinkedIn
                  </a>
                  <a href="https://github.com/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="contact-github-btn">
                    <Github size={16} aria-hidden="true" /> GitHub
                  </a>
                </div>

                <div className="contact-trust-row">
                  {['Remote-friendly', 'Available immediately', 'India / Global'].map((t) => (
                    <div key={t} className="contact-trust-item">
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

      {/* ═══════════════════════════════ CODERSDIARY COMMUNITY ═════════════ */}
      <section className="codersdiary-banner" aria-labelledby="cd-banner-heading">
        <div className="container">
          <div className="cd-banner-inner">
            <div className="cd-banner-left">
              <div className="cd-banner-logo">
                <Terminal size={22} color="#fff" aria-hidden="true" />
              </div>
              <div>
                <h2 className="cd-banner-title" id="cd-banner-heading">
                  Coders<span className="text-gradient">Diary</span>
                </h2>
                <p className="cd-banner-subtitle">Community &amp; Knowledge Sharing</p>
              </div>
            </div>
            <p className="cd-banner-desc">
              CodersDiary is my platform for connecting with the DevOps community. I share practical knowledge, answer real-world infrastructure questions, and help engineers at all levels navigate cloud-native technologies — from Kubernetes to AWS to Linux hardening.
            </p>
            <div className="cd-banner-links">
              <a
                href="https://youtube.com/@codersdiary"
                target="_blank"
                rel="noopener noreferrer"
                className="cd-banner-link"
                id="cd-youtube-link"
                aria-label="CodersDiary YouTube channel"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a
                href="https://linkedin.com/in/shubhamrajawat"
                target="_blank"
                rel="noopener noreferrer"
                className="cd-banner-link"
                id="cd-linkedin-link"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/shubhamrajawat"
                target="_blank"
                rel="noopener noreferrer"
                className="cd-banner-link"
                id="cd-github-link"
                aria-label="GitHub profile"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
