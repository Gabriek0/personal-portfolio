import {
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/Section';
import { SquareArrowRight } from 'lucide-react';

export default function AboutDescription() {
  return (
    <div className='max-w-120'>
      <SectionBadge>Sobre</SectionBadge>

      <SectionTitle>Em busca de desafios.</SectionTitle>

      <SectionDescription>
        Minha paixão é transformar ideias complexas em realidade digital,
        atuando em todas as frentes do desenvolvimento.
        <br></br>
        <br></br>
        Do front-end ao back-end, meu foco é criar aplicações robustas,
        intuitivas e que realmente façam a diferença.
      </SectionDescription>

      <a className='flex items-center gap-2 underline text-text-important text-sm lg:text-base'>
        Vamos construir algo incrível juntos?
        <span className='no-underline'>
          <SquareArrowRight className='h-4.5 w-4.5' />
        </span>
      </a>
    </div>
  );
}
