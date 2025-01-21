import { Button } from '@mui/material'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="w-full py-6 bg-white shadow-md">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Analyzen
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="#case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

