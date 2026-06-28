'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Clock, Users, ChevronRight, BookOpen,
  Youtube, Linkedin, Github, CheckCircle, Zap,
  TrendingUp, Shield, Globe, Star, MessageCircle,
  Monitor, Terminal, FolderGit2
} from 'lucide-react'
import { courses } from '@/data/courses'
import CourseFilters from '@/components/CourseFilters'

const stats = [
  { value: '7,000+', label: 'Students Enrolled', color: 'var(--blue-light)' },
  { value: '8',      label: 'Courses Available', color: 'var(--emerald-light)' },
  { value: '4.9★',   label: 'Average Rating',    color: 'var(--amber-light)' },
  { value: '₹1,999', label: 'Starting From',     color: 'var(--purple-light)' },
]

const whyUs = [
  { icon: Monitor,    title: 'Hands-On Labs',          desc: 'Every course includes real lab environments — no theory-only lectures. You build things that actually work.',         color: '#f97316' },
  { icon: Globe,      title: 'Hindi & English',         desc: 'Courses available in Hindi and English so language is never a barrier to learning DevOps.',                          color: '#10b981' },
  { icon: TrendingUp, title: 'Industry-Relevant',       desc: 'Curriculum mirrors what enterprise teams use today — AWS, Kubernetes, Terraform, ArgoCD, Prometheus.',              color: '#f59e0b' },
  { icon: Shield,     title: 'Certification Focused',   desc: 'AWS SAA, CKS, RHCSA, Terraform Associate — structured prep with mock exams and timed practice.',                    color: '#f43f5e' },
  { icon: MessageCircle, title: 'Community Support',   desc: 'Private Telegram groups for each course. Get doubt resolution from the instructor and fellow students.',             color: '#06b6d4' },
  { icon: Zap,        title: 'Lifetime Access',         desc: 'Pay once, access forever. All future updates to the course content are included at no extra charge.',                color: '#fbbf24' },
]

const learningPaths = [
  {
    title: 'DevOps Beginner Path',
    color: '#10b981',
    badge: 'Start Here',
    steps: [
      'Docker & Containers (Hindi)',
      'Linux / RHCSA Certification Prep',
      'Ansible for Linux Admins',
      'Terraform & IaC Mastery',
    ],
  },
  {
    title: 'Cloud & Kubernetes Path',
    color: '#f97316',
    badge: 'Most Popular',
    steps: [
      'AWS Solutions Architect Bootcamp',
      'Kubernetes for Production',
      'CKS Exam Preparation',
      'Complete DevOps Bootcamp',
    ],
  },
]

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'DevOps Engineer at Infosys',
    avatar: 'AS',
    color: '#f97316',
    text: 'Cleared RHCSA in first attempt after this course. The Hindi medium made complex topics so easy to understand. Best investment I made in my career.',
    course: 'RHCSA Certification Prep',
  },
  {
    name: 'Sneha Patel',
    role: 'Cloud Engineer at TCS',
    avatar: 'SP',
    color: '#10b981',
    text: 'The AWS bootcamp is incredibly detailed. 30+ hands-on labs with real AWS accounts — I learned more in 4 weeks than in 6 months of self-study.',
    course: 'AWS Solutions Architect Bootcamp',
  },
  {
    name: 'Rahul Verma',
    role: 'Senior SRE at Zerodha',
    avatar: 'RV',
    color: '#f59e0b',
    text: 'Kubernetes for Production is genuinely production-grade content. My team asked how I learned Karpenter + ArgoCD so well. This course is why.',
    course: 'Kubernetes for Production',
  },
]

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory)

  return (
    <main style={{ paddingTop: '4.5rem' }}>

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="courses-hero" aria-labelledby="courses-page-heading">
        <div className="courses-hero-orb courses-hero-orb-1" aria-hidden="true" />
        <div className="courses-hero-orb courses-hero-orb-2" aria-hidden="true" />
        <div className="container">
          <div className="courses-hero-inner">
            <span className="label" style={{ display: 'block', marginBottom: '0.875rem' }}>
              CodersDiary Learn
            </span>
            <h1 className="heading-xl" id="courses-page-heading">
              Master DevOps&nbsp;
              <span className="text-gradient">the Right Way</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '620px', margin: '1.25rem auto 2rem' }}>
              Hands-on courses in Hindi &amp; English — from Docker basics to production Kubernetes. Built for engineers who want to learn what actually runs in enterprise environments.
            </p>

            <div className="courses-hero-badges">
              {['🎓 7,000+ Students', '🇮🇳 Hindi & English', '⚡ Lifetime Access', '✅ Cert-Focused'].map((b) => (
                <span key={b} className="badge badge-slate" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.9rem' }}>{b}</span>
              ))}
            </div>

            <div className="courses-hero-ctas">
              <a href="#catalog" className="btn btn-primary" id="hero-browse-courses-btn">
                Browse Courses <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a href="#instructor" className="btn btn-secondary" id="hero-instructor-btn">
                Meet the Instructor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ STATS ══════════════════════════════ */}
      <div className="stats-bar" aria-label="Platform statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════ WHY CODERSDIARY ════════════════════ */}
      <section className="section" style={{ background: 'rgba(15,23,42,0.3)' }} aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Why CodersDiary</span>
            <h2 className="heading-lg" id="why-heading" style={{ marginTop: '0.75rem' }}>
              Learn From Real Infrastructure
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Not a tutorial farm. Every lesson comes from real production experience.
            </p>
          </div>
          <div className="why-grid animate-fade-up-2">
            {whyUs.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="why-card">
                <div className="why-icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={22} color={color} aria-hidden="true" />
                </div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CATALOG ════════════════════════════ */}
      <section className="section" id="catalog" aria-labelledby="catalog-heading">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Course Catalog</span>
            <h2 className="heading-lg" id="catalog-heading" style={{ marginTop: '0.75rem' }}>
              Pick Your Course
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              {courses.length} courses across Cloud, Kubernetes, Linux, and IaC.
            </p>
          </div>

          <CourseFilters active={activeCategory} onChange={setActiveCategory} />

          {filtered.length === 0 ? (
            <p className="body text-center" style={{ padding: '4rem 0' }}>
              No courses in this category yet — check back soon!
            </p>
          ) : (
            <ul className="courses-grid animate-fade-up-2" aria-label={`${activeCategory === 'All' ? 'All' : activeCategory} courses`}>
              {filtered.map((course) => {
                const discount = course.originalPrice
                  ? Math.round((1 - course.price / course.originalPrice) * 100)
                  : 0
                const langBadge =
                  course.language === 'Hindi' ? '🇮🇳 Hindi'
                  : course.language === 'English & Hindi' ? '🌐 EN+HI'
                  : null
                const levelColor =
                  course.level === 'Beginner' ? 'badge-emerald'
                  : course.level === 'Advanced' ? 'badge-rose'
                  : 'badge-amber'

                return (
                  <li key={course.id} className="course-card">
                    {course.featured && (
                      <div className="course-card-featured-ribbon">
                        <Star size={11} aria-hidden="true" /> Featured
                      </div>
                    )}
                    <div className="course-card-badges">
                      <span className="badge badge-blue">{course.category}</span>
                      <span className={`badge ${levelColor}`}>{course.level}</span>
                      {langBadge && <span className="badge badge-amber">{langBadge}</span>}
                    </div>

                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-desc">{course.description}</p>

                    <div className="course-card-meta">
                      <span className="course-card-meta-item">
                        <Clock size={13} aria-hidden="true" /> {course.duration}
                      </span>
                      <span className="course-card-meta-item">
                        <Users size={13} aria-hidden="true" />{' '}
                        {course.students.toLocaleString('en-IN')} students
                      </span>
                      <span className="course-card-meta-item">
                        <FolderGit2 size={13} aria-hidden="true" /> {course.projects.length} projects
                      </span>
                    </div>

                    <div className="project-tags">
                      {course.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {/* Projects Preview */}
                    <div className="course-projects-preview">
                      <p className="course-projects-label">
                        <FolderGit2 size={12} aria-hidden="true" /> Hands-on Projects
                      </p>
                      <ul className="course-projects-list">
                        {course.projects.slice(0, 2).map((p) => (
                          <li key={p.title} className="course-project-item">
                            <CheckCircle size={11} color="var(--emerald)" aria-hidden="true" />
                            {p.title}
                          </li>
                        ))}
                        {course.projects.length > 2 && (
                          <li className="course-project-more">+{course.projects.length - 2} more projects</li>
                        )}
                      </ul>
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
                      id={`course-list-${course.slug}`}
                      style={{ justifyContent: 'center' }}
                    >
                      View Details <ChevronRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ══════════════════════════════ LEARNING PATHS ═════════════════════ */}
      <section className="section" style={{ background: 'rgba(15,23,42,0.3)', borderTop: '1px solid var(--border)' }} aria-labelledby="paths-heading">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Structured Learning</span>
            <h2 className="heading-lg" id="paths-heading" style={{ marginTop: '0.75rem' }}>
              Recommended Learning Paths
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Not sure where to start? Follow these curated paths based on your goals.
            </p>
          </div>
          <div className="paths-grid animate-fade-up-2">
            {learningPaths.map((path) => (
              <div key={path.title} className="path-card" style={{ borderTop: `3px solid ${path.color}` }}>
                <div className="path-card-header">
                  <h3 className="path-title">{path.title}</h3>
                  <span className="path-badge" style={{ background: `${path.color}20`, color: path.color, border: `1px solid ${path.color}40` }}>
                    {path.badge}
                  </span>
                </div>
                <ol className="path-steps">
                  {path.steps.map((step, i) => (
                    <li key={step} className="path-step">
                      <span className="path-step-num" style={{ background: `${path.color}20`, color: path.color }}>{i + 1}</span>
                      <span className="path-step-text">{step}</span>
                    </li>
                  ))}
                </ol>
                <a href="#catalog" className="btn btn-secondary" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
                  Start This Path <ChevronRight size={16} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="reviews-heading">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="label">Student Reviews</span>
            <h2 className="heading-lg" id="reviews-heading" style={{ marginTop: '0.75rem' }}>
              What Students Say
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>
              Real feedback from engineers who levelled up with CodersDiary.
            </p>
          </div>
          <div className="testimonials-grid animate-fade-up-2">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="courses-stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--amber-light)" color="var(--amber-light)" aria-hidden="true" />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: `${t.color}22`, border: `2px solid ${t.color}44`, color: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginTop: '0.125rem' }}>
                      <BookOpen size={10} style={{ display: 'inline', marginRight: '0.25rem' }} aria-hidden="true" />
                      {t.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ INSTRUCTOR ═════════════════════════ */}
      <section className="section" id="instructor" style={{ background: 'rgba(15,23,42,0.3)', borderTop: '1px solid var(--border)' }} aria-labelledby="instructor-heading">
        <div className="container">
          <div className="instructor-card animate-fade-up">
            <div className="instructor-avatar-wrap">
              <div className="instructor-avatar">SR</div>
              <div className="instructor-badges-col">
                {['3+ Yrs Production', 'AWS Certified', 'CKS Certified', 'RHCSA Certified'].map((b) => (
                  <span key={b} className="instructor-badge">
                    <CheckCircle size={11} aria-hidden="true" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="instructor-info">
              <span className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Instructor</span>
              <h2 className="heading-md" id="instructor-heading" style={{ marginBottom: '0.5rem' }}>
                Shubham <span className="text-gradient">Rajawat</span>
              </h2>
              <p className="body" style={{ color: 'var(--text-2)', marginBottom: '1.25rem' }}>
                Senior DevOps &amp; Cloud Engineer · CodersDiary Founder
              </p>
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                I&apos;ve spent 3+ years building and operating production Kubernetes platforms, multi-region AWS infrastructure, and GitOps pipelines for real companies. Everything I teach comes directly from what I do day-to-day — not from documentation or theory.
              </p>
              <p className="body" style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>
                I started CodersDiary because I wanted to make practical DevOps education accessible in Hindi — without compromising on depth. No fluff, no filler — just what you need to land the job or ace the cert.
              </p>
              <div className="instructor-social">
                <a href="https://youtube.com/@codersdiary" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="instructor-youtube-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                  <Youtube size={16} aria-hidden="true" /> YouTube
                </a>
                <a href="https://linkedin.com/in/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="instructor-linkedin-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a href="https://github.com/shubhamrajawat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="instructor-github-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CTA BAND ═══════════════════════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="final-cta-heading">
        <div className="container">
          <div className="contact-cta-box animate-fade-up">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>Ready to Level Up?</span>
              <h2 className="heading-lg" id="final-cta-heading">Start Learning Today</h2>
              <p className="body-lg" style={{ maxWidth: '520px', margin: '1.25rem auto 2.5rem' }}>
                Join 7,000+ engineers who are building real skills with CodersDiary. Lifetime access, Hindi &amp; English, and direct instructor support.
              </p>
              <div className="contact-links">
                <a href="#catalog" className="btn btn-primary" id="cta-browse-btn">
                  <BookOpen size={16} aria-hidden="true" /> Browse All Courses
                </a>
                <a href="mailto:hello@codersdiary.online" className="btn btn-secondary" id="cta-contact-btn">
                  <Terminal size={16} aria-hidden="true" /> Contact Instructor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
