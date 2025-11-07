import Badge from '@/components/ui/Badge';
import Image from '@/components/ui/Image';
import { Square } from 'lucide-react';

function About() {
  return (
    <section className='max-w-main my-0 mx-auto py-12'>
      <div className='flex items-center justify-start gap-10'>
        <div className='max-w-120'>
          <Badge>Sobre</Badge>

          <h2 className='text-text-important text-2xl font-semibold my-2'>
            Em busca de desafios.
          </h2>

          <p className='text-text-description font-normal my-4'>
            Minha paixão é transformar ideias complexas em realidade digital,
            atuando em todas as frentes do desenvolvimento.
            <br></br>
            <br></br>
            Do front-end ao back-end, meu foco é criar aplicações robustas,
            intuitivas e que realmente façam a diferença.
          </p>

          <a className='flex items-center gap-2 underline text-text-important'>
            Vamos construir algo incrível juntos?
            <span className='no-underline'>
              <Square className='h-4.5 w-4.5' />
            </span>
          </a>
        </div>

        <div>
          <Image variant='circle' className='h-62.5 w-62.5' />
        </div>
      </div>
    </section>
  );
}

export default About;
