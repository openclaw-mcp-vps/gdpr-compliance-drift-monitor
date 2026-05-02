import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Compliance Drift Monitor',
  description: 'Monitor GDPR compliance as your code changes. Automatically scan commits for violations, missing consent flows, and data retention issues.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e7363ab-65c0-4619-a951-a022ebeda2a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
