'use client';

import Image from '@/components/ui/Image';
import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/components/ui/Section';
import { getMediaUrl } from '@/lib/getMediaUrl';
import { motion, Variants } from 'framer-motion';
import { SquareArrowRight } from 'lucide-react';
import { AboutProps } from './About.types';

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

function About({ data }: AboutProps) {
  return (
    <Section id='about' className='mt-18 lg:mt-0'>
      <SectionWrapper>
        <div className='flex flex-col items-center gap-8 md:gap-10 md:flex-row lg:items-start'>
          <motion.div
            className='max-w-120'
            variants={contentVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <SectionBadge>{data.about_header.section_badge}</SectionBadge>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SectionTitle>{data.about_header.section_title}</SectionTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SectionDescription>
                {data.about_header.section_description}
              </SectionDescription>
            </motion.div>

            <motion.a
              className='cursor-pointer flex items-center gap-2 underline text-foreground text-sm lg:text-base'
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {data.about_button.link_title}
              <motion.span
                className='no-underline'
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <SquareArrowRight className='h-4.5 w-4.5' />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
          >
            <Image
              fill={true}
              variant='circle'
              alt={data.about_image.name}
              src={getMediaUrl(data.about_image.url)}
              className='cursor-pointer h-46.5 w-46.5 lg:h-62.5 lg:w-62.5'
            />
          </motion.div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default About;
