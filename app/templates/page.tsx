import Link from 'next/link'
import { templates } from '@/data/templates'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          All Templates
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Explore high-quality, production-ready templates built with modern tech.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-subtle transition"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                {template.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={template.imageUrl} alt={template.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Preview Image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex space-x-3">
                  <Link
                    href={template.demoUrl ?? `/templates/${template.id}`}
                    target={template.demoUrl ? '_blank' : undefined}
                    className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm"
                  >
                    View Demo
                  </Link>
                  <Link
                    href={`/templates/${template.id}`}
                    className="flex-1 text-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm shadow-soft"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

