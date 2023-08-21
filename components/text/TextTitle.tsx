'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '@/utils/motion'
import { TextTitleProps } from '@/types'
import { monserrat } from '@/fonts'

const TextTitle = ({ title, textStyles }: TextTitleProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial='hidden'
      whileInView='show'
      className={`${monserrat.className} ${textStyles}`}
    >
      {title}
    </motion.h2>
  )
}

export default TextTitle
