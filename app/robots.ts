import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/canvas/', '/customizer/'],
  },
  sitemap: 'https://joseperez2024.com/sitemap.xml',
})

export default robots
