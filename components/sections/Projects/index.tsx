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
import { ArrowUpRight } from 'lucide-react';
import { ProjectsProps } from './Projects.types';

function Projects({ data }: ProjectsProps) {
  return (
    <Section id='projects' className='w-full my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <SectionBadge>{data.projects_header.section_badge}</SectionBadge>
          <SectionTitle>{data.projects_header.section_title}</SectionTitle>
          <SectionDescription>
            {data.projects_header.section_description}
          </SectionDescription>
        </header>
        <div className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {data.projects_list.map((project) => (
            <div key={project.id} className='flex flex-col'>
              <Image
                fill={true}
                variant='square'
                alt={project.project_image.name}
                src={getMediaUrl(project.project_image.url)}
                className='mb-6 h-72 w-80 md:mb-4 md:h-68 md:w-76 lg:h-80 lg:w-93'
              />

              <h2 className='cursor-pointer flex items-center gap-2 text-text-important font-medium text-2xl hover:underline'>
                {project.project_title} <ArrowUpRight className='size-4' />
              </h2>
              <p className='text-text-description font-normal text-sm md:text-base'>
                {project.project_description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default Projects;
