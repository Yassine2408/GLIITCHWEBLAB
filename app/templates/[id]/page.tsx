import Link from 'next/link'
import { templates } from '@/data/templates'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { createTemplateMetadata } from '@/lib/metadata'
import { generateProductSchema, generateBreadcrumbListSchema, jsonLdScriptProps } from '@/lib/json-ld'
import TemplateDetailClient, { TemplateDetailBuyButton } from '@/components/TemplateDetailClient'

export async function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    return {
      title: 'Template Not Found',
    }
  }

  return createTemplateMetadata(template)
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    notFound()
  }

  const productSchema = generateProductSchema(template)
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Templates', url: '/templates' },
    { name: template.name, url: `/templates/${template.id}` },
  ])

  return (
    <>
      <script {...jsonLdScriptProps(productSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/templates"
          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 inline-block"
        >
          ← Back to Templates
        </Link>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-subtle">
          <TemplateDetailClient template={template} />
          
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
            
            <TemplateDetailBuyButton template={template} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

