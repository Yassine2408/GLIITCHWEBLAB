'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur hover:bg-white dark:hover:bg-gray-800 transition"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-300">
          <path d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.321 2.78-7.993 6.652-9.292a.75.75 0 0 1 .908 1.067A8.25 8.25 0 0 0 12 20.25a8.22 8.22 0 0 0 6.223-2.86.75.75 0 0 1 1.23.612c0 .352-.25.662-.7.999z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary-600">
          <path d="M12 2.25a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM6.22 4.47a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L6.22 5.53a.75.75 0 0 1 0-1.06zM2.25 12a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm15.72-6.47a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zM12 19a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.25A.75.75 0 0 1 12 19zm-5.47-2.03a.75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0zM19 12a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.25A.75.75 0 0 1 19 12zm-2.97 5.47a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0z" />
        </svg>
      )}
    </button>
  )
}


