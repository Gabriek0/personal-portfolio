'use client';

import { Section, SectionWrapper } from '@/components/ui/Section';
import { ProjectsProps } from './Projects.types';
import ProjectsList from './ProjectsList';
import ProjectsPresentation from './ProjectsPresentation';

function Projects({ children }: ProjectsProps) {
  return (
    <Section className='w-full my-12 mx-auto'>
      <SectionWrapper>{children}</SectionWrapper>
    </Section>
  );
}

Projects.List = ProjectsList;
Projects.Presentation = ProjectsPresentation;

export default Projects;
