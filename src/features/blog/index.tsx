'use client';

import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/src/components/ui/section';
import { Locale } from '@/src/lib/i18n';
import { BlogPostSummary } from '@/src/features/blog/types';
import { motion, Variants } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import Post, { cardVariants } from './components/Post';
import { t } from './lib/dictionaries';
import { calculateReadingTime } from './lib/utils';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants: Variants = {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

interface BlogProps {
  locale: Locale;
  posts: Array<BlogPostSummary & { content: string }>;
}

export default function Blog({ locale, posts }: BlogProps) {
  return (
    <Section id='blog' className='w-full my-12 mx-auto'>
      <SectionWrapper>
        <motion.header
          className='flex flex-col'
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headerItemVariants}>
            <SectionBadge>{t(locale, 'title')}</SectionBadge>
          </motion.div>
          <motion.div
            variants={headerItemVariants}
            className='md:flex md:items-center md:justify-between'
          >
            <div>
              <SectionTitle>{t(locale, 'title')}</SectionTitle>
              <SectionDescription>{t(locale, 'description')}</SectionDescription>
            </div>

            <motion.div
              variants={headerItemVariants}
              className='mt-2 md:mt-0 md:self-end'
            >
              <Link
                href={`/${locale}/blog`}
                className='cursor-pointer flex items-center gap-2 text-base font-medium text-foreground underline'
              >
                {t(locale, 'allPosts')}
                <SquareArrowOutUpRight className='size-4' />
              </Link>
            </motion.div>
          </motion.div>
        </motion.header>

        <motion.div
          className='grid grid-cols-1 mt-8 gap-8 sm:grid-cols-2 lg:grid-cols-3'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Post
                locale={locale}
                slug={post.slug}
                date={post.date}
                title={post.title}
                tags={post.tags}
                readingTime={calculateReadingTime(post.content)}
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </Section>
  );
}
