'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import type { Template } from '@/data/templates'
import { trackTemplateView, trackCtaClick } from '@/lib/analytics'

interface TemplateDetailClientProps {
  template: Template
}

export default function TemplateDetailClient({ template }: TemplateDetailClientProps) {
  // Track template view on mount
  useEffect(() => {
    trackTemplateView(template.id, template.name)
  }, [template.id, template.name])

  const handleBuyNow = () => {
    trackCtaClick('buy_now', template.id, 'template-detail')
  }

  const handleViewDemo = () => {
    trackCtaClick('view_demo', template.id, 'template-detail')
  }

  return (
    <>
      {/* Preview Section */}
      {template.demoUrl ? (
        <div>
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">Interactive demo preview</span>
            <Link
              href={template.demoUrl}
              target="_blank"
              onClick={handleViewDemo}
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
            >
              Open full demo ↗
            </Link>
          </div>
          <div className="aspect-video bg-white">
            <iframe
              src={template.demoUrl}
              title={`${template.name} demo`}
              className="w-full h-full"
            />
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
          {template.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={template.imageUrl} alt={`${template.name} preview`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Full Page Preview</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export function TemplateDetailBuyButton({ template }: { template: Template }) {
  const handleBuyNow = () => {
    trackCtaClick('buy_now', template.id, 'template-detail')
  }

  return (
    <>
      {/* Buy Button - Coming Soon */}
      <Link
        href={`/contact?template=${template.id}`}
        onClick={handleBuyNow}
        className="block w-full text-center py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition shadow-soft opacity-75 cursor-not-allowed"
      >
        Coming Soon - ${template.price}
      </Link>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
        Instant download • Lifetime updates
      </p>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
        Payment integration coming soon. Contact us to purchase.
      </p>
    </>
  )
}

