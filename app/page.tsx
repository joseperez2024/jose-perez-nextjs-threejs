import Image from 'next/image'
import { ClientOnly, Hero, YouTube } from '@/components'
import CanvasClient from '@/canvas'

export default function Home() {
  return (
    <main className=''>
      <ClientOnly>
        <Hero />
        <YouTube />
      </ClientOnly>

      {/* <CanvasClient /> */}
    </main>
  )
}
