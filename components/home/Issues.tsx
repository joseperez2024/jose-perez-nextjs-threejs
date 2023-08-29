'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { staggerContainer } from '@/utils/motion'
import { IssueCard, TextTitle, TextTyping } from '@/components'
import { issues } from '@/constants'

import { pathwayExtreme } from '@/fonts'

const Issues = () => {
  const [active, setActive] = useState('jp-issue-002')

  return (
    <section
      id='issues'
      className='min-[960px]:py-12 min-[1200px]:py-20 min-[1520px]:py-24'
    >
      <motion.div
        // {...staggerContainer}
        variants={staggerContainer(0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full mx-auto flex flex-col space-y-2'
      >
        <div className='jp-bg-map-sde-overview flex flex-col justify-center items-center aspect-video sm:aspect-[2.65/1] bg-gray-400/20 rounded-2xl'>
          <TextTitle
            title={`Propuestas`}
            textStyles='text-center text-[2.5rem] text-white min-[480px]:text-[2.75rem] sm:text-[3.5rem] min-[800px]:text-6xl min-[960px]:text-7xl xl:text-[5rem] 2xl:text-8xl font-black uppercase drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)] !leading-none mb-1'
          />
          <TextTyping
            title='Como, ¡Vamos Arreglar Esta Vaina!'
            textStyles={`text-center text-[0.9375rem] min-[480px]:text-base sm:text-[1.3125rem] min-[800px]:text-[1.375rem] min-[960px]:text-[1.6875rem] xl:text-3xl 2xl:text-4xl  text-white font-semibold uppercase ${pathwayExtreme.className} drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)] !leading-none`}
          />
          {/* text-neutral-600/90 */}
        </div>

        <div className='flex flex-col min-h-[70vh] gap-2'>
          {issues.map((issue, index) => (
            <IssueCard
              key={issue.id}
              {...issue}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Issues
