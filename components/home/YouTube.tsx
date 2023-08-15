'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ReactPlayer, { YouTubeConfig } from 'react-player/youtube'

import { ClientOnly } from '@/components'

const YouTube = () => {
  const playerProps = {
    url: 'https://www.youtube.com/watch?v=w9EurwkGCqg',
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
    <ClientOnly>
      <motion.section className='jp-home-section-youtube relative flex flex-col justify-center items-center h-[65vw] my-5 '>
        <div className=' jp-bg-logo-flag-outline absolute w-full inset-0' />
        <motion.div className='jp-reactplayer-youtube relative aspect-video w-full mx-auto flex flex-col justify-center items-center'>
          <ReactPlayer {...playerProps} />
        </motion.div>
      </motion.section>
    </ClientOnly>
  )
}

export default YouTube
