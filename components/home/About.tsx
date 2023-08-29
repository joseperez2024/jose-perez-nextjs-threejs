'use client'

import { motion } from 'framer-motion'
import { LogoSvg, TextTyping } from '@/components'
import { fadeIn, staggerContainer } from '@/utils/motion'
import Image from 'next/image'
import { headContentAnimation } from '@/config/motion'

import { pathwayExtreme } from '@/fonts'

const About = () => {
  return (
    <section className='min-[960px]:py-12 min-[1200px]:py-20 min-[1520px]:py-24'>
      <motion.div
        className='relative flex flex-col xl:flex-row gap-4 xl:gap-6 justify-center items-center mx-auto  px-4 py-8 min-[480px]:px-6 min-[560px]:px-8 min-[560px]:py-12 min-[800px]:p-12 min-[960px]:p-16 xl:px-12 bg-rd-flag-blue rounded-2xl'
        {...staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          className='relative w-full h-full xl:w-5/12'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <div className='relative aspect-[16/7.5] mx-auto min-[480px]:w-[50vw] min-[960px]:w-[40vw] xl:w-[30vw] min-[1360px]:w-[35vw] min-[1600px]:w-[30vw]'>
            <Image
              src={`https://res.cloudinary.com/dpsdypwrh/image/upload/v1691793361/jose-perez/tagline/jose-perez-2024-tagline-vamos-arreglar-esta-vaina-web.webp`}
              alt='José Pérez 2024 Diputado, Santo Domingo Circunscripción 3. ¡Vamos Arreglar Esta Vaina!'
              fill
              sizes='auto'
              className='object-contain xl:mt-[-3vw]'
            />
          </div>
        </motion.div>
        <motion.div
          className='xl:w-7/12'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <motion.p
            className={`${pathwayExtreme.className} min-[720px]:mt-8 font-medium text-lg min-[560px]:text-xl xl:text-base min-[1360px]:text-lg min-[1600px]:text-xl min-[1840px]:text-[1.375rem] text-white leading-relaxed min-[560px]:leading-[1.7]  min-[960px]:leading-[1.9] xl:leading-[1.7] min-[1600px]:leading-[1.9] min-[1840px]:leading-[1.9]`}
          >
            El estilo de vida dominicano se está cayendo a pedazos mientras los{' '}
            <span className='text-white font-extrabold'>
              políticos dinosaurios destruyen nuestra economía
            </span>{' '}
            trabajando solo para las élites empresariales,{' '}
            <span className='text-white font-extrabold'>
              saboteando el increíble potencial de nuestra nación
            </span>
            . Necesitamos recuperar a nuestro país del establecimiento corrupto
            de los políticos dinosaurios y devolver el poder a los dominicanos,
            donde pertenece. Podemos lograr un futuro de{' '}
            <span className='text-white font-extrabold'>
              prosperidad, seguridad y paz
            </span>
            , creando una{' '}
            <span className='text-white font-extrabold'>economía próspera</span>{' '}
            garantizando un{' '}
            <span className='text-white font-extrabold'>
              servicio de salud adecuado
            </span>
            , destruyendo las mafias energéticas, renovando nuestro sistema
            educativo,{' '}
            <span className='text-white font-extrabold'>
              defendiendo nuestra frontera
            </span>
            . Este liderazgo lo obtendremos con fuerza y orgullo dominicano. Es
            hora de enfocarse en el pueblo, su gente y marcar el comienzo de una{' '}
            <span className='text-white font-extrabold'>
              gloriosa nueva era de fe, familia y libertad
            </span>
            . Debemos unirnos porque solo juntos lograremos estas
            transformaciones.{' '}
            <span className='text-white font-extrabold'>
              Únete a mí en esta misión imparable
            </span>{' '}
            para llevar la{' '}
            <span className='text-white font-extrabold'>
              República Dominicana
            </span>{' '}
            a el país que tiene{' '}
            <span className='text-white font-extrabold'>
              el potencial de ser y lo que debe ser
            </span>
            .
          </motion.p>
          <motion.div
            className='relative h-full w-[50vw] min-[720px]:w-[40vw] min-[960px]:w-[35vw] xl:w-[20vw] min-[1600px]:w-[15vw] mx-auto mt-8 min-[560px]:mt-12'
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <LogoSvg />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
