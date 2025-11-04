import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { generateContactPageSchema, generateBreadcrumbListSchema, jsonLdScriptProps } from '@/lib/json-ld'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: 'Get in touch with GLIITCH Web Lab. Have questions about our templates? Reach out at Gliitch2408@gmail.com',
  path: '/contact',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contactSchema = generateContactPageSchema()
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <>
      <script {...jsonLdScriptProps(contactSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      {children}
    </>
  )
}

