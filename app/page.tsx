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
      <ClientOnly className='space-y-2 sm:space-y-4'>
        <Hero />
        <div className='space-y-2 px-2 sm:space-y-4 sm:px-4'>
          <YouTube />
          <About />
          <Issues />
          {/* <Join /> */}
        </div>
      </ClientOnly>

      {/* <CanvasClient /> */}
    </main>
  )
}
