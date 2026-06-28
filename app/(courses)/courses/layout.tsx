import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevOps Courses & Bootcamps | CodersDiary',
  description:
    'Hands-on DevOps courses in English and Hindi. AWS, Kubernetes, RHCSA, Terraform, Docker and more. 7,000+ students enrolled. Lifetime access.',
  keywords: [
    'DevOps Courses', 'AWS Course India', 'Kubernetes Course Hindi',
    'RHCSA Online Course', 'Terraform Training', 'Docker Course Hindi',
    'DevOps Bootcamp India', 'Cloud Computing Course', 'CodersDiary',
  ],
  openGraph: {
    title: 'DevOps Courses & Bootcamps | CodersDiary',
    description: 'Hands-on DevOps courses in English and Hindi by Shubham Rajawat.',
    url: 'https://codersdiary.online/courses',
  },
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
