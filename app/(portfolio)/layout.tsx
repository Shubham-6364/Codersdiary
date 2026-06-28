import PortfolioNavbar from '@/components/PortfolioNavbar'
import PortfolioFooter from '@/components/PortfolioFooter'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PortfolioNavbar />
      {children}
      <PortfolioFooter />
    </>
  )
}
