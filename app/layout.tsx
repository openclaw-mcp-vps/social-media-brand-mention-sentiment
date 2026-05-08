import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrandPulse — Track Brand Sentiment Across Social Platforms',
  description: 'Monitor brand mentions across Twitter, Reddit, and more. Get real-time sentiment analysis and trend alerts for $13/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="63e6c533-e77b-4ef6-901c-1761ca4a7fa0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
