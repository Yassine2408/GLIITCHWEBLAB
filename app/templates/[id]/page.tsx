import Link from 'next/link'
import { templates } from '@/data/templates'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }))
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/templates"
          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 inline-block"
        >
          ← Back to Templates
        </Link>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-subtle">
          {/* Preview Section */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-6">
            <span className="text-gray-400">Full Page Preview</span>
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {template.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {template.fullDescription}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-xl mb-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold mb-3 text-gray-900 dark:text-white">Tech Stack:</h2>
              <div className="flex flex-wrap gap-2">
                {template.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Buy Button - Replace with your Lemon Squeezy product link */}
            <a
              href="#"
              className="block w-full text-center py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition shadow-soft"
            >
              Buy Now - $49
            </a>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
              Instant download • Lifetime updates
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

