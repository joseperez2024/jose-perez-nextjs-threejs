import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://joseperez2024.com',
    lastModified: new Date(),
  },
]

export default sitemap
