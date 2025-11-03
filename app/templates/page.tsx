import { templates } from '@/data/templates'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbListSchema, generateCollectionPageSchema, jsonLdScriptProps } from '@/lib/json-ld'
import TemplatesPageClient from '@/components/TemplatesPageClient'

export const metadata = createMetadata({
  title: 'All Templates',
  description: 'Browse our collection of 7+ handcrafted website templates. Next.js, React, Tailwind CSS. Production-ready and easy to customize.',
  path: '/templates',
  image: '/og-templates.png',
})

export default function TemplatesPage() {
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Templates', url: '/templates' },
  ])
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'All Templates',
    description: 'Browse our collection of 7+ handcrafted website templates. Next.js, React, Tailwind CSS. Production-ready and easy to customize.',
    url: '/templates',
    itemList: templates.map((template) => ({
      name: template.name,
      url: `/templates/${template.id}`,
    })),
  })
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <script {...jsonLdScriptProps(collectionPageSchema)} />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            All Templates
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Explore high-quality, production-ready templates built with modern tech.</p>
          <TemplatesPageClient templates={templates} />
        </div>
      </div>
    </>
  )
}

