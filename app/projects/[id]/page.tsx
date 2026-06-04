import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} | Shubham Rajawat Portfolio`,
    description: project.description,
    keywords: project.techStack,
  }
}

const colorMap: Record<string, string> = {
  blue:    'badge-blue',
  emerald: 'badge-emerald',
  amber:   'badge-amber',
  purple:  'badge-purple',
  rose:    'badge-rose',
  indigo:  'badge-indigo',
}

const metricColors = [
  'var(--blue-light)',
  'var(--emerald-light)',
  'var(--amber-light)',
  'var(--purple-light)',
]

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) { notFound(); return null }

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="project-detail-hero"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), var(--bg))',
          borderBottom: '1px solid var(--border)',
        }}
        aria-labelledby="project-title"
      >
        <div className="container">
          <Link href="/#projects" className="btn btn-secondary" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
            <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
          </Link>

          <span className={`badge ${colorMap[project.categoryColor] ?? 'badge-slate'}`} style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            {project.category}
          </span>

          <h1 className="heading-xl" id="project-title" style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            {project.title}
          </h1>

          <p className="body-lg" style={{ maxWidth: '680px', marginBottom: '2rem' }}>
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-2 flex-wrap">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id={`project-github-${project.id}`}
              >
                <Github size={16} aria-hidden="true" /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id={`project-live-${project.id}`}
              >
                <ExternalLink size={16} aria-hidden="true" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="section-sm" aria-label="Project metrics">
        <div className="container">
          <dl className="metrics-grid-4">
            {project.metrics.map((m, i) => (
              <div key={m.label} className="metric-box">
                <dt className="sr-only">{m.label}</dt>
                <dd
                  className="metric-value"
                  style={{ fontSize: '2rem', color: metricColors[i % metricColors.length] }}
                >
                  {m.value}
                </dd>
                <p className="metric-label" style={{ marginTop: '0.375rem' }}>{m.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Detail ── */}
      <section className="section-sm" aria-label="Project details">
        <div className="container">
          <div className="course-detail-grid">
            {/* Left */}
            <div>
              {/* Overview */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 className="heading-sm" style={{ marginBottom: '1.25rem' }}>
                  Project Overview
                </h2>
                <p className="body" style={{ lineHeight: '1.8' }}>
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="heading-sm" style={{ marginBottom: '1.25rem' }}>
                  Key Achievements
                </h2>
                <ul className="highlight-list" aria-label="Project achievements">
                  {project.highlights.map((h) => (
                    <li key={h} className="highlight-item">
                      <span className="highlight-dot" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Sidebar */}
            <aside aria-label="Project information">
              {/* Tech Stack */}
              <div className="course-price-box" style={{ marginBottom: '1.5rem' }}>
                <h2 className="heading-sm" style={{ marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                  Tech Stack
                </h2>
                <div className="project-tags" style={{ gap: '0.5rem' }}>
                  {project.techStack.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: '0.8125rem' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Back to portfolio */}
              <div className="course-price-box">
                <p className="body" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Interested in what I can build for your team?
                </p>
                <a
                  href="mailto:hello@codersdiary.online"
                  className="btn btn-primary"
                  id="project-contact-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Get in Touch
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Other projects ── */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)' }} aria-label="Other projects">
        <div className="container">
          <h2 className="heading-sm" style={{ marginBottom: '2rem' }}>More Projects</h2>
          <div className="flex gap-2 flex-wrap">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="btn btn-secondary"
                  id={`related-project-${p.id}`}
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
