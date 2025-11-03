import type { MetadataRoute } from 'next'
import { templates } from '@/data/templates'
import { siteConfig } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date()

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic template routes
  const templateRoutes: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...routes, ...templateRoutes]
}

