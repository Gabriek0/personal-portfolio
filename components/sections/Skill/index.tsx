'use client';

import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '@/components/ui/Section';
import { getMediaUrl } from '@/lib/getMediaUrl';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { SkillProps } from './Skill.types';

function Skill({ data }: SkillProps) {
  return (
    <Section id={'skills'} className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <SectionBadge className='mt-0 mb-2'>
            {data.skills_header.section_badge}
          </SectionBadge>
          <SectionTitle className='mt-0 mb-2'>
            {data.skills_header.section_title}
          </SectionTitle>
          <SectionDescription className='mt-0 mb-8'>
            {data.skills_header.section_description}
          </SectionDescription>
        </header>

        <ul className='w-full flex flex-wrap justify-center gap-3'>
          {data.skills_list.map((skill, index) => (
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
              className='cursor-pointer max-h-8.5 min-h-8.5 w-fit flex items-center gap-2 p-2 bg-surface-subtle border-surface border-[1px] rounded-3xl md:max-h-12 md:min-h-12'
            >
              <div className='relative h-4.5 w-4.5 rounded-full overflow-hidden md:h-6 md:w-6'>
                <NextImage
                  fill={true}
                  alt={skill.skill_image.name}
                  src={getMediaUrl(skill.skill_image.url)}
                />
              </div>

              <span className='text-text-secondary text-xs font-medium md:text-sm'>
                {skill.skill_name}
              </span>
            </motion.li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}

export default Skill;
