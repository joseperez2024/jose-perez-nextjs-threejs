'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ReactPlayer, { YouTubeConfig } from 'react-player/youtube'

import { fadeIn, staggerContainer } from '@/utils/motion'

const YouTube = () => {
  const playerProps = {
    url: 'https://youtu.be/p9bmrXt1Rno',
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
        className='jp-home-section-youtube relative flex flex-col justify-center items-center h-[65vw] min-[1760px]:h-[60vw] py-5 bg-slate-200/60'
        {...staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* sm:px-6 min-[960px]:px-8 min-[1120px]:px-9 */}
        <div className=' jp-bg-logo-flag-outline absolute w-full inset-0' />
        <motion.div className='jp-reactplayer-youtube relative aspect-video w-[95vw] min-[880px]:w-[90vw]  max-w-[1360px] mx-auto flex flex-col justify-center items-center'>
          <ReactPlayer {...playerProps} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default YouTube
