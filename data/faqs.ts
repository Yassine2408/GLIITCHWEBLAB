/**
 * FAQ data structure
 * 
 * Frequently asked questions about GLIITCH Web Lab templates,
 * licensing, updates, support, and more.
 */

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    id: 'license-included',
    question: "What's included in the license?",
    answer: 'Each template purchase includes a commercial license that allows you to use the template for unlimited projects, both personal and client work. You can modify, customize, and deploy the template as many times as you need. The license is perpetual and includes lifetime updates.',
    category: 'Licensing',
  },
  {
    id: 'client-projects',
    question: 'Can I use templates for client projects?',
    answer: 'Yes! Our commercial license explicitly allows you to use templates for client projects. You can build unlimited websites for your clients using our templates. There are no restrictions on the number of projects or clients you can serve.',
    category: 'Licensing',
  },
  {
    id: 'lifetime-updates',
    question: 'Do I get lifetime updates?',
    answer: 'Yes, all templates include lifetime updates at no additional cost. When we release new features, bug fixes, or improvements to a template, you\'ll receive them automatically. Just download the updated version from your account.',
    category: 'Updates',
  },
  {
    id: 'update-delivery',
    question: 'How are updates delivered?',
    answer: 'Updates are delivered via email notifications with download links. You\'ll receive an email whenever we release a new version of a template you\'ve purchased. Simply download the updated files and merge your customizations.',
    category: 'Updates',
  },
  {
    id: 'support-provided',
    question: 'What kind of support do you provide?',
    answer: 'We provide email support for technical questions, installation help, and customization guidance. Our team typically responds within 24-48 hours. We also maintain comprehensive documentation and code comments to help you get started quickly.',
    category: 'Support',
  },
  {
    id: 'customization-help',
    question: 'Can you help with customization?',
    answer: 'While we provide guidance and support for customization, we don\'t offer custom development services. Our templates are designed to be easy to customize with clear code structure and documentation. For complex customizations, we recommend working with a developer familiar with Next.js and Tailwind CSS.',
    category: 'Support',
  },
  {
    id: 'refund-policy',
    question: 'What\'s your refund policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, contact us within 30 days of purchase for a full refund. We believe in the quality of our templates and want you to be completely happy with your purchase.',
    category: 'Refunds',
  },
  {
    id: 'customization-ease',
    question: 'How easy is it to customize?',
    answer: 'Our templates are designed with customization in mind. The code is well-organized, commented, and follows modern React and Next.js patterns. With basic knowledge of HTML, CSS, and React, you can easily customize colors, content, and layouts. We provide clear documentation and examples.',
    category: 'Customization',
  },
  {
    id: 'technical-skills',
    question: 'What technical skills do I need?',
    answer: 'Basic familiarity with React and Next.js is helpful, but not strictly required. Our templates work with Next.js static export, so you can deploy them anywhere without server knowledge. Knowledge of Tailwind CSS helps with styling customizations, but the templates work out of the box.',
    category: 'Technical',
  },
  {
    id: 'purchase-process',
    question: 'How does the purchase process work?',
    answer: 'Currently, purchase inquiries are handled through our contact form. Click "Buy Now" on any template, fill out the contact form with your details, and we\'ll get back to you with payment instructions and download links. We\'re working on automated checkout—coming soon!',
    category: 'Purchase',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal. Payment processing is secure and handled through our payment provider. Once payment is confirmed, you\'ll receive instant access to download your template files.',
    category: 'Purchase',
  },
  {
    id: 'deployment',
    question: 'How do I deploy the templates?',
    answer: 'All templates are configured for static export, so you can deploy them to any static hosting service like Netlify, Vercel, GitHub Pages, or AWS S3. We provide deployment guides in the template documentation. The build process is simple: run `npm run build` and upload the `out` folder.',
    category: 'Technical',
  },
]

export const faqCategories = ['Licensing', 'Updates', 'Support', 'Refunds', 'Customization', 'Technical', 'Purchase']

