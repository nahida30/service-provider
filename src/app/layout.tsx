import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Science in Advertising, Art in Technology',
  description: 'The multiverse of blending science in advertising and art in technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

