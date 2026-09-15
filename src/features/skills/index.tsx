'use client';

import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/src/components/ui/section';
import { getMediaUrl } from '@/src/lib/utils';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { SkillProps } from './types';

function Skill({ data }: SkillProps) {
  return (
    <Section id={'skills'} className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <SectionBadge className='mt-0 mb-2'>
            {data.header.badge}
          </SectionBadge>
          <SectionTitle className='mt-0 mb-2'>
            {data.header.title}
          </SectionTitle>
          <SectionDescription className='mt-0 mb-8'>
            {data.header.description}
          </SectionDescription>
        </header>

        <ul className='w-full flex flex-wrap justify-center gap-3'>
          {data.items.map((skill, index) => (
            <motion.li
              key={skill.id}
              custom={index}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
              variants={{
                initial: {
                  opacity: 0,
                  y: 100,
                },
                animate: (index: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.05 * index,
                  },
                }),
              }}
              className='cursor-pointer max-h-8.5 min-h-8.5 w-fit flex items-center gap-2 p-2 bg-card border-border border-[1px] rounded-3xl md:max-h-12 md:min-h-12'
            >
              <div className='relative h-4.5 w-4.5 rounded-full overflow-hidden md:h-6 md:w-6'>
                <NextImage
                  fill={true}
                  alt={skill.image.alt || skill.image.name}
                  src={getMediaUrl(skill.image.src)}
                />
              </div>

              <span className='text-secondary-foreground text-xs font-medium md:text-sm'>
                {skill.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}

export default Skill;
