'use client';

import dayjs from '@/src/shared/lib/dayjs';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import { t } from '../lib/dictionaries';

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface PostProps {
  locale: string;
  date: string;
  slug: string;
  title: string;
  readingTime: number;
}

export default function Post({
  locale,
  title,
  date,
  slug,
  readingTime,
}: PostProps) {
  const formattedDate = dayjs(date).locale(locale).format('L');

  return (
    <motion.article variants={cardVariants} className='flex flex-col gap-3'>
      <Link href={`/en/blog/${slug}`}>
        <motion.div
          className='overflow-hidden rounded-xl'
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='w-full h-48 bg-neutral-700 rounded-xl' />
          {/*
          <Image
            src={''}
            alt={title}
            fill
            className='object-cover w-full h-48 rounded-xl'
          />
          */}
        </motion.div>
      </Link>

      <motion.h2
        className='h-13.5 text-foreground font-medium text-xl leading-snug cursor-pointer hover:underline'
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={`/en/blog/${slug}`}>{title}</Link>
      </motion.h2>

      <div className='flex items-center gap-5 text-muted-foreground text-sm'>
        <span className='flex items-center gap-1.5'>
          <Calendar className='size-4' />
          {formattedDate}
        </span>
        <span className='flex items-center gap-1.5'>
          <BookOpen className='size-4' />
          {readingTime} {t('readingTime', locale)}
        </span>
      </div>
    </motion.article>
  );
}
