import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codersdiary.online'),
  title: {
    default: 'Shubham Rajawat | Senior DevOps & Cloud Engineer',
    template: '%s | CodersDiary',
  },
  description:
    'Portfolio of Shubham Rajawat — Senior DevOps & Cloud Engineer specialising in AWS, Kubernetes, Terraform, and CI/CD automation. 4+ years building production-grade cloud-native infrastructure.',
  keywords: [
    'DevOps Engineer', 'Cloud Engineer', 'AWS', 'Kubernetes', 'Terraform',
    'CI/CD', 'Docker', 'Linux', 'Ansible', 'Site Reliability Engineer',
    'RHCSA', 'CKS', 'DevOps Courses', 'CodersDiary',
  ],
  authors: [{ name: 'Shubham Rajawat', url: 'https://codersdiary.online' }],
  creator: 'Shubham Rajawat',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://codersdiary.online',
    siteName: 'CodersDiary',
    title: 'Shubham Rajawat | Senior DevOps & Cloud Engineer',
    description:
      'Portfolio and DevOps course platform by Shubham Rajawat. AWS, Kubernetes, Terraform, and cloud-native infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Rajawat | Senior DevOps & Cloud Engineer',
    description: 'Portfolio and DevOps course platform by Shubham Rajawat.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
