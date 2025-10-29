import Link from 'next/link'
import { templates } from '@/data/templates'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          All Templates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Preview Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex space-x-3">
                  <Link
                    href={`/templates/${template.id}`}
                    className="flex-1 text-center py-2 px-4 border border-gray-300 rounded hover:bg-gray-50 transition text-sm"
                  >
                    View Demo
                  </Link>
                  <Link
                    href={`/templates/${template.id}`}
                    className="flex-1 text-center py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 transition text-sm"
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

