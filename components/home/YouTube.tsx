'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ReactPlayer, { YouTubeConfig } from 'react-player/youtube'

import { fadeIn, staggerContainer } from '@/utils/motion'

const YouTube = () => {
  const playerProps = {
    url: 'https://youtu.be/p9bmrXt1Rno',
    width: '90%',
    height: '90%',
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
        className='jp-home-section-youtube relative flex flex-col justify-center items-center h-[65vw] my-5 '
        {...staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className=' jp-bg-logo-flag-outline absolute w-full inset-0' />
        <motion.div className='jp-reactplayer-youtube relative aspect-video w-full mx-auto flex flex-col justify-center items-center'>
          <ReactPlayer {...playerProps} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default YouTube
