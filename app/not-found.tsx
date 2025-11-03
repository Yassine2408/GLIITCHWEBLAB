import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Template not found</p>
        <Link
          href="/templates"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition shadow-soft"
        >
          View All Templates
        </Link>
      </div>
    </div>
  )
}

