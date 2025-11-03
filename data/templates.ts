// Note: Payment integration is planned for future implementation.
// The 'price' field is used for display purposes.
// When ready, add 'lemonSqueezyVariantId' or similar payment provider field.

export interface Template {
  id: string
  name: string
  description: string
  fullDescription: string
  techStack: string[]
  imageUrl?: string
  demoUrl?: string
  ogImage?: string
  keywords?: string[]
  category: string
  price: number
  releaseDate: string
  popularityScore: number
}

export const templates: Template[] = [
  {
    id: 'startup-landing',
    name: 'Startup Landing Page',
    description: 'Modern, clean landing page perfect for tech startups and SaaS products.',
    fullDescription:
      'Responsive, clean, SEO-friendly site built with Next.js & Tailwind. Perfect for startups looking to make a professional first impression. Includes hero section, features, testimonials, and pricing sections.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
    imageUrl: '/landing-page.png',
    demoUrl: '/templates/startup-landing/index.html',
    keywords: ['startup', 'landing page', 'saas', 'next.js template', 'tech startup'],
    category: 'Landing Page',
    price: 49,
    releaseDate: '2024-03-15',
    popularityScore: 95,
  },
  {
    id: 'portfolio-creative',
    name: 'Creative Portfolio',
    description: 'Showcase your work with this stunning portfolio template for designers and creatives.',
    fullDescription:
      'A beautiful portfolio template designed for creatives. Features elegant animations, grid layouts, and smooth transitions. Built with React and styled with Tailwind CSS for easy customization.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/creative-portfolio.png',
    demoUrl: '/templates/portfolio-creative/index.html',
    keywords: ['portfolio', 'creative', 'designer', 'showcase', 'react template'],
    category: 'Portfolio',
    price: 49,
    releaseDate: '2024-02-20',
    popularityScore: 92,
  },
  {
    id: 'blog-modern',
    name: 'Modern Blog',
    description: 'Clean and minimalist blog template with all the features you need.',
    fullDescription:
      'Fully responsive blog template with dark mode support, search functionality, and category filtering. Perfect for writers and content creators. Includes RSS feed support and SEO optimization.',
    techStack: ['Next.js', 'Tailwind CSS', 'MDX', 'TypeScript'],
    imageUrl: '/modern-blog.png',
    demoUrl: '/templates/blog-modern/index.html',
    keywords: ['blog', 'content', 'writing', 'mdx', 'next.js blog template'],
    category: 'Blog',
    price: 49,
    releaseDate: '2024-01-30',
    popularityScore: 88,
  },
  {
    id: 'ecommerce-minimal',
    name: 'Minimal E-commerce',
    description: 'Sleek e-commerce storefront with product showcase and checkout flow.',
    fullDescription:
      'Streamlined e-commerce template with product grid, cart functionality, and clean checkout process. Designed for small businesses and independent sellers. Fully responsive and mobile-optimized.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'React'],
    imageUrl: '/minimal-ecommerce.png',
    demoUrl: '/templates/ecommerce-minimal/index.html',
    keywords: ['ecommerce', 'store', 'shop', 'stripe', 'online store template'],
    category: 'E-commerce',
    price: 49,
    releaseDate: '2024-02-10',
    popularityScore: 90,
  },
  {
    id: 'restaurant-menu',
    name: 'Restaurant Menu Site',
    description: 'Appetizing restaurant website with menu display and reservation system.',
    fullDescription:
      'Beautiful restaurant website template with interactive menu, image gallery, and online reservation form. Perfect for cafes, restaurants, and food businesses. Includes social media integration.',
    techStack: ['Next.js', 'Tailwind CSS', 'React Hook Form'],
    keywords: ['restaurant', 'menu', 'food', 'cafe', 'reservation', 'dining'],
    category: 'Restaurant',
    price: 49,
    releaseDate: '2024-01-15',
    popularityScore: 75,
  },
  {
    id: 'agency-showcase',
    name: 'Agency Showcase',
    description: 'Professional agency website with case studies and team showcase.',
    fullDescription:
      'Corporate agency template featuring project portfolios, team profiles, and service pages. Ideal for design agencies, consultancies, and professional services. Clean, professional aesthetic.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
    keywords: ['agency', 'portfolio', 'case studies', 'consultancy', 'professional'],
    category: 'Agency',
    price: 49,
    releaseDate: '2024-03-01',
    popularityScore: 85,
  },
  {
    id: 'next-landing',
    name: 'Next Landing',
    description: 'Clean, modern landing with hero, features, and showcase.',
    fullDescription:
      'A focused landing layout featuring a strong hero, concise features, and a small media showcase. Built to be a great starting point for SaaS, tools, and product sites.',
    techStack: ['HTML', 'CSS'],
    imageUrl: '/landing-page.png',
    demoUrl: '/templates/next-landing/index.html',
    keywords: ['landing page', 'saas', 'product', 'html template', 'simple landing'],
    category: 'Landing Page',
    price: 49,
    releaseDate: '2024-03-20',
    popularityScore: 82,
  },
]

