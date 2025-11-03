'use client'

import { useState } from 'react'

interface AccordionProps {
  id: string
  question: string
  answer: string
  defaultOpen?: boolean
  onToggle?: (isOpen: boolean) => void
}

export default function Accordion({ id, question, answer, defaultOpen = false, onToggle }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentId = `${id}-content`

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.(newState)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 overflow-hidden">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={id}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={id}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  )
}
