'use client';

import { motion, Variants } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const letter: Variants = {
  hidden: { y: -24, opacity: 0, filter: 'blur(6px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

function HeaderLogo() {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      whileHover={{ scale: 1.08, letterSpacing: '0.04em' }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className='relative z-10 flex h-fit w-fit cursor-pointer select-none items-center text-size-xl text-foreground'
    >
      <motion.strong variants={letter} className='font-bold'>
        G
      </motion.strong>
      <motion.span variants={letter} className='font-regular italic'>
        h
      </motion.span>
      <motion.span variants={letter} className='font-regular'>
        ;
      </motion.span>
    </motion.div>
  );
}

export default HeaderLogo;
