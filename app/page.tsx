import Image from 'next/image'
import {
  About,
  ClientOnly,
  Hero,
  Issues,
  Join,
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
        {/* <Join /> */}
      </ClientOnly>

      {/* <CanvasClient /> */}
    </main>
  )
}
