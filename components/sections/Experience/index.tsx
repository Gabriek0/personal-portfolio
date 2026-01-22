'use client';

import { Button } from '@/components/ui/Button';
import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/components/ui/Section';
import { getMediaUrl } from '@/lib/getMediaUrl';
import { cn } from '@/lib/utils';
import { ExperienceType } from '@/types/strapi';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  BriefcaseBusiness,
  GraduationCap,
  SquareArrowOutUpRight,
} from 'lucide-react';
// import NextImage from 'next/image';
import Image from '@/components/ui/Image';
import dayjs from '@/lib/dayjs';
import { useParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExperienceProps } from './Experience.types';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    return data.experiences_list
      .filter((exp) => {
        return exp.experience_type === experienceType;
      })
      .sort((a, b) => {
        return (
          new Date(b.experience_from).getTime() -
          new Date(a.experience_from).getTime()
        );
      });
  }, [experienceType, data.experiences_list]);

  const calculateDuration = useCallback(
    (start: string, end: string | null) => {
      if (!end) return null;

      const startDate = dayjs(start);
      const endDate = dayjs(end);

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
        <header className='flex flex-col'>
          <SectionBadge>{data.experiences_header.section_badge}</SectionBadge>
          <SectionTitle className='mb-2'>
            {data.experiences_header.section_title}
          </SectionTitle>

          <div className='md:flex md:items-center md:justify-between'>
            <SectionDescription className='mt-2 mb-4 md:4'>
              {data.experiences_header.section_description}
            </SectionDescription>

            <a className='cursor-pointer flex items-center gap-2 text-base font-medium text-text-important underline'>
              Acessar meu LinkedIn <SquareArrowOutUpRight className='size-4' />
            </a>
          </div>
        </header>

        <div className='flex flex-col mt-10'>
          <div className='w-fit p-2 flex items-center gap-1 bg-button-secondary rounded-4xl relative'>
            {data.experiences_button_switchers.map((button, idx) => {
              const isActive = experienceType === button.button_value;

              return (
                <div key={idx} className='relative'>
                  {isActive && (
                    <motion.div
                      layoutId='active-pill'
                      className='absolute inset-0 bg-button-primary rounded-3xl shadow-sm'
                      transition={{ type: 'spring', duration: 0.6 }}
                      style={{ borderRadius: 24 }}
                    />
                  )}

                  <Button
                    onClick={() =>
                      setExpeirenceType(button.button_value as ExperienceType)
                    }
                    variant='ghost'
                    className={cn(
                      'relative z-10 max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-36 transition-colors',

                      isActive
                        ? 'text-background hover:text-background hover:bg-transparent'
                        : 'text-text-description hover:text-text-important hover:bg-transparent',
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
          </div>

          <motion.ul
            initial='hidden'
            animate='visible'
            key={experienceType}
            variants={listVariants}
            className='flex flex-col gap-8 mt-8 w-full'
          >
            <AnimatePresence mode='wait'>
              {experiences.map((exp, idx) => (
                <motion.li
                  variants={itemVariants}
                  key={`${exp.experience_title}-${idx}`}
                  className='w-full flex flex-col gap-8 align-top md:flex-row'
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
                    <h2 className='text-text-important font-semibold text-xl md:text-2xl'>
                      {exp.experience_organization}
                    </h2>

                    <div className='flex gap-2'>
                      <p className='text-text-important font-regular text-sm underline md:text-base'>
                        {exp.experience_title}
                      </p>
                      <span className='text-text-description font-light text-base'>
                        |
                      </span>
                      <p className='text-text-description font-regular text-sm md:text-base'>
                        {exp.experience_location}
                      </p>
                    </div>

                    <p className='text-text-description font-regular text-sm md:text-base'>
                      {dayjs(exp.experience_from).locale(locale).format('L')}
                      {exp.experience_to &&
                        ' - ' +
                          dayjs(exp.experience_to).locale(locale).format('L') +
                          ' • '}
                      {calculateDuration(
                        exp.experience_from,
                        exp.experience_to,
                      )}{' '}
                    </p>

                    <span className='text-text-important font-regular text-left text-sm md:text-base'>
                      <ReactMarkdown>
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
