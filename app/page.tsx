import Image from 'next/image'
import {
  About,
  ClientOnly,
  Hero,
  Issues,
  LogoSvgMotion,
  YouTube,
} from '@/components'
import CanvasClient from '@/canvas'

export default function Home() {
  return (
    <main className=''>
      <ClientOnly>
        <Hero />
        <YouTube />
        <About />
        <Issues />
      </ClientOnly>

      {/* <CanvasClient /> */}
    </main>
  )
}
