'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ReactPlayer, { YouTubeConfig } from 'react-player/youtube'

import { ClientOnly } from '@/components'

const YouTube = () => {
  const playerProps = {
    url: 'https://www.youtube.com/watch?v=w9EurwkGCqg',
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
    <ClientOnly>
      <motion.section className='relative py-4 px-2 min-[400px]:px-4 sm:p-6 min-[1360px]:p-12 min-[1520px]:p-[2vw] min-[1760px]:p-[6vw]'>
        <div className='rd-bg-flag  absolute w-full inset-0' />
        <motion.div className='relative max-w-screen-2xl aspect-video mx-auto'>
          <ReactPlayer {...playerProps} />
        </motion.div>
      </motion.section>
    </ClientOnly>
  )
}

export default YouTube
