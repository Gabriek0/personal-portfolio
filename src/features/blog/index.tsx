'use client';

import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/src/shared/components/ui/section';
import { motion, Variants } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import Post, { cardVariants } from './components/Post';
import { calculateReadingTime } from './lib/utils';
import { BlogProps } from './types';

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

export default function Blog({ data: { blog_header, posts_list } }: BlogProps) {
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
            <SectionBadge>{blog_header.section_badge}</SectionBadge>
          </motion.div>
          <motion.div
            variants={headerItemVariants}
            className='md:flex md:items-center md:justify-between'
          >
            <div>
              <SectionTitle>{blog_header.section_title}</SectionTitle>
              <SectionDescription>
                {blog_header.section_description}
              </SectionDescription>
            </div>

            <motion.div
              variants={headerItemVariants}
              className='mt-2 md:mt-0 md:self-end'
            >
              <Link
                target='_blank'
                href={blog_header.experience_link?.link_url || '#'}
                className='cursor-pointer flex items-center gap-2 text-base font-medium text-foreground underline'
              >
                {blog_header.experience_link.link_title}{' '}
                <SquareArrowOutUpRight className='size-4' />
              </Link>
            </motion.div>
          </motion.div>
        </motion.header>

        <motion.div
          className='grid grid-cols-1 mt-8 gap-8 sm:grid-cols-2 lg:grid-cols-3 '
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts_list.map((post, index) => (
            <motion.div key={post.data.slug ?? index} variants={cardVariants}>
              <Post
                slug={post.data.slug}
                date={post.data.date}
                title={post.data.title}
                readingTime={calculateReadingTime(post.content)}
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </Section>
  );
}
