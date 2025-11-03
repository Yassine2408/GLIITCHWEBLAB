import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { generateFAQPageSchema, generateWebPageSchema, generateBreadcrumbListSchema, jsonLdScriptProps } from '@/lib/json-ld'
import { faqs } from '@/data/faqs'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about our website templates, licensing, updates, support, and more.',
  path: '/faq',
  keywords: ['faq', 'help', 'support', 'licensing', 'template questions'],
})

export default function FAQPage() {
  const faqPageSchema = generateFAQPageSchema(faqs)
  const webPageSchema = generateWebPageSchema({
    name: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our website templates, licensing, updates, support, and more.',
    url: '/faq',
  })
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ])

  return (
    <>
      <script {...jsonLdScriptProps(faqPageSchema)} />
      <script {...jsonLdScriptProps(webPageSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <div className="min-h-screen py-16">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-up" style={{ animationDelay: '60ms' }}>
              Frequently Asked Questions
            </h1>
            <p className="mt-3 mx-auto max-w-2xl text-gray-700 dark:text-gray-300 animate-fade-up" style={{ animationDelay: '160ms' }}>
              Find answers to common questions about our templates, licensing, updates, and support.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="animate-fade-up" style={{ animationDelay: `${100 + index * 50}ms` }}>
                <FAQAccordion faq={faq} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-subtle text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition shadow-soft"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

