'use client'

import { useState, useRef, useEffect } from 'react'

interface FilterDropdownProps {
  label: string
  options: string[]
  selectedOptions: string[]
  onChange: (selected: string[]) => void
}

export default function FilterDropdown({ label, options, selectedOptions, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setFocusedIndex(-1)
        triggerRef.current?.focus()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if ((e.key === 'Enter' || e.key === ' ') && focusedIndex >= 0) {
        e.preventDefault()
        handleToggleOption(options[focusedIndex])
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, focusedIndex, options])

  // Focus first item when opening
  useEffect(() => {
    if (isOpen && options.length > 0) {
      setFocusedIndex(0)
    }
  }, [isOpen, options.length])

  const handleToggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option))
    } else {
      onChange([...selectedOptions, option])
    }
  }

  const handleClearAll = () => {
    onChange([])
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setFocusedIndex(0)
    }
  }

  const displayText =
    selectedOptions.length > 0 ? `${label} (${selectedOptions.length})` : label

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={triggerRef}
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {displayText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className="absolute top-full mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-lg shadow-subtle z-50 max-h-80 overflow-y-auto"
        >
          <div className="p-2">
            {options.map((option, index) => {
              const isSelected = selectedOptions.includes(option)
              const isFocused = focusedIndex === index
              return (
                <div
                  key={option}
                  role="menuitemcheckbox"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleToggleOption(option)
                    }
                  }}
                  onClick={() => handleToggleOption(option)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition ${
                    isFocused ? 'bg-gray-100 dark:bg-gray-800' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleToggleOption(option)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 pointer-events-none"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
                </div>
              )
            })}
            {selectedOptions.length > 0 && (
              <button
                onClick={handleClearAll}
                role="menuitem"
                className="w-full mt-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
