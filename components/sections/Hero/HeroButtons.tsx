'use client';

import { Button } from '@/components/ui/Button';
import { Download, ExternalLink } from 'lucide-react';
import { HeroButtonProps } from './Hero.types';

export default function HeroButtons({ data }: HeroButtonProps) {
  return (
    <div className='flex flex-col gap-4 mt-6 md:flex-row lg:mt-8'>
      <Button
        variant='primary'
        className='max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
      >
        {data.hero_primary_button.button_text}
        <ExternalLink className='size-5' />
      </Button>
      <Button
        variant='secondary'
        className='max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
      >
        {data.hero_secondary_button.button_text}
        <Download className='size-5' />
      </Button>
    </div>
  );
}
