'use client';

import { getMediaUrl } from '@/src/shared/lib/utils';
import { motion, Variants } from 'framer-motion';
import { Code } from 'phosphor-react';
import { HeroHeaderProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function HeroHeader({ data }: HeroHeaderProps) {
  return (
    <motion.header
      className='flex-col'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.p
        className='text-foreground font-normal text-sm mb-1 md:text-xl'
        variants={itemVariants}
      >
        {data.hero_greetings}
      </motion.p>

      <motion.div
        className='flex items-center gap-2 mb-1'
        variants={itemVariants}
      >
        <h1 className='text-foreground font-semibold text-2xl md:text-4xl'>
          {data.hero_name}
        </h1>

        <motion.picture
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: 'easeInOut',
          }}
        >
          <source
            type='image/webp'
            srcSet={getMediaUrl(data.hero_animation.url)}
          />
          <img
            alt='👋'
            className='h-8 w-8 lg:h-10 lg:w-10'
            src={getMediaUrl(data.hero_animation.url)}
          />
        </motion.picture>
      </motion.div>

      <motion.h2
        className='flex items-center gap-2 text-secondary-foreground font-medium text-sm  mb-4 md:text-base'
        variants={itemVariants}
      >
        <span className='flex justify-center h-4 w-6.5 bg-white text-black rounded-2xl'>
          <Code className='mt-[1px] size-3.5 font-bold text-base' />
        </span>
        {data.hero_role}
      </motion.h2>

      <motion.p
        className='text-muted-foreground font-regular text-sm mt-4 md:text-base'
        variants={itemVariants}
      >
        {data.hero_description}
      </motion.p>
    </motion.header>
  );
}
