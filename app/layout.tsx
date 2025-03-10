import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connor Sweeney',
  description: 'Personal website of Connor Sweeney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 