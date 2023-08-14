import Image from 'next/image'
import { Hero, YouTube } from '@/components'
import CanvasClient from '@/canvas'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <YouTube />
      {/* <CanvasClient /> */}
    </main>
  )
}
