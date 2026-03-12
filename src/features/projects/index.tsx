'use client';

import Image from '@/src/shared/components/ui/image';
import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/src/shared/components/ui/section';
import { getMediaUrl } from '@/src/shared/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectsProps } from './types';

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

const cardVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function Projects({ data }: ProjectsProps) {
  return (
    <Section id='projects' className='w-full my-12 mx-auto'>
      <SectionWrapper>
        <motion.header
          className='flex flex-col'
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headerItemVariants}>
            <SectionBadge>{data.projects_header.section_badge}</SectionBadge>
          </motion.div>
          <motion.div variants={headerItemVariants}>
            <SectionTitle>{data.projects_header.section_title}</SectionTitle>
          </motion.div>
          <motion.div variants={headerItemVariants}>
            <SectionDescription>
              {data.projects_header.section_description}
            </SectionDescription>
          </motion.div>
        </motion.header>

        <motion.div
          className='flex flex-col gap-6 md:grid md:grid-cols-2'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.projects_list.map((project, index) => (
            <motion.div
              custom={index}
              key={project.id}
              className='flex flex-col'
              variants={cardVariants}
            >
              <motion.div
                variants={imageVariants}
                whileHover={{
                  scale: 1.025,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className='overflow-hidden rounded-lg mb-6 md:mb-4'
              >
                <motion.div>
                  <Link href={project.project_link} target='_blank'>
                    <Image
                      fill={true}
                      variant='square'
                      alt={project.project_image.name}
                      src={getMediaUrl(project.project_image.url)}
                      className='cursor-pointer h-72 w-80 md:h-68 md:w-76 lg:h-80 lg:w-93'
                    />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.h1
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='cursor-pointer flex items-center text-foreground font-medium text-2xl hover:underline mb-2'
              >
                <Link
                  href={project.project_link}
                  target='_blank'
                  className='flex items-center gap-2'
                >
                  {project.project_title}{' '}
                  <motion.span
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className='size-4' />
                  </motion.span>
                </Link>
              </motion.h1>

              <motion.p
                className='text-muted-foreground font-normal text-sm md:text-base'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.project_description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </Section>
  );
}

export default Projects;
