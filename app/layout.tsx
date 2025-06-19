import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaspi',
  description: 'Kaspi',
  manifest: '/manifest.json',
  icons: {
    icon: '/kaspi.jpeg',
  },
  appleWebApp: {
    capable: true,
    title: 'Kaspi',
    statusBarStyle: 'default',
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
