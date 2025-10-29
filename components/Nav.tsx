import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">GLIITCH</span>
            <span className="text-sm text-gray-600">Web Lab</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/templates" className="text-gray-700 hover:text-primary-600 transition">
              Templates
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

