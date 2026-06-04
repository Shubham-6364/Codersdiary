import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Users, CheckCircle, BookOpen, ArrowLeft, ExternalLink } from 'lucide-react'
import { courses } from '@/data/courses'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) return { title: 'Course Not Found' }
  return {
    title: `${course.title} | CodersDiary`,
    description: course.description,
    keywords: course.tags,
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) { notFound(); return null }

  const discount = course.originalPrice
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : 0

  const levelColor =
    course.level === 'Beginner'
      ? 'badge-emerald'
      : course.level === 'Advanced'
      ? 'badge-rose'
      : 'badge-amber'

  const langLabel =
    course.language === 'Hindi' ? '🇮🇳 Hindi' :
    course.language === 'English & Hindi' ? '🌐 English & Hindi' :
    '🇬🇧 English'

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="course-detail-hero"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), var(--bg))',
          borderBottom: '1px solid var(--border)',
        }}
        aria-labelledby="course-title"
      >
        <div className="container">
          <Link href="/courses" className="btn btn-secondary" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
            <ArrowLeft size={16} aria-hidden="true" /> Back to Courses
          </Link>

          <div className="flex gap-1 flex-wrap" style={{ marginBottom: '1.25rem' }}>
            <span className="badge badge-blue">{course.category}</span>
            <span className={`badge ${levelColor}`}>{course.level}</span>
            <span className="badge badge-slate">{langLabel}</span>
          </div>

          <h1 className="heading-xl" id="course-title" style={{ maxWidth: '800px', marginBottom: '1.25rem' }}>
            {course.title}
          </h1>

          <p className="body-lg" style={{ maxWidth: '680px', marginBottom: '2rem' }}>
            {course.description}
          </p>

          <div className="flex gap-3 flex-wrap" style={{ marginBottom: '2rem' }}>
            <span className="course-card-meta-item" style={{ color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Clock size={15} aria-hidden="true" /> {course.duration}
            </span>
            <span className="course-card-meta-item" style={{ color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Users size={15} aria-hidden="true" /> {course.students.toLocaleString('en-IN')} students enrolled
            </span>
            <span className="course-card-meta-item" style={{ color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <BookOpen size={15} aria-hidden="true" /> {course.curriculum.length} modules
            </span>
          </div>
        </div>
      </section>

      {/* ── Main grid ── */}
      <section className="section-sm" aria-label="Course details">
        <div className="container">
          <div className="course-detail-grid">
            {/* Left — Content */}
            <div>
              {/* What you will learn */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 className="heading-sm" style={{ marginBottom: '1.25rem' }}>
                  What You&apos;ll Learn
                </h2>
                <p className="body" style={{ marginBottom: '2rem' }}>{course.longDescription}</p>

                <div className="highlight-list" aria-label="Course highlights">
                  {[
                    `Taught entirely in ${course.language}`,
                    'Hands-on labs with real infrastructure',
                    'Lifetime access to recordings and materials',
                    'Private community for doubt clearing',
                    'Certificate of completion',
                  ].map((item) => (
                    <div key={item} className="highlight-item">
                      <span className="highlight-dot" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="heading-sm" style={{ marginBottom: '1.5rem' }}>
                  Course Curriculum
                </h2>
                <ol className="curriculum-list" aria-label="Course curriculum">
                  {course.curriculum.map((mod, i) => (
                    <li key={mod.module} className="curriculum-module">
                      <div className="curriculum-module-header">
                        <span style={{ color: 'var(--text-3)', marginRight: '0.625rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {mod.module}
                      </div>
                      <ul className="curriculum-lessons" aria-label={`${mod.module} lessons`}>
                        {mod.lessons.map((lesson) => (
                          <li key={lesson} className="curriculum-lesson">
                            <CheckCircle size={14} color="var(--emerald)" aria-hidden="true" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tags */}
              <div style={{ marginTop: '2.5rem' }}>
                <h2 className="sr-only">Tags</h2>
                <div className="project-tags">
                  {course.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Pricing sticky card */}
            <aside className="course-detail-sticky" aria-label="Enrollment">
              <div className="course-price-box">
                <div style={{ marginBottom: '1.25rem' }}>
                  <div className="course-price-big text-gradient">
                    {course.currency}{course.price.toLocaleString('en-IN')}
                  </div>
                  {course.originalPrice && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.375rem' }}>
                      <span className="course-price-original" style={{ fontSize: '1rem' }}>
                        {course.currency}{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                      {discount > 0 && (
                        <span className="course-price-discount">{discount}% OFF</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Enroll → Stripe */}
                <a
                  href={course.stripePaymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-enroll"
                  id={`enroll-${course.slug}`}
                >
                  Enroll Now — Secure Checkout <ExternalLink size={16} aria-hidden="true" />
                </a>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '0.875rem' }}>
                  Secure payment via Stripe. 30-day money-back guarantee.
                </p>

                <div className="divider" style={{ marginBlock: '1.25rem' }} />

                {/* Includes */}
                <h3 className="heading-sm" style={{ marginBottom: '0.875rem', fontSize: '0.9375rem' }}>
                  This course includes:
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    `${course.duration} of content`,
                    `${course.curriculum.reduce((a, m) => a + m.lessons.length, 0)} lessons`,
                    'Hands-on lab environments',
                    'Lifetime access',
                    'Certificate of completion',
                    `Taught in ${course.language}`,
                  ].map((item) => (
                    <li key={item} className="curriculum-lesson">
                      <CheckCircle size={15} color="var(--emerald)" aria-hidden="true" />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
