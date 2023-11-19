'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ReactPlayer, { YouTubeConfig } from 'react-player/youtube'

import { fadeIn, staggerContainer } from '@/utils/motion'

const YouTube = () => {
  const playerProps = {
    url: 'https://youtu.be/cqQKFuSU7ZY',
    width: '100%',
    height: '100%',
    playing: false,
    controls: true,
    loop: true,
    config: {
      youtube: {
        playerVars: { modestbranding: 1 },
      },
    } as YouTubeConfig,
  }

  return (
    <>
      <motion.section
        className='jp-home-section-youtube relative flex flex-col justify-center items-center min-[960px]:py-12 min-[1200px]:py-20 min-[1520px]:py-24'
        {...staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div className='jp-reactplayer-youtube relative aspect-video w-full max-w-[1360px] mx-auto flex flex-col justify-center items-center'>
          <ReactPlayer {...playerProps} />
        </motion.div>
        {/* <div className='relative flex flex-col justify-center items-center w-full h-full bg-gray-400/20 min-[960px]:rounded-2xl md:py-8'>
          sm:px-6 min-[960px]:px-8 min-[1120px]:px-9
          <div className=' jp-bg-logo-flag-outline absolute w-full inset-0 p-2 sm:p-4 md:py-8' />
          <motion.div className='jp-reactplayer-youtube relative aspect-video w-[95vw] min-[880px]:w-[90vw]  max-w-[1360px] mx-auto flex flex-col justify-center items-center'>
            <ReactPlayer {...playerProps} />
          </motion.div>
        </div> */}
      </motion.section>
    </>
  )
}

export default YouTube
