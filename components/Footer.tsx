import Link from 'next/link'
import { siteConfig } from '@/lib/metadata'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-muted-900/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">GLIITCH Web Lab</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Premium website templates built with Next.js, Tailwind CSS, and modern tech.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                Home
              </Link>
              <Link href="/templates" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                Templates
              </Link>
              <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                FAQ
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                License
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition">
                Documentation
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              {siteConfig.social.email}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} GLIITCH Web Lab. Handcrafted with imagination & AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

