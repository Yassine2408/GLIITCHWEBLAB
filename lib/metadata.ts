import type { Metadata } from 'next'
import type { Template } from '@/data/templates'

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  name: 'GLIITCH Web Lab',
  description: 'Handcrafted website templates powered by imagination & AI. Modern, fast, and beautiful.',
  tagline: 'Handcrafted Website Templates',
  social: {
    twitter: '@gliitchweblab', // Update with actual Twitter handle
    email: 'hello@gliitchweblab.com',
  },
  defaultOgImage: '/og-default.png',
}

/**
 * Creates comprehensive metadata for a page
 */
export function createMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.defaultOgImage}`

  return {
    title,
    description,
    keywords: keywords ?? ['website templates', 'next.js templates', 'tailwind css', 'react templates'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.social.twitter,
      images: [ogImage],
    },
  }
}

/**
 * Creates optimized metadata for template pages
 */
export function createTemplateMetadata(template: Template): Metadata {
  const title = template.name
  const description = `${template.fullDescription} Built with ${template.techStack.join(', ')}. Production-ready template with lifetime updates.`
  const path = `/templates/${template.id}`
  const image = template.ogImage || template.imageUrl || siteConfig.defaultOgImage

  const metadata = createMetadata({
    title,
    description,
    path,
    image,
    keywords: template.keywords,
  })

  // Override Open Graph type to 'product' for template pages
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'product',
    },
  }
}

