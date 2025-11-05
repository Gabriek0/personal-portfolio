import { Button } from '@/ui/Button';
import { Square } from 'lucide-react';

const socialMedia = [
  {
    id: 1,
    label: 'Github',
  },
  {
    id: 2,
    label: 'LinkedIn',
  },
  {
    id: 3,
    label: 'Instagram',
  },
  {
    id: 4,
    label: 'E-mail',
  },
];

function Hero() {
  return (
    <section className='flex items-center h-170 w-full'>
      <div className='min-w-main my-0 mx-auto'>
        <div className='max-w-100 flex-col items-start'>
          <header className='flex-col'>
            <p className='text-text-important font-normal text-xl mb-1'>
              Olá, eu sou
            </p>
            <h1 className='text-text-important font-semibold text-4xl mb-1'>
              Gabriel Henrique 👋
            </h1>
            <h2 className='flex items-center gap-2 text-text-secondary font-medium mb-4'>
              <Square className='h-4.5 w-4.5 text-text-description' /> Full
              Stack Developer
            </h2>
            <p className='text-text-description font-regular mt-4'>
              Criando soluções elegantes para problemas complexos com
              tecnologias modernas.
            </p>
          </header>

          <div className='flex gap-4 mt-8'>
            <Button
              variant='primary'
              className='flex-1 py-3.5 px-5 rounded-3xl'
            >
              Vamos conversar
              <Square className='text-background' />
            </Button>
            <Button
              variant='secondary'
              className='flex-1 py-3.5 px-5 rounded-3xl'
            >
              Baixar currículo
              <Square className='text-text-important' />
            </Button>
          </div>

          <footer className='mt-16'>
            <ul className='flex gap-6'>
              {socialMedia.map((sm) => (
                <li className='flex items-center gap-1' key={sm.id}>
                  <Square className='h-4.5 w-4.5 text-text-description' />

                  <a className='cursor-pointer text-text-description text-sm font-medium'>
                    {sm.label}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Hero;
