import Link from 'next/link'
import { templates } from '@/data/templates'

export default function Home() {
  const featuredTemplates = templates.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-primary-50 to-white dark:from-muted-900 dark:to-muted-900">
        {/* Hero background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-35 filter contrast-125 saturate-125"
        />
        {/* Overlay adjusted to preserve highlights while keeping strong contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/40 dark:from-transparent dark:via-transparent dark:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-grid [background-size:16px_16px] opacity-30 dark:opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur px-3 py-1 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">New templates every month</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            GLIITCH Web Lab
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-100/95 mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
            Handcrafted website templates powered by imagination & AI — modern, fast, and beautiful.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition shadow-soft"
            >
              Shop Templates
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-white/70 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <div
                key={template.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-subtle transition"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  {template.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={template.imageUrl} alt={template.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Preview Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  <div className="flex space-x-3">
                    <Link
                      href={template.demoUrl ?? `/templates/${template.id}`}
                      target={template.demoUrl ? '_blank' : undefined}
                      className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm"
                    >
                      View Demo
                    </Link>
                    <Link
                      href={`/templates/${template.id}`}
                      className="flex-1 text-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm shadow-soft"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

