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
import { SquareArrowRight } from 'lucide-react';
import { AboutProps } from './About.types';

function About({ data }: AboutProps) {
  return (
    <Section id='about' className='mt-18 lg:mt-0'>
      <SectionWrapper>
        <div className='flex flex-col items-center gap-8 md:gap-10 md:flex-row lg:items-start'>
          <div className='max-w-120'>
            <SectionBadge>{data.about_header.section_badge}</SectionBadge>
            <SectionTitle>{data.about_header.section_title}</SectionTitle>

            <SectionDescription>
              {data.about_header.section_description}
            </SectionDescription>

            <a className='flex items-center gap-2 underline text-text-important text-sm lg:text-base'>
              {data.about_button.link_title}
              <span className='no-underline'>
                <SquareArrowRight className='h-4.5 w-4.5' />
              </span>
            </a>
          </div>

          <div>
            <Image
              fill={true}
              variant='circle'
              alt={data.about_image.name}
              src={getMediaUrl(data.about_image.url)}
              className='h-46.5 w-46.5 lg:h-62.5 lg:w-62.5'
            />
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default About;
