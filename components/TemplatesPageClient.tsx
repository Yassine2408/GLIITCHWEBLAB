'use client'

import { useState, useMemo } from 'react'
import type { Template } from '@/data/templates'
import type { SortOption } from '@/types/analytics'
import TemplateCard from '@/components/TemplateCard'
import SearchBar from '@/components/SearchBar'
import FilterDropdown from '@/components/FilterDropdown'
import CategoryFilter from '@/components/CategoryFilter'
import SortSelect from '@/components/SortSelect'
import {
  filterTemplates,
  sortTemplates,
  getUniqueTechStack,
  getUniqueCategories,
} from '@/lib/filters'
import {
  trackTemplateSearch,
  trackTemplateFilter,
  trackTemplateSort,
} from '@/lib/analytics'

interface TemplatesPageClientProps {
  templates: Template[]
}

export default function TemplatesPageClient({ templates }: TemplatesPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortOption, setSortOption] = useState<SortOption>('newest')

  // Compute derived values
  const uniqueTechStack = useMemo(() => getUniqueTechStack(templates), [templates])
  const uniqueCategories = useMemo(() => getUniqueCategories(templates), [templates])

  const filteredTemplates = useMemo(
    () => filterTemplates(templates, searchQuery, selectedTechStack, selectedCategory),
    [templates, searchQuery, selectedTechStack, selectedCategory]
  )

  const sortedTemplates = useMemo(
    () => sortTemplates(filteredTemplates, sortOption),
    [filteredTemplates, sortOption]
  )

  // Event handlers
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
  }

  const handleSearch = (query: string) => {
    const filtered = filterTemplates(templates, query, selectedTechStack, selectedCategory)
    trackTemplateSearch(query, filtered.length)
  }

  const handleTechStackChange = (selected: string[]) => {
    setSelectedTechStack(selected)
    if (selected.length > 0) {
      trackTemplateFilter('techStack', selected.join(','))
    }
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    trackTemplateFilter('category', category || 'all')
  }

  const handleSortChange = (option: SortOption) => {
    setSortOption(option)
    trackTemplateSort(option)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedTechStack([])
    setSelectedCategory(null)
    setSortOption('newest')
  }

  return (
    <>
      {/* Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search and Filters Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onSearch={handleSearch}
            />
          </div>
          <FilterDropdown
            label="Tech Stack"
            options={uniqueTechStack}
            selectedOptions={selectedTechStack}
            onChange={handleTechStackChange}
          />
          <div className="w-full md:w-48">
            <SortSelect value={sortOption} onChange={handleSortChange} />
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={uniqueCategories}
          selectedCategory={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>

      {/* Results Count */}
      {sortedTemplates.length > 0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Showing {sortedTemplates.length} template{sortedTemplates.length !== 1 ? 's' : ''}
        </p>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No templates found matching your filters.</p>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Templates Grid */}
      {sortedTemplates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} location="templates-page" />
          ))}
        </div>
      )}
    </>
  )
}
