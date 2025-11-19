'use client';

import {
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/Section';

export default function ProjectsHeader() {
  return (
    <header className='flex flex-col'>
      <SectionBadge>Projetos</SectionBadge>
      <SectionTitle> Sim, é o meu portfólio</SectionTitle>
      <SectionDescription>Os meus principais projetos.</SectionDescription>
    </header>
  );
}
