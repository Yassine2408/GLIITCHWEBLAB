/**
 * Analytics utility module
 * 
 * This module provides a provider-agnostic abstraction layer for tracking events.
 * It supports Google Analytics 4 (GA4) and Plausible Analytics.
 * 
 * IMPORTANT: This module should only be imported in client components.
 */

import type { AnalyticsProvider, CtaType, PageLocation, FilterType, SortOption, FAQAction } from '@/types/analytics'

export const analyticsConfig = {
  provider: (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsProvider) || 'none',
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return analyticsConfig.provider !== 'none'
}

/**
 * Get current analytics provider
 */
export function getProvider(): AnalyticsProvider {
  return analyticsConfig.provider
}

/**
 * Check if GA4 consent is given
 */
export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false
  const consent = window.localStorage.getItem('cookie-consent')
  return consent === 'accepted'
}

/**
 * Track a page view
 */
export function trackPageView(url: string, title?: string): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', analyticsConfig.ga4MeasurementId, {
        page_path: url,
        page_title: title,
      })
    }
  } else if (provider === 'plausible') {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview', { props: { url, title } })
    }
  }
}

/**
 * Track a generic event
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params)
    }
  } else if (provider === 'plausible') {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(eventName, { props: params })
    }
  }
}

/**
 * Track when a user views a template detail page
 */
export function trackTemplateView(templateId: string, templateName: string): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        items: [
          {
            item_id: templateId,
            item_name: templateName,
            item_category: 'Template',
          },
        ],
      })
    }
  } else if (provider === 'plausible') {
    trackEvent('Template View', {
      template_id: templateId,
      template_name: templateName,
    })
  }
}

/**
 * Track CTA button clicks
 */
export function trackCtaClick(ctaType: CtaType, templateId: string, location: PageLocation): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()
  const eventName = ctaType === 'view_demo' ? 'view_demo' : 'buy_now'

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        template_id: templateId,
        location,
        cta_type: ctaType,
      })
    }
  } else if (provider === 'plausible') {
    trackEvent(eventName, {
      template_id: templateId,
      location,
      cta_type: ctaType,
    })
  }
}

/**
 * Track template search queries
 * @param query - Search query string
 * @param resultsCount - Number of results returned
 */
export function trackTemplateSearch(query: string, resultsCount: number): void {
  if (!isAnalyticsEnabled()) return

  trackEvent('template_search', {
    query,
    results_count: resultsCount,
  })
}

/**
 * Track template filter selections
 * @param filterType - Type of filter applied ('techStack' or 'category')
 * @param filterValue - Value of the filter selected
 */
export function trackTemplateFilter(filterType: FilterType, filterValue: string): void {
  if (!isAnalyticsEnabled()) return

  trackEvent('template_filter', {
    filter_type: filterType,
    filter_value: filterValue,
  })
}

/**
 * Track template sort option changes
 * @param sortOption - Sort option selected
 */
export function trackTemplateSort(sortOption: SortOption): void {
  if (!isAnalyticsEnabled()) return

  trackEvent('template_sort', {
    sort_option: sortOption,
  })
}

/**
 * Track purchase initiation when user clicks buy button
 * @param templateId - Template ID
 * @param templateName - Template name
 * @param price - Template price in USD
 * @param location - Page location where purchase was initiated
 */
export function trackPurchaseInitiated(
  templateId: string,
  templateName: string,
  price: number,
  location: string
): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase_initiated', {
        template_id: templateId,
        template_name: templateName,
        value: price,
        currency: 'USD',
        location,
      })
    }
  } else if (provider === 'plausible') {
    trackEvent('Purchase Initiated', {
      template_id: templateId,
      template_name: templateName,
      value: price,
      currency: 'USD',
      location,
    })
  }
}

/**
 * Track successful purchase completion
 * @param templateId - Template ID
 * @param templateName - Template name
 * @param price - Purchase price in USD
 * @param orderId - Optional order ID from Lemon Squeezy
 */
export function trackPurchaseCompleted(
  templateId: string,
  templateName: string,
  price: number,
  orderId?: string
): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        template_id: templateId,
        template_name: templateName,
        value: price,
        currency: 'USD',
        transaction_id: orderId,
      })
    }
  } else if (provider === 'plausible') {
    trackEvent('Purchase Completed', {
      template_id: templateId,
      template_name: templateName,
      value: price,
      currency: 'USD',
      transaction_id: orderId,
    })
  }
}

/**
 * Track failed purchase attempt
 * @param templateId - Template ID
 * @param reason - Optional reason for failure
 */
export function trackPurchaseFailed(templateId: string, reason?: string): void {
  if (!isAnalyticsEnabled()) return

  trackEvent('purchase_failed', {
    template_id: templateId,
    reason,
  })
}

/**
 * Track FAQ interaction (expand/collapse)
 * @param question - The FAQ question text
 * @param action - Whether the user expanded or collapsed the accordion
 */
export function trackFAQInteraction(question: string, action: FAQAction): void {
  if (!isAnalyticsEnabled()) return

  const provider = getProvider()

  if (provider === 'ga4') {
    if (!hasConsent()) return
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'faq_interaction', {
        question,
        action,
      })
    }
  } else if (provider === 'plausible') {
    trackEvent('FAQ Interaction', {
      question,
      action,
    })
  }
}

