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

import { ButtonCustom, NavSocialMenu } from '@/components'
import { useRouter } from 'next/navigation'

import { monserrat } from '@/fonts'

const Hero = () => {
  const snap = useSnapshot(state)
  !snap.intro && (state.intro = true)

  const router = useRouter()

  const handleClick = () => {
    state.intro = false
    router.push('/customizer')
  }

  return (
    <AnimatePresence>
      <motion.div className='bg-od-primary-brown flex flex-col gap-y-4 relative p-2 py-8 min-[480px]:px-4 min-[480px]:pt-8 min-[480px]:pb-12 min-[560px]:px-8 sm:px-4 md:px-8 !pt-32'>
        <motion.section
          className={` sm:justify-between sm:items-center flex max-[639px]:flex-col gap-y-4`}
          {...slideAnimation('left')}
        >
          {/* <div className='absolute w-full inset-0 od-bg-logo-white' /> */}
          {/* <motion.header {...slideAnimation('down')}>
          <motion.div {...headTextAnimation} className='bg-white w-fit p-8 '>
            <h1
              className={`${monserrat.className} font-black uppercase text-2xl text-od-primary-brown`}
            >
              <span className='block'>¡Vamos Arreglar</span>
              <span className='block'>Esta Vaina!</span>
            </h1>
          </motion.div>
        </motion.header> */}

          <motion.header
            className='flex flex-col gap-y-2 sm:gap-y-8 w-full sm:w-1/2'
            {...slideAnimation('down')}
          >
            <motion.div {...headTextAnimation} className='w-full h-full'>
              <h1
                className={`${monserrat.className} font-black uppercase text-xl text-white text-center`}
              >
                <span className='block text-[30px] min-[340px]:text-[33px] min-[480px]:text-[40px]  sm:text-[2rem] md:text-[36px] lg:text-[40px] min-[1200px]:text-5xl  min-[1360px]:text-[56px] min-[1600px]:text-6xl !leading-tight '>
                  José Pérez 2024
                </span>
                <span className='block text-5xl min-[340px]:text-[54px] min-[480px]:text-[66px]  sm:text-[52px] md:text-[60px] lg:text-[22px] min-[1200px]:text-[80px] min-[1360px]:text-[94px] min-[1600px]:text-[100px] !leading-none'>
                  Diputado
                </span>
                <span className='block text-[29px] min-[340px]:text-[32px] min-[480px]:text-[40px] sm:text-[31px] md:text-[36px] lg:text-3xl min-[1200px]:text-5xl min-[1360px]:text-[56px] min-[1600px]:text-[60px] !leading-tight min-[1200px]:!leading-[1.125] '>
                  Santo Domingo
                </span>
                <span className='block text-[25px] min-[340px]:text-[27px] min-[480px]:text-[34px] sm:text-[26px] md:text-[31px] lg:text-3xl min-[1200px]:text-[40px] min-[1360px]:text-[48px] min-[1600px]:text-[52px] !leading-tight min-[1200px]:!leading-[1.125] '>
                  Circunscripción 3
                </span>
              </h1>
            </motion.div>
            <motion.div className='w-full h-full' {...headContainerAnimation}>
              <motion.div className='relative aspect-[16/3] w-[40%] sm:w-[60%] mx-auto max-w-[240px]'>
                <Image
                  src={`https://res.cloudinary.com/dpsdypwrh/image/upload/v1692219636/jose-perez/opcion-democratica/jose-perez-2024-logo-opcion-democratica-all-white.svg`}
                  alt='José Pérez 2024 Diputado, Santo Domingo Circunscripción 3. ¡Vamos Arreglar Esta Vaina! | Opción Democrática'
                  fill
                  sizes='auto'
                  className='object-contain'
                />
              </motion.div>
            </motion.div>
          </motion.header>
          <motion.div
            className='relative flex flex-col gap-y-4 w-full sm:w-1/2'
            {...headContainerAnimation}
          >
            <div className='absolute w-full inset-0 od-bg-logo-white' />
            <motion.div className='relative aspect-square w-[95%] min-[480px]:w-[80%] min-[560px]:w-[75%] sm:w-[70%] md:w-[65%] xl:w-[60%] min-[1440px]:w-[55%] mx-auto'>
              <Image
                src={`https://res.cloudinary.com/dpsdypwrh/image/upload/v1691711146/jose-perez/home/jp-2024-headsot-standing-sideways-square.webp`}
                alt='José Pérez 2024 Diputado, Santo Domingo Circunscripción 3. ¡Vamos Arreglar Esta Vaina!'
                fill
                sizes='auto'
                className='object-contain'
              />
            </motion.div>
            <motion.div className='w-full h-full' {...headContentAnimation}>
              <motion.div className='relative aspect-[16/7.5] min-[480px]:w-[85%] min-[560px]:w-[80%] sm:w-[75%] md:w-[70%] xl:w-[65%] min-[1440px]:w-[60%] mx-auto -mt-14 min-[400px]:-mt-[4.5rem] min-[1600px]:-mt-[5rem]'>
                <Image
                  src={`https://res.cloudinary.com/dpsdypwrh/image/upload/v1691793361/jose-perez/tagline/jose-perez-2024-tagline-vamos-arreglar-esta-vaina-web.webp`}
                  alt='José Pérez 2024 Diputado, Santo Domingo Circunscripción 3. ¡Vamos Arreglar Esta Vaina!'
                  fill
                  sizes='auto'
                  className='object-contain'
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.footer
          className='flex flex-col gap-6 w-full sm:max-w-screen-sm mx-auto'
          {...headContentAnimation}
        >
          {/* <motion.div className='relative flex flex-row w-full'> */}
          <motion.div className='hidden'>
            <ButtonCustom
              label='!Unete!'
              onClick={handleClick}
              buttonStyles='w-full px-2 py-4 font-medium min-[360px]:font-semibold text-[0.625rem] min-[400px]:text-xs min-[480px]:text-sm text-white uppercase bg-[#22bbc1] rounded-none rounded-l-md'
            />
            <ButtonCustom
              label='!Se Voluntario!'
              onClick={handleClick}
              buttonStyles='w-full px-2 py-4 font-medium min-[360px]:font-semibold text-[0.625rem] min-[400px]:text-xs min-[480px]:text-sm text-white uppercase bg-[#0a8140] rounded-none'
            />
            <ButtonCustom
              label='!Dona!'
              onClick={handleClick}
              buttonStyles='w-full px-2 py-4 font-medium min-[360px]:font-semibold text-[0.625rem] min-[400px]:text-xs min-[480px]:text-sm text-white uppercase bg-[#e9262f] rounded-none rounded-r-md'
            />
          </motion.div>
          <NavSocialMenu socialStyles='flex flex-row items-center relative w-fit text-[32px] text-white gap-3 mx-auto' />
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  )
}

export default Hero
