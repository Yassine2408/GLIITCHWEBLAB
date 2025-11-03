'use client'

import type { SortOption } from '@/types/analytics'

interface SortSelectProps {
  value: SortOption
  onChange: (option: SortOption) => void
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative">
      <label htmlFor="sort-select" className="sr-only">
        Sort by
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none cursor-pointer text-sm"
          aria-label="Sort templates"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

