import { createMetadata } from '@/lib/metadata'
import { generateWebPageSchema, generateBreadcrumbListSchema, jsonLdScriptProps } from '@/lib/json-ld'
import HeroSectionClient from '@/components/HeroSectionClient'
import HomePageClient from '@/components/HomePageClient'

export const metadata = createMetadata({
  title: 'Premium Website Templates',
  description: 'Handcrafted website templates powered by Next.js & Tailwind CSS. 6+ production-ready templates with modern tech stack. Fast launch, lifetime updates.',
  path: '/',
})

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    name: 'GLIITCH Web Lab - Premium Website Templates',
    description: 'Handcrafted website templates powered by Next.js & Tailwind CSS. 6+ production-ready templates with modern tech stack.',
    url: '/',
  })
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
  ])

  return (
    <>
      <script {...jsonLdScriptProps(webPageSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <div className="min-h-screen">
        <HeroSectionClient />
        <HomePageClient />
      </div>
    </>
  )
}

