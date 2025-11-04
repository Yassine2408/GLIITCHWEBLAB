# GLIITCH Web Lab

A professional website template store built with Next.js and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern, responsive design
- Template showcase with previews
- Individual template pages
- About and Contact pages
- Clean, professional UI

## SEO Features

This project includes comprehensive SEO optimization:

- **Dynamic Metadata**: Each page has optimized metadata with Open Graph and Twitter Card support
- **JSON-LD Structured Data**: Schema.org markup for Organization, Product, BreadcrumbList, WebPage, and ContactPage
- **Sitemap Generation**: Automatically generated `sitemap.xml` at build time via `app/sitemap.ts`
- **Robots.txt**: Automatically generated `robots.txt` at build time via `app/robots.ts`
- **Open Graph Images**: Default OG images for social sharing (place images in `public/` directory)

### Metadata Utilities

The `lib/metadata.ts` module provides helper functions for consistent metadata generation:

- `createMetadata()`: Generate complete metadata objects for any page
- `createTemplateMetadata()`: Generate optimized metadata for template pages
- `siteConfig`: Centralized site configuration (update production URL before deployment)

### JSON-LD Schema

The `lib/json-ld.ts` module provides structured data generation:

- `generateOrganizationSchema()`: Organization schema with contact info
- `generateProductSchema()`: Product schema for templates
- `generateBreadcrumbListSchema()`: Breadcrumb navigation schema
- `generateWebPageSchema()`: Basic WebPage schema
- `generateContactPageSchema()`: ContactPage schema
- `jsonLdScriptProps()`: Helper to embed schemas in Next.js metadata

### Adding Metadata to New Pages

For server component pages, export a `metadata` object:

```typescript
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Page Title',
  description: 'Page description',
  path: '/page-path',
})
```

Note: The site name is automatically appended via the root layout's `metadata.title.template` setting.

For dynamic routes, export a `generateMetadata` function:

```typescript
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Generate metadata based on params
  return createMetadata({ ... })
}
```

For client component pages, wrap them in a server component layout that exports metadata.

### Environment Variables

- **NEXT_PUBLIC_SITE_URL**: Required environment variable for the site's base URL. Defaults to `http://localhost:3000` in development. Set this to your production domain (e.g., `https://gliitchweblab.com`) in production/staging environments.

## Analytics & Tracking

This project includes comprehensive analytics tracking with support for multiple providers:

### Supported Analytics Providers

- **Google Analytics 4 (GA4)**: Full-featured analytics with event tracking, requires cookie consent
- **Plausible Analytics**: Privacy-friendly alternative, no cookies, no consent banner needed

### Configuration

Set up analytics by configuring environment variables in `.env.local` (see `.env.local.example`):

- `NEXT_PUBLIC_ANALYTICS_PROVIDER`: Choose 'ga4', 'plausible', or 'none'
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your GA4 Measurement ID (format: G-XXXXXXXXXX)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Your domain registered in Plausible

### Tracked Events

The analytics system automatically tracks:

- **Page Views**: Automatic tracking on route changes
- **Template Views**: When users view template detail pages
- **CTA Clicks**: "View Demo" and "Buy Now" button clicks with context (location, template ID)

### Analytics Architecture

- `lib/analytics.ts`: Provider-agnostic tracking utilities
- `components/Analytics.tsx`: Script loading and page view tracking
- `components/CookieConsent.tsx`: GDPR-compliant consent banner (GA4 only)
- `components/TemplateCard.tsx`: Reusable card component with built-in tracking

### Privacy & GDPR Compliance

- **GA4**: Requires user consent before loading scripts (cookie consent banner shown)
- **Plausible**: No cookies, no consent required, GDPR compliant by default
- Consent preferences stored in localStorage

### Custom Event Tracking

To track custom events in your components:

```typescript
import { trackEvent } from '@/lib/analytics'

trackEvent('custom_event_name', { param1: 'value1' })
```

### Important Notes

- **Set Production URL**: Set the `NEXT_PUBLIC_SITE_URL` environment variable to your production domain before deployment
- **Add Open Graph Images**: Create `og-default.png` and `og-templates.png` (1200x630px) in the `public/` directory
- **Sitemap & Robots**: Both are automatically generated at build time when using Next.js static export
- **Verification Codes**: Add Google Search Console and other webmaster verification codes in `app/layout.tsx` metadata

## Search & Filtering

The templates page includes comprehensive search and filtering capabilities:

### Features

- **Real-time Search**: Search templates by name or description with debounced input
- **Tech Stack Filter**: Multi-select dropdown to filter by technologies (Next.js, React, Tailwind CSS, etc.)
- **Category Filter**: Pill-based single-select filter for template categories (Landing Page, Portfolio, Blog, etc.)
- **Sort Options**: Sort templates by:
  - Newest First (by release date)
  - Most Popular (by popularity score)
  - Price: Low to High
  - Price: High to Low
- **Results Count**: Shows number of matching templates
- **Empty State**: Clear messaging when no templates match filters with 'Clear filters' option

### Analytics Tracking

All search and filter interactions are tracked:

- Search queries with result counts
- Filter selections (tech stack, category)
- Sort option changes

### Components

- `components/SearchBar.tsx`: Reusable search input with debouncing
- `components/FilterDropdown.tsx`: Multi-select dropdown for tech stack
- `components/CategoryFilter.tsx`: Horizontal scrollable category pills
- `components/SortSelect.tsx`: Sort options dropdown
- `lib/filters.ts`: Filtering and sorting utility functions

### Data Model

Templates now include:

- `category`: Template category for filtering
- `price`: Individual template pricing
- `releaseDate`: Release date for sorting
- `popularityScore`: Popularity metric for sorting

## FAQ Page

Comprehensive FAQ page with accordion-style interactions:

### Features

- **Accordion UI**: Smooth expand/collapse animations for each question
- **SEO Optimized**: FAQPage schema markup for rich search results
- **Analytics Tracking**: Tracks which questions users interact with
- **Accessibility**: Full keyboard navigation and ARIA support
- **Responsive Design**: Works seamlessly on mobile and desktop

### Content Management

- FAQ content is managed in `data/faqs.ts`
- Add/edit questions by modifying the `faqs` array
- Each FAQ has: question, answer, and optional category

### Components

- `components/Accordion.tsx`: Reusable accordion component
- `components/FAQAccordion.tsx`: FAQ-specific wrapper with analytics
- `app/faq/page.tsx`: FAQ page with schema markup

### Schema Markup

- FAQPage schema for search engine rich results
- Breadcrumb navigation schema
- WebPage schema for page metadata

## Roadmap / Coming Soon

The following features are planned for future implementation:

- **Payment Integration (Lemon Squeezy)**: Automated checkout and payment processing
- **Customer Dashboard**: Account management and template downloads
- **Automated Fulfillment**: Automatic delivery of templates after purchase
- **Newsletter System**: Email marketing and product updates
- **Blog/Changelog**: Content marketing and product updates

## Build & Deployment

### Local Build

To build the static export for production:

```bash
npm run build
```

This will create an `out/` directory containing all static files ready for deployment.

### Netlify Deployment

This project is configured for static export deployment on Netlify.

#### Configuration

The `netlify.toml` file contains the build configuration:

```toml
[build]
  command = "npm install && npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20.18.0"
```

#### Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Set Environment Variables**: Add the following in Netlify dashboard (Site settings → Environment variables):
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://gliitchweblab.com`)
   - `NEXT_PUBLIC_ANALYTICS_PROVIDER`: `ga4`, `plausible`, or `none`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your GA4 Measurement ID (if using GA4)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Your Plausible domain (if using Plausible)
3. **Deploy**: Netlify will automatically build and deploy on each push to the main branch

#### Build Process

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `out/` (generated by Next.js static export)
- **Node Version**: 20.18.0 (specified in `.nvmrc` and `netlify.toml`)

The build process:
1. Installs dependencies
2. Runs `next build` which generates static HTML files in the `out/` directory (due to `output: 'export'` in `next.config.js`)
3. Netlify serves the static files from the `out/` directory

#### Static Export

This project uses Next.js static export (`output: 'export'` in `next.config.js`), which means:
- All pages are pre-rendered at build time
- No server-side rendering (SSR) or incremental static regeneration (ISR)
- All routes are generated as static HTML files
- No API routes or server-side features are available

## Customization

- Replace placeholder preview images with actual screenshots
- Update template data in `data/templates.ts` including categories, pricing, release dates, and popularity scores
- Payment integration (Lemon Squeezy) is planned for future implementation. Currently, buy buttons direct users to contact form.
- Customize colors in `tailwind.config.js`
- Update SEO metadata in `lib/metadata.ts` before deployment
- Configure analytics provider and credentials in `.env.local` (see `.env.example`)

