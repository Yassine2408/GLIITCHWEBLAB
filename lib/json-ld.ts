import type { Template } from '@/data/templates'
import type { FAQ } from '@/data/faqs'
import { siteConfig } from './metadata'

export const DEFAULT_PRICE_USD = '49.00'

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.social.email,
      contactType: 'Customer Service',
    },
    sameAs: [
      // Add social media URLs when available
      // `https://twitter.com/${siteConfig.social.twitter}`,
      // `https://github.com/gliitchweblab`,
    ],
  }
}

/**
 * Generates Product JSON-LD schema for templates
 * @param template - Template object with dynamic pricing from data model
 */
export function generateProductSchema(template: Template) {
  const imageUrl = template.imageUrl
    ? `${siteConfig.url}${template.imageUrl}`
    : `${siteConfig.url}${siteConfig.defaultOgImage}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: template.name,
    description: template.fullDescription,
    image: imageUrl,
    category: 'Software Application',
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      price: template.price?.toString() || DEFAULT_PRICE_USD,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/templates/${template.id}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '1',
    },
  }
}

/**
 * Generates BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

/**
 * Generates WebPage JSON-LD schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${siteConfig.url}${url}`,
  }
}

/**
 * Generates ContactPage JSON-LD schema
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us',
    description: 'Get in touch with GLIITCH Web Lab',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      email: siteConfig.social.email,
    },
  }
}

/**
 * Generates CollectionPage JSON-LD schema for template listings
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
  itemList,
}: {
  name: string
  description: string
  url: string
  itemList?: Array<{ name: string; url: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${siteConfig.url}${url}`,
    ...(itemList && {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: itemList.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: `${siteConfig.url}${item.url}`,
        })),
      },
    }),
  }
}

/**
 * Generates FAQPage JSON-LD schema following schema.org specifications
 * This schema markup helps search engines display rich FAQ snippets in search results
 * @param faqs - Array of FAQ objects with question and answer text
 */
export function generateFAQPageSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Helper to wrap JSON-LD schema in script tag props for Next.js
 */
export function jsonLdScriptProps(schema: object) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  }
}

