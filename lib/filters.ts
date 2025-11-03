/**
 * Template filtering and sorting utilities
 */

import type { Template } from '@/data/templates'
import type { SortOption } from '@/types/analytics'

/**
 * Filters templates based on search query, tech stack, and category
 * @param templates - Array of templates to filter
 * @param searchQuery - Search query to match against name and description (case-insensitive)
 * @param selectedTechStack - Array of tech stack items to filter by (must include all selected)
 * @param selectedCategory - Category to filter by (null for all categories)
 * @returns Filtered array of templates
 */
export function filterTemplates(
  templates: Template[],
  searchQuery: string,
  selectedTechStack: string[],
  selectedCategory: string | null
): Template[] {
  return templates.filter((template) => {
    // Search query filter (case-insensitive)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const matchesName = template.name.toLowerCase().includes(query)
      const matchesDescription = template.description.toLowerCase().includes(query)
      if (!matchesName && !matchesDescription) {
        return false
      }
    }

    // Tech stack filter (must include all selected items)
    if (selectedTechStack.length > 0) {
      const templateTechStack = template.techStack.map((tech) => tech.toLowerCase())
      const selectedTechStackLower = selectedTechStack.map((tech) => tech.toLowerCase())
      const hasAllSelected = selectedTechStackLower.every((tech) =>
        templateTechStack.includes(tech)
      )
      if (!hasAllSelected) {
        return false
      }
    }

    // Category filter
    if (selectedCategory !== null) {
      if (template.category !== selectedCategory) {
        return false
      }
    }

    return true
  })
}

/**
 * Sorts templates based on the selected sort option
 * @param templates - Array of templates to sort
 * @param sortOption - Sort option to apply
 * @returns Sorted array of templates
 */
export function sortTemplates(templates: Template[], sortOption: SortOption): Template[] {
  const sorted = [...templates]

  switch (sortOption) {
    case 'newest':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.releaseDate).getTime()
        const dateB = new Date(b.releaseDate).getTime()
        return dateB - dateA // Descending (newest first)
      })

    case 'popular':
      return sorted.sort((a, b) => b.popularityScore - a.popularityScore) // Descending

    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price) // Ascending

    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price) // Descending

    default:
      return sorted
  }
}

/**
 * Extracts all unique tech stack items from templates array
 * @param templates - Array of templates
 * @returns Sorted array of unique tech stack items
 */
export function getUniqueTechStack(templates: Template[]): string[] {
  const techStackSet = new Set<string>()
  templates.forEach((template) => {
    template.techStack.forEach((tech) => techStackSet.add(tech))
  })
  return Array.from(techStackSet).sort()
}

/**
 * Extracts all unique categories from templates array
 * @param templates - Array of templates
 * @returns Sorted array of unique categories
 */
export function getUniqueCategories(templates: Template[]): string[] {
  const categorySet = new Set<string>()
  templates.forEach((template) => {
    categorySet.add(template.category)
  })
  return Array.from(categorySet).sort()
}

