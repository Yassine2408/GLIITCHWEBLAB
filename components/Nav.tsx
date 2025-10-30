import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 supports-backdrop-blur:bg-white/70 bg-white/80 dark:bg-muted-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Logo" className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg object-cover shadow-sm" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              G‑Lab
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Home
            </Link>
            <Link href="/templates" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Templates
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

