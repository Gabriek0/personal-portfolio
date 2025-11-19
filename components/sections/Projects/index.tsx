'use client';

import { Section, SectionWrapper } from '@/components/ui/Section';
import { ProjectsProps } from './Projects.types';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';

function Projects({ children }: ProjectsProps) {
  return (
    <Section className='w-full my-12 mx-auto'>
      <SectionWrapper>{children}</SectionWrapper>
    </Section>
  );
}

Projects.List = ProjectsList;
Projects.Header = ProjectsHeader;

export default Projects;
