'use client'

import { useRef, useEffect } from 'react'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onChange: (category: string | null) => void
}

export default function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Set up button refs array
  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, categories.length + 1)
  }, [categories.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return

      const currentIndex = selectedCategory === null
        ? 0
        : categories.findIndex((cat) => cat === selectedCategory) + 1

      const totalItems = categories.length + 1

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        const nextIndex = (currentIndex + 1) % totalItems
        if (nextIndex === 0) {
          onChange(null)
        } else {
          onChange(categories[nextIndex - 1])
        }
        buttonRefs.current[nextIndex]?.focus()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1
        if (prevIndex === 0) {
          onChange(null)
        } else {
          onChange(categories[prevIndex - 1])
        }
        buttonRefs.current[prevIndex]?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [categories, selectedCategory, onChange])

  return (
    <div
      ref={containerRef}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
      role="radiogroup"
      aria-label="Filter by category"
    >
      <button
        ref={(el) => (buttonRefs.current[0] = el)}
        onClick={() => onChange(null)}
        aria-checked={selectedCategory === null}
        role="radio"
        className={`px-4 py-2 rounded-full text-sm border transition cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 ${
          selectedCategory === null
            ? 'bg-primary-600 text-white border-primary-600'
            : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400'
        }`}
      >
        All
      </button>
      {categories.map((category, index) => {
        const isSelected = selectedCategory === category
        return (
          <button
            key={category}
            ref={(el) => (buttonRefs.current[index + 1] = el)}
            onClick={() => onChange(category)}
            aria-checked={isSelected}
            role="radio"
            className={`px-4 py-2 rounded-full text-sm border transition cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              isSelected
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
