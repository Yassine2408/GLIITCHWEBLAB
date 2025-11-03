"use client"

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 supports-backdrop-blur:bg-white/70 bg-white/80 dark:bg-muted-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Logo" className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg object-cover shadow-sm" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              G‑Lab
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Home
            </Link>
            <Link href="/templates" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Templates
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">
              FAQ
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-700 dark:text-gray-300">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-muted-900/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col gap-3">
              <Link href="/" className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/templates" className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition" onClick={() => setOpen(false)}>
                Templates
              </Link>
              <Link href="/about" className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition" onClick={() => setOpen(false)}>
                Contact
              </Link>
              <Link href="/faq" className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition" onClick={() => setOpen(false)}>
                FAQ
              </Link>
              <div className="py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

