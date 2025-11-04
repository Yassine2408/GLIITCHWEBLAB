'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState, useRef, Suspense } from 'react'
import { analyticsConfig, trackPageView, hasConsent } from '@/lib/analytics'

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isInitialMount = useRef(true)
  const [consentState, setConsentState] = useState<'pending' | 'accepted' | 'declined'>(() => {
    if (typeof window === 'undefined') return 'pending'
    const stored = window.localStorage.getItem('cookie-consent')
    return (stored as 'pending' | 'accepted' | 'declined') || 'pending'
  })

  // Track page views on route changes (subsequent navigations only, not initial load)
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Skip initial mount - tracking happens via Script onLoad
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Only track if scripts are loaded and consent is granted (for GA4)
    if (analyticsConfig.provider === 'ga4' && !hasConsent()) return
    if (analyticsConfig.provider === 'none') return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    const title = document.title

    trackPageView(url, title)
  }, [pathname, searchParams])

  // Listen for consent changes
  useEffect(() => {
    if (analyticsConfig.provider !== 'ga4') return

    const handleConsentChange = () => {
      const newConsent = hasConsent() ? 'accepted' : 'declined'
      setConsentState(newConsent)

      // Update GA4 Consent Mode when consent is granted
      if (newConsent === 'accepted' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          ad_storage: 'granted',
          analytics_storage: 'granted',
        })
      }
    }

    window.addEventListener('cookie-consent-changed', handleConsentChange)
    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange)
    }
  }, [])

  // Check if required configuration is present
  const hasGa4Config = analyticsConfig.ga4MeasurementId.trim() !== ''
  const hasPlausibleConfig = analyticsConfig.plausibleDomain.trim() !== ''

  if (process.env.NODE_ENV === 'development') {
    if (analyticsConfig.provider === 'ga4' && !hasGa4Config) {
      console.warn('[Analytics] GA4 Measurement ID is missing. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local')
    }
    if (analyticsConfig.provider === 'plausible' && !hasPlausibleConfig) {
      console.warn('[Analytics] Plausible domain is missing. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in .env.local')
    }
  }

  // GA4 Script
  if (analyticsConfig.provider === 'ga4' && hasGa4Config && (hasConsent() || consentState === 'accepted')) {
    return (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4MeasurementId}`}
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          onLoad={() => {
            // Initialize GA4 Consent Mode
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('consent', 'default', {
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                ad_storage: 'denied',
                analytics_storage: 'denied',
              })

              // Update consent if already granted
              if (hasConsent()) {
                window.gtag('consent', 'update', {
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  ad_storage: 'granted',
                  analytics_storage: 'granted',
                })
              }

              // Track initial pageview after scripts are ready
              const url = window.location.pathname + window.location.search
              const title = document.title
              trackPageView(url, title)
            }
          }}
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.ga4MeasurementId}', { send_page_view: false });
            `,
          }}
        />
      </>
    )
  }

  // Plausible Script
  if (analyticsConfig.provider === 'plausible' && hasPlausibleConfig) {
    return (
      <Script
        strategy="afterInteractive"
        data-domain={analyticsConfig.plausibleDomain}
        src="https://plausible.io/js/script.js"
        onLoad={() => {
          // Track initial pageview after script loads
          if (typeof window !== 'undefined' && window.plausible) {
            const url = window.location.pathname + window.location.search
            const title = document.title
            trackPageView(url, title)
          }
        }}
      />
    )
  }

  return null
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}
