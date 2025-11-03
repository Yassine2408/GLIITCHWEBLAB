'use client'

import Link from 'next/link'
import type { Template } from '@/data/templates'
import { trackCtaClick } from '@/lib/analytics'
import type { PageLocation } from '@/types/analytics'

interface TemplateCardProps {
  template: Template
  location: PageLocation
}

export default function TemplateCard({ template, location }: TemplateCardProps) {
  const handleViewDemo = () => {
    trackCtaClick('view_demo', template.id, location)
  }

  const handleBuyNow = () => {
    trackCtaClick('buy_now', template.id, location)
  }

  return (
    <div
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-subtle transition"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden relative">
        {template.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={template.imageUrl} alt={template.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">Preview Image</span>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
          {template.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {template.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>
        {/* Price Display */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            ${template.price}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            One-time payment • Lifetime updates
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href={template.demoUrl ?? `/templates/${template.id}`}
            target={template.demoUrl ? '_blank' : undefined}
            onClick={handleViewDemo}
            className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm"
          >
            View Demo
          </Link>
          <Link
            href={`/contact?template=${template.id}`}
            onClick={handleBuyNow}
            className="flex-1 text-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm shadow-soft"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

