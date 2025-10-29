import Link from 'next/link'
import { templates } from '@/data/templates'

export default function Home() {
  const featuredTemplates = templates.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            GLIITCH Web Lab
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Handcrafted websites powered by imagination & AI.
          </p>
          <Link
            href="/templates"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg"
          >
            Shop Templates
          </Link>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
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
      </section>
    </div>
  )
}

