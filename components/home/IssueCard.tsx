'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { fadeIn } from '@/utils/motion'
import { IssueCardProps } from '@/types'
import { normalize } from 'path'
import { pathwayExtreme, monserrat } from '@/fonts'

const IssueCard = ({
  active,
  id,
  index,
  setActive,
  title,
  subtitle,
  summary,
}: IssueCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'rounded-2xl' : 'rounded-lg'
      } flex flex-col items-start justify-start transition-[height] duration-[0.7s] ease-out-flex cursor-pointer`}
      /*  className={`relative ${
        active === id
          ? 'flex-[10] lg:flex-[3.5] rounded-2xl'
          : 'flex-[4] lg:flex-[0.5] rounded-lg'
      } flex flex-col items-start justify-start min-w-[18vw] h-[400px] transition-[height] duration-[0.7s] ease-out-flex cursor-pointer`} */
      onClick={() => setActive(id)}
    >
      {active !== id ? (
        <div className='w-full p-4 bg-rd-flag-blue rounded-lg'>
          <h3
            className={`${monserrat.className} font-semibold tex-[18px] sm:text-[26px] text-white uppercase`}
          >
            {title}
          </h3>
        </div>
      ) : (
        <>
          <div className='w-full bg-rd-flag-red rounded-t-2xl px-4 py-6'>
            <h3
              className={`${monserrat.className} font-semibold text-lg sm:text-[2rem] text-white uppercase`}
            >
              {title}
            </h3>
          </div>
          <div className='w-full h-fit p-4 min-[480px]:p-8 rounded-b-2xl bg-gray-400/20  border-2 border-t-0 border-rd-flag-red '>
            <p
              className={`${pathwayExtreme.className} font-normal text-base leading-5 text-rd-flag-blue`}
            >
              {summary}
            </p>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default IssueCard
