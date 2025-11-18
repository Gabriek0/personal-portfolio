'use client';

import Image from '@/components/ui/Image';
import Project1 from '@/public/img/Project1.png';
import Project2 from '@/public/img/Project2.png';
import Project3 from '@/public/img/Project3.png';
import Project4 from '@/public/img/Project4.png';
import { ArrowUpRight } from 'lucide-react';
import { ProjectsCardProps } from './Projects.types';

const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    imageSrc: Project1,
    description: 'Descrição do projeto 1',
  },
  {
    id: 2,
    title: 'Projeto 2',
    imageSrc: Project2,
    description: 'Descrição do projeto 2',
  },
  {
    id: 3,
    title: 'Projeto 3',
    imageSrc: Project3,
    description: 'Descrição do projeto 3',
  },
  {
    id: 4,
    title: 'Projeto 4',
    imageSrc: Project4,
    description: 'Descrição do projeto 4',
  },
];

function ProjectCard({ src, title, description }: ProjectsCardProps) {
  return (
    <div className='flex flex-col'>
      <Image
        src={src}
        fill={true}
        alt={title}
        variant='square'
        className='mb-6 h-72 w-80 md:mb-4 md:h-68 md:w-76 lg:h-80 lg:w-93'
      />

      <h2 className='cursor-pointer flex items-center gap-2 text-text-important font-medium text-2xl hover:underline'>
        {title} <ArrowUpRight className='size-4' />
      </h2>
      <p className='text-text-description font-normal text-sm md:text-base'>
        {description}
      </p>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <div className='flex flex-col gap-6 md:grid md:grid-cols-2'>
      {projects.map(({ id, imageSrc, ...props }) => (
        <ProjectCard key={id} src={imageSrc} {...props} />
      ))}
    </div>
  );
}
