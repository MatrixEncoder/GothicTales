import type { Metadata } from 'next'
import { Crimson_Pro, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import SpookyBackground from '@/components/SpookyBackground'

const gothic = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-gothic',
  display: 'swap',
})

const modern = Inter({
  subsets: ['latin'],
  variable: '--font-modern',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GothicTales',
  description: 'A journey through gothic storytelling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${gothic.variable} ${modern.variable} font-modern antialiased bg-black min-h-screen`}>
        <SpookyBackground />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
