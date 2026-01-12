'use client';

import { motion } from 'framer-motion';

function HeaderLogo() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      className='relative z-9999 h-fit w-fit cursor-pointer select-none text-size-xl text-text-important'
    >
      <strong className='font-bold'>G</strong>
      <span className='font-regular italic'>h</span>
      <span className='font-regular'>;</span>
    </motion.div>
  );
}

export default HeaderLogo;
