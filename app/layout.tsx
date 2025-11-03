import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import { siteConfig } from '@/lib/metadata'
import { generateOrganizationSchema, jsonLdScriptProps } from '@/lib/json-ld'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'GLIITCH Web Lab | Handcrafted Websites',
    template: '%s | GLIITCH Web Lab',
  },
  description: 'Handcrafted websites powered by imagination & AI.',
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'GLIITCH Web Lab',
    description: 'Handcrafted websites powered by imagination & AI.',
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: 'GLIITCH Web Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLIITCH Web Lab',
    description: 'Handcrafted websites powered by imagination & AI.',
    creator: siteConfig.social.twitter,
    images: [`${siteConfig.url}${siteConfig.defaultOgImage}`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-muted-900 text-gray-900 dark:text-gray-100`}>
        <script {...jsonLdScriptProps(organizationSchema)} />
        <Analytics />
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}

