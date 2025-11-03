import { createMetadata } from '@/lib/metadata'
import { generateWebPageSchema, generateBreadcrumbListSchema, jsonLdScriptProps } from '@/lib/json-ld'

export const metadata = createMetadata({
  title: 'About Us',
  description: 'Learn about our mission to bring world-class design within reach. We craft premium website templates with Next.js, Tailwind CSS, and modern tech. Speed to launch, design quality, lifetime updates.',
  path: '/about',
})

export default function AboutPage() {
  const webPageSchema = generateWebPageSchema({
    name: 'About GLIITCH Web Lab',
    description: 'Learn about our mission to bring world-class design within reach. We craft premium website templates with Next.js, Tailwind CSS, and modern tech.',
    url: '/about',
  })
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ])
  return (
    <>
      <script {...jsonLdScriptProps(webPageSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <div className="min-h-screen py-16">
      {/* Hero with floating logo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-2xl p-[2px] bg-gradient-to-r from-primary-500 to-blue-600 shadow-soft animate-float-slow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="GLIITCH Web Lab" className="h-full w-full rounded-2xl object-cover" />
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-up" style={{ animationDelay: '60ms' }}>
            About GLIITCH Web Lab
          </h1>
          <p className="mt-3 mx-auto max-w-2xl text-gray-700 dark:text-gray-300 animate-fade-up" style={{ animationDelay: '160ms' }}>
            We craft premium, production-ready website templates that help founders, creators, and teams launch faster.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-subtle">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up" style={{ animationDelay: '80ms' }}>Our mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-up" style={{ animationDelay: '140ms' }}>
            Bring world‑class design within reach for everyone. We combine thoughtful UX, crisp visuals, and modern tech to deliver templates that are easy to customize and deploy — no heavy setup, just ship.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What we value</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Speed to launch', desc: 'Opinionated defaults and clean code so you can go live today.' },
            { title: 'Design quality', desc: 'Balanced typography, spacing, and delightful micro‑interactions.' },
            { title: 'Modern stack', desc: 'Next.js, Tailwind CSS, and TypeScript — fast, flexible, familiar.' },
            { title: 'Accessibility', desc: 'Contrast‑friendly colors and sensible semantics out of the box.' },
            { title: 'Reliability', desc: 'Static export by default for zero‑ops deployment anywhere.' },
            { title: 'Lifetime value', desc: 'Free updates as we refine components and patterns.' },
          ].map((v, i) => (
            <div key={v.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-subtle animate-fade-up" style={{ animationDelay: `${100 + i * 60}ms` }}>
              <div className="mb-2 text-primary-600 font-semibold">{v.title}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { k: 'Templates', v: '6+' },
            { k: 'Tech stack', v: 'Next.js / TS / TW' },
            { k: 'Updates', v: 'Monthly' },
            { k: 'License', v: 'Commercial' },
          ].map((s, i) => (
            <div key={s.k} className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 text-center animate-fade-up" style={{ animationDelay: `${120 + i * 70}ms` }}>
              <div className="text-xl font-extrabold text-gray-900 dark:text-white">{s.v}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How we build</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-800">
          {[
            { t: 'Research & concept', d: 'Trends, use‑cases, and UX flows to solve real needs.' },
            { t: 'Design & structure', d: 'Typography scale, spacing rhythm, component API.' },
            { t: 'Build & refine', d: 'Accessible markup, responsive states, performance passes.' },
            { t: 'Ship & update', d: 'Docs, examples, and continuous iteration.' },
          ].map((e, i) => (
            <li key={e.t} className="mb-8 ps-10 relative animate-fade-up" style={{ animationDelay: `${100 + i * 80}ms` }}>
              <span className="absolute start-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white text-xs shadow-subtle">{i + 1}</span>
              <h3 className="font-semibold text-gray-900 dark:text-white">{e.t}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{e.d}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
    </>
  )
}

