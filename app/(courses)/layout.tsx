import CoursesNavbar from '@/components/CoursesNavbar'
import CoursesFooter from '@/components/CoursesFooter'

export default function CoursesGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesNavbar />
      {children}
      <CoursesFooter />
    </>
  )
}
