import {
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/Section';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function ExperienceHeader() {
  return (
    <div className='flex flex-col'>
      <SectionBadge>Experiência</SectionBadge>
      <SectionTitle className='mb-2'>Minha Jornada.</SectionTitle>

      <div className='md:flex md:items-center md:justify-between'>
        <SectionDescription className='mt-2 mb-4 md:4'>
          Conheça um pouco mais da minha jornada
        </SectionDescription>

        <a className='cursor-pointer flex items-center gap-2 text-base font-medium text-text-important underline'>
          Acessar meu LinkedIn <SquareArrowOutUpRight className='size-4' />
        </a>
      </div>
    </div>
  );
}
