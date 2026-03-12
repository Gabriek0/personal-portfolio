'use client';

import { Button } from '@/src/shared/components/ui/button';
import Image from '@/src/shared/components/ui/image';
import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/src/shared/components/ui/section';
import dayjs from '@/src/shared/lib/dayjs';
import { cn, getMediaUrl } from '@/src/shared/lib/utils';
import {
  CareerExperience,
  EducationExperience,
  ExperienceType,
} from '@/src/shared/types/strapi';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  BriefcaseBusiness,
  GraduationCap,
  SquareArrowOutUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExperienceProps } from './types';

const headerVariants: Variants = {
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

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 50, damping: 15 },
  },
};

function Experience({ data }: ExperienceProps) {
  const params = useParams();

  const lang = params?.lang as string;
  const locale = lang?.toLowerCase();

  const [experienceType, setExpeirenceType] =
    useState<ExperienceType>('career');

  const experiences = useMemo(() => {
    const filteredExperiences = data.experiences_list.filter(
      (exp) => exp.experience_type === experienceType,
    );
    const sortedExperiences = filteredExperiences.sort(
      (a, b) =>
        new Date(b.experience_from).getTime() -
        new Date(a.experience_from).getTime(),
    );

    return sortedExperiences;
  }, [experienceType, data.experiences_list]);

  const formatDate = useCallback(
    (date: string) => dayjs(date).locale(locale).format('L'),
    [locale],
  );

  const getExperienceDate = useCallback(
    (exp: CareerExperience | EducationExperience) => {
      const { experience_type, experience_from, experience_to } = exp;

      const isCareerExperience = experience_type === 'career';

      if (isCareerExperience) {
        const {
          experience_is_current_work: isCurrentWork,
          experience_current_work_text: textCurrentWork,
        } = exp;

        if (isCurrentWork) {
          return formatDate(experience_from) + ' - ' + textCurrentWork + ' • ';
        }
      }

      if (!experience_to) return formatDate(experience_from);

      return (
        formatDate(experience_from) + ' - ' + formatDate(experience_to) + ' • '
      );
    },
    [locale],
  );

  const calculateExperienceDuration = useCallback(
    (start: string, end: string | null) => {
      const endDateValue = end ?? dayjs().format('L');

      const startDate = dayjs(start);
      const endDate = dayjs(endDateValue);

      const totalMonths = endDate.diff(startDate, 'month');
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      const durations = [];

      if (years > 0) {
        durations.push(
          years +
            ' ' +
            dayjs.duration({ years }).locale(locale).humanize().split(' ')[1],
        );
      }
      if (months > 0) {
        durations.push(
          months +
            ' ' +
            dayjs.duration({ months }).locale(locale).humanize().split(' ')[1],
        );
      }

      const formatter = new Intl.ListFormat(locale, {
        style: 'long',
        type: 'conjunction',
      });

      return formatter.format(durations);
    },
    [locale],
  );

  return (
    <Section id='experience' className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <motion.header
          className='flex flex-col'
          variants={headerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headerItemVariants}>
            <SectionBadge>{data.experiences_header.section_badge}</SectionBadge>
          </motion.div>
          <motion.div variants={headerItemVariants}>
            <SectionTitle className='mb-2'>
              {data.experiences_header.section_title}
            </SectionTitle>
          </motion.div>

          <motion.div
            className='md:flex md:items-center md:justify-between'
            variants={headerItemVariants}
          >
            <SectionDescription className='mt-2 mb-4 md:4'>
              {data.experiences_header.section_description}
            </SectionDescription>

            <Link
              target='_blank'
              href={data?.experiences_header.experience_link?.link_url || ''}
              className='cursor-pointer flex items-center gap-2 text-base font-medium text-foreground underline'
            >
              {data.experiences_header.experience_link?.link_title}{' '}
              <SquareArrowOutUpRight className='size-4' />
            </Link>
          </motion.div>
        </motion.header>

        <div className='flex flex-col mt-10'>
          <motion.div
            className='w-fit p-2 flex items-center gap-1 bg-card border-[1px] border-border rounded-4xl relative z-1'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {data.experiences_button_switchers.map((button, idx) => {
              const isActive = experienceType === button.button_value;
              return (
                <div key={idx} className='relative'>
                  {isActive && (
                    <motion.div
                      layoutId='active-pill'
                      className='absolute inset-0 bg-off-white rounded-3xl shadow-sm'
                      transition={{ type: 'spring', duration: 0.6 }}
                      style={{ borderRadius: 24 }}
                    />
                  )}

                  <Button
                    variant='ghost'
                    onClick={() =>
                      setExpeirenceType(button.button_value as ExperienceType)
                    }
                    className={cn(
                      'relative z-10 max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-36 transition-colors',

                      isActive
                        ? `text-dark hover:text-dark hover:bg-transparent`
                        : 'text-muted hover:text-dark dark:hover:text-off-white hover:bg-transparent',
                    )}
                  >
                    {!idx ? (
                      <BriefcaseBusiness className='size-4' />
                    ) : (
                      <GraduationCap className='size-4' />
                    )}
                    {button.button_text}
                  </Button>
                </div>
              );
            })}
          </motion.div>

          <motion.ul
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            key={experienceType}
            variants={listVariants}
            className='flex flex-col gap-8 mt-8 w-full'
          >
            <AnimatePresence mode='wait'>
              {experiences.map((exp, idx) => (
                <motion.li
                  variants={itemVariants}
                  key={`${exp.experience_title}-${idx}`}
                  className=' w-full flex flex-col gap-8 align-top md:flex-row'
                >
                  <div>
                    <Image
                      fill={true}
                      variant='circle'
                      alt={exp.experience_title}
                      src={getMediaUrl(exp.experience_image.url)}
                      className='h-18 w-18 md:h-18 md:w-18 lg:h-22 lg:w-22'
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h2 className='text-foreground font-semibold text-xl md:text-2xl'>
                      {exp.experience_organization}
                    </h2>

                    <div className='flex gap-2'>
                      <p className='max-w-36 text-foreground font-regular text-xs underline md:max-w-full md:text-base'>
                        {exp.experience_title}
                      </p>
                      <span className='text-muted-foreground font-light text-xs md:text-base'>
                        |
                      </span>
                      <p className='text-muted-foreground font-regular text-xs md:text-base'>
                        {exp.experience_location}
                      </p>
                    </div>

                    <p className='text-muted-foreground font-regular text-sm md:text-base'>
                      {getExperienceDate(exp)}
                      {calculateExperienceDuration(
                        exp.experience_from,
                        exp.experience_to,
                      )}{' '}
                    </p>

                    <span className='text-foreground font-regular text-left text-sm md:text-base'>
                      <ReactMarkdown
                        allowedElements={[
                          'p',
                          'ul',
                          'ol',
                          'li',
                          'strong',
                          'blockquote',
                        ]}
                        components={{
                          p: ({ children }) => (
                            <React.Fragment>
                              <p>{children}</p>
                              <br />
                            </React.Fragment>
                          ),
                          ul: ({ children }) => (
                            <ul className='ml-6 list-disc'>{children}</ul>
                          ),
                          li: ({ children }) => (
                            <li className='mb-2'>{children}</li>
                          ),
                        }}
                      >
                        {exp.experience_description}
                      </ReactMarkdown>
                    </span>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default Experience;
