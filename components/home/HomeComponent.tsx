'use client'

// import Canvas from '@/canvas/CanvasClient'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '@/store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../../config/motion'
import Image from 'next/image'

import { ButtonCustom } from '@/components'
import { useRouter } from 'next/navigation'

const HomeComponent = () => {
  const snap = useSnapshot(state)
  !snap.intro && (state.intro = true)

  const router = useRouter()

  const handleClick = () => {
    state.intro = false
    router.push('/customizer')
  }

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Image src='/threejs.png' alt='threejs' width={32} height={32} />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text uppercase'>
                ¡Vamos Arreglar <br className='hidden xl:block' /> Esta Vaina!
              </h1>
            </motion.div>
            <motion.div
              className='flex flex-col gap-5'
              {...headContentAnimation}
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create unique and exclusive shirt with our 3D cutomization tool
              </p>

              <ButtonCustom
                btnType='filled'
                label='Customize it'
                onClick={handleClick}
                buttonStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default HomeComponent
