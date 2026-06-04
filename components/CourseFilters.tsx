'use client'

import { courseCategories } from '@/data/courses'

interface CourseFiltersProps {
  active: string
  onChange: (cat: string) => void
}

export default function CourseFilters({ active, onChange }: CourseFiltersProps) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Filter courses by category">
      {courseCategories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`filter-tab${active === cat ? ' active' : ''}`}
          onClick={() => onChange(cat)}
          id={`filter-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
