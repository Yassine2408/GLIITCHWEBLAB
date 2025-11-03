/**
 * Type definitions for analytics providers and tracking
 */

export type AnalyticsProvider = 'ga4' | 'plausible' | 'none'

export type CtaType = 'view_demo' | 'buy_now'

export type PageLocation = 'homepage' | 'templates-page' | 'template-detail' | 'hero'

export type FilterType = 'techStack' | 'category'

export type SortOption = 'newest' | 'popular' | 'price-low' | 'price-high'

export type FAQAction = 'expand' | 'collapse'

export interface AnalyticsEvent {
  eventName: string
  params?: Record<string, any>
}

/**
 * Parameters for purchase tracking events
 */
export interface PurchaseEventParams {
  template_id: string
  template_name: string
  value: number
  currency: string
  location?: string
  transaction_id?: string
  reason?: string
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void
  }
}

