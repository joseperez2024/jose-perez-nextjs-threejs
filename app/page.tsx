import Image from 'next/image'
import { ClientOnly, Hero, Issues, LogoSvgMotion, YouTube } from '@/components'
import CanvasClient from '@/canvas'

export default function Home() {
  return (
    <main className=''>
      <ClientOnly>
        <Hero />
        <YouTube />
        <Issues />
      </ClientOnly>

      {/* <CanvasClient /> */}
    </main>
  )
}
