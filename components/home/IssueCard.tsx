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
  icon: Icon,
}: IssueCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      layout='size'
      layoutDependency
      className={`relative ${
        active === id ? 'rounded-2xl' : 'rounded-lg'
      } cursor-pointer 	transform-origin`}
      onClick={() => setActive(id)}
    >
      <motion.div
        className={`${
          active !== id
            ? 'bg-rd-flag-blue rounded-lg'
            : 'bg-rd-flag-red rounded-t-2xl '
        } w-full px-4 py-6 sm:px-6 sm:py-8`}
      >
        <h3
          className={`${monserrat.className} flex flex-row gap-2 sm:gap-4 items-center text-xs min-[360px]:text-sm min-[400px]:text-base sm:text-lg font-semibold min-[360px]:font-bold text-white uppercase leading-none`}
        >
          <Icon className='leading-none text-white' color='#fff' />{' '}
          <span className='block'>{subtitle}</span>
        </h3>
      </motion.div>
      <motion.div
        layout='size'
        transition={{ duration: 0.4 }}
        style={{ originX: '50%', originY: 0.5 }}
        className={`${
          active !== id
            ? 'h-0'
            : 'h-fit p-4 min-[480px]:p-8 xl:p-12 2xl:p-16 w-full rounded-b-2xl bg-gray-400/20  border-2 border-t-0 border-rd-flag-red transition-[height] duration-[7s] 	transform-origin'
        } `}
      >
        <motion.h4
          layout='size'
          style={{ originX: '50%', originY: '50%' }}
          className={`${monserrat.className} ${
            active !== id
              ? 'hidden'
              : 'block text-base min-[360px]:text-[18px] sm:text-2xl xl:text-[1.76rem]'
          } font-bold text-rd-flag-blue uppercase mb-2 xl:mb-4 leading-none`}
        >
          {subtitle}
        </motion.h4>
        <motion.p
          layout='size'
          style={{ originX: '50%', originY: '50%' }}
          className={`${pathwayExtreme.className} ${
            active !== id ? 'hidden' : 'block'
          } font-medium text-sm min-[400px]:text-base lg:text-lg xl:text-xl 2xl:text-[1.375rem] !leading-normal lg:!leading-relaxed text-rd-flag-blue`}
        >
          {summary}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default IssueCard
