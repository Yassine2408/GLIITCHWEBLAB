import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'GLIITCH Web Lab | Handcrafted Websites',
    template: '%s | GLIITCH Web Lab',
  },
  description: 'Handcrafted websites powered by imagination & AI.',
  metadataBase: new URL('https://gliitchweblab.example'),
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
    url: 'https://gliitchweblab.example',
    siteName: 'GLIITCH Web Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLIITCH Web Lab',
    description: 'Handcrafted websites powered by imagination & AI.',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-muted-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

