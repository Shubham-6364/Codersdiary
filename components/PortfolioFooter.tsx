
export default function PortfolioFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
        </div>

        <div className="divider" style={{ marginTop: '2rem', marginBottom: '1.5rem' }} />

        <p className="footer-copy text-center">
          © {new Date().getFullYear()} CodersDiary · Shubham Rajawat · All rights reserved.
        </p>
      </div>
    </footer>
  )
}
