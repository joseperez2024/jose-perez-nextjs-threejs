import { Navbar } from '@/components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'José Pérez 2024 | Diputado Circunscripción 3 Santo Domingo Este',
  description:
    'José Pérez 2024 Diputado, Circunscripción 3 Santo Domingo Este, ¡Vamos Arreglar Esta Vaina! Salud, Seguridad, Educación, Combustibles, Vivienda',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://joseperez2024.com',
    title: 'José Pérez 2024 | Diputado Circunscripción 3 Santo Domingo Este',
    description:
      'José Pérez 2024 Diputado, Circunscripción 3 Santo Domingo Este, ¡Vamos Arreglar Esta Vaina! Salud, Seguridad, Educación, Combustibles, Vivienda',
    images: [{ url: '/images/jose-perez-diputado-2024-og-image.jpg' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className=''>
      <body className={`${inter.className}  dark:bg-od-primary-brown`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
