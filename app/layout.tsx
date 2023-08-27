import { ClientOnly, Navbar } from '@/components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  generator: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
  applicationName: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
  authors: [
    {
      name: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
      url: 'https://joseperez2024.com',
    },
  ],
  creator: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
  publisher: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://joseperez2024.com'),
  alternates: {
    canonical: '/',
    languages: {
      es: '/es_DO',
    },
  },
  keywords: [
    'José Pérez',
    '2024',
    'Diputado',
    'Santo Domingo',
    'Circunscripción 3',
    'República Dominicana',
    '¡Vamos Arreglar Esta Vaina!',
    'Salud',
    'Seguridad',
    'Educación',
    'Combustibles',
    'Vivienda',
  ],
  title: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
  description:
    'José Pérez 2024 Diputado, Santo Domingo Circunscripción 3, ¡Vamos Arreglar Esta Vaina! Salud, Seguridad, Educación, Combustibles, Vivienda',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://joseperez2024.com',
    title: 'José Pérez 2024 | Diputado Santo Domingo Circunscripción 3',
    description:
      'José Pérez 2024 Diputado, Santo Domingo Circunscripción 3, ¡Vamos Arreglar Esta Vaina! Salud, Seguridad, Educación, Combustibles, Vivienda',
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
        <main className='max-w-[1920px] mx-auto'>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          {children}
        </main>
      </body>
    </html>
  )
}
