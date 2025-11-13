import { Code } from 'phosphor-react';

export default function HeroPresentation() {
  return (
    <header className='flex-col'>
      <p className='text-text-important font-normal text-sm mb-1 md:text-xl'>
        Olá, eu sou
      </p>

      <div className='flex items-center gap-2 mb-1'>
        <h1 className='text-text-important font-semibold text-2xl md:text-4xl'>
          Gabriel Henrique
        </h1>

        <picture>
          <source
            type='image/webp'
            srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp'
          />
          <img
            alt='👋'
            className='h-8 w-8 lg:h-10 lg:w-10'
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif'
          />
        </picture>
      </div>

      <h2 className='flex items-center gap-2 text-text-secondary font-medium text-sm  mb-4 md:text-base'>
        <span className='flex justify-center h-4 w-6.5 bg-white text-black rounded-2xl'>
          <Code className='mt-[1px] size-3.5 font-bold text-base' />
        </span>
        Full Stack Developer
      </h2>

      <p className='text-text-description font-regular text-sm mt-4 md:text-base'>
        Criando soluções elegantes para problemas complexos com tecnologias
        modernas.
      </p>
    </header>
  );
}
