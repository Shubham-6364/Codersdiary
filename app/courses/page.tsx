'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, Users, ChevronRight } from 'lucide-react'
import { courses } from '@/data/courses'
import CourseFilters from '@/components/CourseFilters'

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory)

  return (
    <main style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section
        className="section-sm"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.6), transparent)',
          borderBottom: '1px solid var(--border)',
        }}
        aria-labelledby="courses-page-heading"
      >
        <div className="container text-center">
          <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>
            DevOps Education
          </span>
          <h1 className="heading-xl" id="courses-page-heading">
            Courses &amp; <span className="text-gradient">Bootcamps</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', margin: '1.25rem auto 0' }}>
            Hands-on programmes in English and Hindi — from Docker basics to production Kubernetes. Learn what actually runs in enterprise environments.
          </p>

          <div
            className="flex flex-wrap gap-2"
            style={{ justifyContent: 'center', marginTop: '2rem' }}
          >
            {[
              { icon: '🎓', label: '7,000+ students enrolled' },
              { icon: '🇮🇳', label: 'Hindi & English' },
              { icon: '⚡', label: 'Lifetime access' },
            ].map((item) => (
              <span key={item.label} className="badge badge-slate" style={{ fontSize: '0.8125rem', padding: '0.375rem 0.875rem' }}>
                {item.icon} {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="section" aria-labelledby="catalog-heading">
        <div className="container">
          <h2 className="sr-only" id="catalog-heading">Course Catalog</h2>

          <CourseFilters active={activeCategory} onChange={setActiveCategory} />

          {filtered.length === 0 ? (
            <p className="body text-center" style={{ padding: '4rem 0' }}>
              No courses in this category yet — check back soon!
            </p>
          ) : (
            <ul
              className="courses-grid"
              aria-label={`${activeCategory === 'All' ? 'All' : activeCategory} courses`}
            >
              {filtered.map((course) => {
                const discount = course.originalPrice
                  ? Math.round((1 - course.price / course.originalPrice) * 100)
                  : 0

                const langBadge =
                  course.language === 'Hindi'
                    ? '🇮🇳 Hindi'
                    : course.language === 'English & Hindi'
                    ? '🌐 EN+HI'
                    : null

                const levelColor =
                  course.level === 'Beginner'
                    ? 'badge-emerald'
                    : course.level === 'Advanced'
                    ? 'badge-rose'
                    : 'badge-amber'

                return (
                  <li key={course.id} className="course-card">
                    {/* Badges */}
                    <div className="course-card-badges">
                      <span className="badge badge-blue">{course.category}</span>
                      <span className={`badge ${levelColor}`}>{course.level}</span>
                      {langBadge && (
                        <span className="badge badge-amber">{langBadge}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="course-card-title">{course.title}</h3>

                    {/* Description */}
                    <p className="course-card-desc">{course.description}</p>

                    {/* Meta */}
                    <div className="course-card-meta">
                      <span className="course-card-meta-item">
                        <Clock size={13} aria-hidden="true" /> {course.duration}
                      </span>
                      <span className="course-card-meta-item">
                        <Users size={13} aria-hidden="true" />{' '}
                        {course.students.toLocaleString('en-IN')} students
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="project-tags">
                      {course.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="course-card-pricing">
                      <span className="course-price-current">
                        {course.currency}
                        {course.price.toLocaleString('en-IN')}
                      </span>
                      {course.originalPrice && (
                        <span className="course-price-original">
                          {course.currency}
                          {course.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      {discount > 0 && (
                        <span className="course-price-discount">{discount}% OFF</span>
                      )}
                    </div>

                    {/* CTA */}
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
    </main>
  )
}
