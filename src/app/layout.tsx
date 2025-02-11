import type { Metadata } from 'next'
import { Gothic_A1, Merriweather, Inter, Creepster, Nosifer, Vampiro_One } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import SpookyBackground from '@/components/SpookyBackground'
import dynamic from 'next/dynamic'

// Dynamically import Jumpscare with SSR disabled
const Jumpscare = dynamic(() => import('@/components/Jumpscare'), { 
  ssr: false 
});

const nosifer = Nosifer({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nosifer'
});

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster'
});

const vampiro = Vampiro_One({
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-vampiro',
  display: 'swap'
});

const gothic = Gothic_A1({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-gothic'
});

const modern = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-modern'
});

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
      <body className={`${gothic.variable} ${modern.variable} ${creepster.variable} ${nosifer.variable} ${vampiro.variable} font-modern antialiased bg-black min-h-screen`}>
        <SpookyBackground />
        <Navigation />
        <Jumpscare />
        {children}
      </body>
    </html>
  )
}
