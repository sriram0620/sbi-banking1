import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SBI App',
  description: 'Created with SBI',
  generator: 'SBI.dev',
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
