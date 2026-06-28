import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | CodersDiary',
}

export default function NotFound() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-heading">
      <div className="text-center" style={{ padding: '2rem' }}>
        <div
          className="mono text-gradient"
          style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1, marginBottom: '1rem' }}
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="heading-md" id="not-found-heading" style={{ marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p className="body" style={{ maxWidth: '420px', margin: '0 auto 2rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex-center gap-2 flex-wrap">
          <Link href="/" className="btn btn-primary" id="not-found-home-btn">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}
