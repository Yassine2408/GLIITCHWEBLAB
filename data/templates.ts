export interface Template {
  id: string
  name: string
  description: string
  fullDescription: string
  techStack: string[]
  imageUrl?: string
  demoUrl?: string
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
  },
  {
    id: 'portfolio-creative',
    name: 'Creative Portfolio',
    description: 'Showcase your work with this stunning portfolio template for designers and creatives.',
    fullDescription:
      'A beautiful portfolio template designed for creatives. Features elegant animations, grid layouts, and smooth transitions. Built with React and styled with Tailwind CSS for easy customization.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'blog-modern',
    name: 'Modern Blog',
    description: 'Clean and minimalist blog template with all the features you need.',
    fullDescription:
      'Fully responsive blog template with dark mode support, search functionality, and category filtering. Perfect for writers and content creators. Includes RSS feed support and SEO optimization.',
    techStack: ['Next.js', 'Tailwind CSS', 'MDX', 'TypeScript'],
  },
  {
    id: 'ecommerce-minimal',
    name: 'Minimal E-commerce',
    description: 'Sleek e-commerce storefront with product showcase and checkout flow.',
    fullDescription:
      'Streamlined e-commerce template with product grid, cart functionality, and clean checkout process. Designed for small businesses and independent sellers. Fully responsive and mobile-optimized.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'React'],
  },
  {
    id: 'restaurant-menu',
    name: 'Restaurant Menu Site',
    description: 'Appetizing restaurant website with menu display and reservation system.',
    fullDescription:
      'Beautiful restaurant website template with interactive menu, image gallery, and online reservation form. Perfect for cafes, restaurants, and food businesses. Includes social media integration.',
    techStack: ['Next.js', 'Tailwind CSS', 'React Hook Form'],
  },
  {
    id: 'agency-showcase',
    name: 'Agency Showcase',
    description: 'Professional agency website with case studies and team showcase.',
    fullDescription:
      'Corporate agency template featuring project portfolios, team profiles, and service pages. Ideal for design agencies, consultancies, and professional services. Clean, professional aesthetic.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
  },
]

