'use client';

import Divider from '@/components/ui/Divider';
import { motion } from 'framer-motion';

export default function HeroDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.8,
        ease: 'easeOut',
      }}
    >
      <Divider />
    </motion.div>
  );
}
