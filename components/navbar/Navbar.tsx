'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { navVariants } from '@/utils/motion'
import { CgMenuLeft, CgSearch } from 'react-icons/cg'
import { NavSocialMenu } from '@/components'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`p-2 fixed top-0 left-0 right-0  z-10 bg-white`}
    >
      {/* <div className='absolute w-[50%] inset-0 gradient-od' /> */}
      {/* <div className='absolute w-full inset-0 bg-polymorphism shadow-md z-0' /> */}
      <div
        className={`max-w-[1920px] w-full mx-auto flex justify-between items-center gap-8 text-black`}
      >
        <div className='relative w-1/3'>
          <span className='hidden'>
            <CgMenuLeft className={`text-[32px] text-rd-flag-blue`} />
          </span>
        </div>
        <div className='relative w-full max-w-[180px]  aspect-[16/7.5] max-[719px]:h-12 max-h-16 z-20'>
          <Image
            src={`https://res.cloudinary.com/dpsdypwrh/image/upload/v1691771575/jose-perez/logo/jose-perez-2024-logo-flag-outline-vector.svg`}
            alt='José Pérez 2024 Diputado, Santo Domingo Circunscripción 3 | ¡Vamos Arreglar Esta Vaina!'
            fill
            sizes='auto'
            className='object-contain'
          />
        </div>
        <div className='w-1/3 flex flex-row gap-3 justify-end items-center'>
          <NavSocialMenu socialStyles='max-[1279px]:hidden flex flex-row gap-3 justify-end items-center relative w-full text-[32px] text-rd-flag-red' />
          <span className='hidden'>
            <CgSearch className={`text-[32px] !text-rd-flag-red`} />
          </span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
