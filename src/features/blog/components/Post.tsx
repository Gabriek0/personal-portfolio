'use client';

import dayjs from '@/src/lib/dayjs';
import { Locale } from '@/src/lib/i18n';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import { t } from '@/src/features/blog/lib/dictionaries';

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
  locale: Locale;
  date: string;
  slug: string;
  title: string;
  readingTime: number;
  tags: string[];
}

export default function Post({
  locale,
  title,
  date,
  slug,
  readingTime,
  tags,
}: PostProps) {
  const formattedDate = dayjs(date).locale(locale.toLowerCase()).format('L');

  return (
    <motion.article variants={cardVariants} className='flex flex-col gap-3'>
      <Link href={`/${locale}/blog/${slug}`}>
        <motion.div
          className='overflow-hidden rounded-xl border border-border bg-card'
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='w-full h-48 bg-linear-to-br from-card via-muted/50 to-border rounded-xl' />
        </motion.div>
      </Link>

      <motion.h2
        className='text-foreground font-medium text-xl leading-snug cursor-pointer hover:underline'
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={`/${locale}/blog/${slug}`}>{title}</Link>
      </motion.h2>

      <div className='flex flex-wrap items-center gap-5 text-muted-foreground text-sm'>
        <span className='flex items-center gap-1.5'>
          <Calendar className='size-4' />
          {formattedDate}
        </span>
        <span className='flex items-center gap-1.5'>
          <BookOpen className='size-4' />
          {readingTime} {t(locale, 'readingTime')}
        </span>
      </div>

      <ul className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <li
            key={tag}
            className='rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground'
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
