'use client';

import { Button } from '@/src/components/ui/button';
import { getMediaUrl } from '@/src/lib/utils';
import { motion, Variants } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { HeroButtonProps } from '../types';
import { useParams } from "next/navigation";
import { getDownloadUrl } from "../lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function HeroButtons({ data }: HeroButtonProps) {
  const params = useParams();
  const lang = params?.lang as string;

  return (
    <motion.div
      className='flex flex-col gap-4 mt-6 md:flex-row lg:mt-8'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={buttonVariants}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.02, y: -2 }}
      >
        <Link href={data.hero_primary_button.button_url || ''} target='_blank'>
          <Button
            variant='primary'
            className='w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
          >
            {data.hero_primary_button.button_text}
            <ExternalLink className='size-5' />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          download
          target='_blank'
          href={getDownloadUrl(data.hero_secondary_button.button_url, lang)}

        >
          <Button
            variant='secondary'
            className='w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
          >
            {data.hero_secondary_button.button_text}
            <Download className='size-5' />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
