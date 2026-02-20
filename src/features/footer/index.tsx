'use client';

import { Button } from '@/src/components/ui/Button';
import Divider from '@/src/components/ui/Divider';
import { CircleArrowUp } from 'lucide-react';
import { FooterProps } from './types';

export default function Footer({ data }: FooterProps) {
  return (
    <footer className='mt-0 mb-6 mx-auto min-w-80 max-w-80 md:max-w-155 md:min-w-155 lg:min-w-192 md:pt-16 md:mb-16'>
      <Divider />

      <div className='mt-8 w-full flex justify-between '>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          className='bg-transparent hidden underline text-foreground md:flex md:items-center md:gap-2'
        >
          {data.footer_back_to_top_button.button_text}
          <CircleArrowUp className='h-4.5 w-4.5 ' />
        </Button>

        <span className='text-sm font-normal text-foreground md:text-base'>
          {data.footer_copyright}
        </span>
      </div>
    </footer>
  );
}
