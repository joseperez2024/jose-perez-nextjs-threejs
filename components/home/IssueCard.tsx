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
      } cursor-pointer 	transform-origin`}
      onClick={() => setActive(id)}
    >
      <motion.div
        layout='size'
        transition={{ duration: 3 }}
        style={{ originX: 0, originY: 0 }}
        className={`${
          active !== id
            ? 'bg-rd-flag-blue p-4  rounded-lg'
            : 'bg-rd-flag-red rounded-t-2xl px-4 py-6'
        } w-full`}
      >
        <h3
          className={`${monserrat.className} ${
            active !== id
              ? 'tex-[18px] sm:text-[26px]'
              : 'text-lg sm:text-[2rem]'
          } font-semibold text-white uppercase`}
        >
          {title}
        </h3>
      </motion.div>
      <motion.div
        layout='size'
        transition={{ duration: 0.4 }}
        style={{ originX: '50%', originY: 0.5 }}
        className={`${
          active !== id
            ? 'h-0'
            : 'h-fit p-4 min-[480px]:p-8 w-full rounded-b-2xl bg-gray-400/20  border-2 border-t-0 border-rd-flag-red transition-[height] duration-[7s] 	transform-origin'
        } `}
      >
        <motion.p
          layout='size'
          style={{ originX: '50%', originY: '50%' }}
          className={`${pathwayExtreme.className} ${
            active !== id ? 'hidden' : 'block'
          } font-normal text-base leading-5 text-rd-flag-blue`}
        >
          {summary}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default IssueCard
