'use client'

import { templates } from '@/data/templates'
import TemplateCard from '@/components/TemplateCard'

export default function HomePageClient() {
  const featuredTemplates = templates.slice(0, 6)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} location="homepage" />
          ))}
        </div>
      </div>
    </section>
  )
}

