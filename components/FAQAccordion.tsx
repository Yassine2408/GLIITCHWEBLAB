'use client'

import Accordion from '@/components/Accordion'
import { trackFAQInteraction } from '@/lib/analytics'
import type { FAQ } from '@/data/faqs'

interface FAQAccordionProps {
  faq: FAQ
  defaultOpen?: boolean
}

export default function FAQAccordion({ faq, defaultOpen = false }: FAQAccordionProps) {
  const handleToggle = (isOpen: boolean) => {
    trackFAQInteraction(faq.question, isOpen ? 'expand' : 'collapse')
  }

  return <Accordion id={faq.id} question={faq.question} answer={faq.answer} defaultOpen={defaultOpen} onToggle={handleToggle} />
}

