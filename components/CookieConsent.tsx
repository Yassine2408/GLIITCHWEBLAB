'use client'

import { useState, useEffect } from 'react'
import { analyticsConfig } from '@/lib/analytics'

type ConsentStatus = 'pending' | 'accepted' | 'declined'

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show for GA4 provider
    if (analyticsConfig.provider !== 'ga4') {
      setIsVisible(false)
      return
    }

    // Check localStorage for existing consent
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('cookie-consent') as ConsentStatus | null
      if (stored === 'accepted' || stored === 'declined') {
        setConsent(stored)
        setIsVisible(false)
      } else {
        setConsent('pending')
        setIsVisible(true)
      }
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cookie-consent', 'accepted')
      setConsent('accepted')
      setIsVisible(false)
      // Dispatch custom event for Analytics component
      window.dispatchEvent(new Event('cookie-consent-changed'))
    }
  }

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cookie-consent', 'declined')
      setConsent('declined')
      setIsVisible(false)
    }
  }

  if (!isVisible || consent !== 'pending') {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 lg:px-8 animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We use cookies to analyze site traffic and improve your experience.{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    // TODO: Update href when privacy page is created
                  }}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition shadow-soft"
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

