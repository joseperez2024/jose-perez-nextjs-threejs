'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { staggerContainer } from '@/utils/motion'
import { IssueCard, TextTitle, TextTyping } from '@/components'
import { issues } from '@/constants'

import { monserrat } from '@/fonts'

const Issues = () => {
  const [active, setActive] = useState('jp-issue-002')
  return (
    <section id='issues' className='p-2 sm:p-4 min-[960px]:p-8'>
      <motion.div
        // {...staggerContainer}
        variants={staggerContainer(0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-full mx-auto flex flex-col'
      >
        <TextTitle
          title={`Propuestas`}
          textStyles='text-center text-[40px] text-rd-flag-blue min-[480px]:text-[2.75rem] min-[960px]:text-6xl font-black uppercase'
        />
        <TextTyping
          title='Como, ¡Vamos Arreglar Esta Vaina!'
          textStyles={`text-center text-base min-[480px]:text-lg min-[960px]:text-2xl text-neutral-600/90 font-semibold ${monserrat.className}`}
        />

        <div className='flex flex-col  mt-6 min-h-[70vh] gap-5'>
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
