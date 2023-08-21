'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '@/utils/motion'
import { TextTypingProps } from '@/types'

const TextTyping = ({ title, textStyles }: TextTypingProps) => {
  return (
    <motion.p variants={textContainer} className={`${textStyles}`}>
      {title &&
        Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index} className='h-[17px]'>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
    </motion.p>
  )
}

export default TextTyping
