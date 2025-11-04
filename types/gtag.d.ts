/**
 * Type declarations for Google Analytics gtag function
 * 
 * This file provides TypeScript types for the global gtag function
 * that is loaded by Google Analytics scripts.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'consent',
      targetId: string,
      config?: Record<string, any>
    ) => void
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void
  }
}

export {}

