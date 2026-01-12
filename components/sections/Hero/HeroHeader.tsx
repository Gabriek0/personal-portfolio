'use client';

import { getMediaUrl } from '@/lib/getMediaUrl';
import { Code } from 'phosphor-react';
import { HeroHeaderProps } from './Hero.types';

export default function HeroHeader({ data }: HeroHeaderProps) {
  return (
    <header className='flex-col'>
      <p className='text-text-important font-normal text-sm mb-1 md:text-xl'>
        {data.hero_greetings}
      </p>

      <div className='flex items-center gap-2 mb-1'>
        <h1 className='text-text-important font-semibold text-2xl md:text-4xl'>
          {data.hero_name}
        </h1>

        <picture>
          <source
            type='image/webp'
            srcSet={getMediaUrl(data.hero_animation.url)}
          />
          <img
            alt='👋'
            className='h-8 w-8 lg:h-10 lg:w-10'
            src={getMediaUrl(data.hero_animation.url)}
          />
        </picture>
      </div>

      <h2 className='flex items-center gap-2 text-text-secondary font-medium text-sm  mb-4 md:text-base'>
        <span className='flex justify-center h-4 w-6.5 bg-white text-black rounded-2xl'>
          <Code className='mt-[1px] size-3.5 font-bold text-base' />
        </span>
        {data.hero_role}
      </h2>

      <p className='text-text-description font-regular text-sm mt-4 md:text-base'>
        {data.hero_description}
      </p>
    </header>
  );
}
