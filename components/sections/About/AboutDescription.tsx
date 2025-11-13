import Badge from '@/components/ui/Badge';
import { SquareArrowRight } from 'lucide-react';

export default function AboutDescription() {
  return (
    <div className='max-w-120'>
      <Badge>Sobre</Badge>

      <h2 className='text-text-important text-xl font-semibold my-2 lg:text-2xl '>
        Em busca de desafios.
      </h2>

      <p className='text-text-description text-sm font-normal my-4 lg:text-base'>
        Minha paixão é transformar ideias complexas em realidade digital,
        atuando em todas as frentes do desenvolvimento.
        <br></br>
        <br></br>
        Do front-end ao back-end, meu foco é criar aplicações robustas,
        intuitivas e que realmente façam a diferença.
      </p>

      <a className='flex items-center gap-2 underline text-text-important text-sm lg:text-base'>
        Vamos construir algo incrível juntos?
        <span className='no-underline'>
          <SquareArrowRight className='h-4.5 w-4.5' />
        </span>
      </a>
    </div>
  );
}
