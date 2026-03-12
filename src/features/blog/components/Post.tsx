'use client';

import { motion, Variants } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';

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
  title: string;
  date: string;
  readingTime: number;
  slug: string;
}

export default function Post({ title, date, slug, readingTime }: PostProps) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

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
          {readingTime} min de leitura
        </span>
      </div>
    </motion.article>
  );
}
