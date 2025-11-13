'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/Dialog';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { HeaderMenuToggleProps } from './Header.types';

const options = [
  {
    id: 1,
    option: 'Início',
  },
  {
    id: 2,
    option: 'Sobre',
  },
  {
    id: 3,
    option: 'Portfólio',
  },
  {
    id: 4,
    option: 'Artigos',
  },
  {
    id: 5,
    option: 'Experiência',
  },
  {
    id: 6,
    option: 'Contato',
  },
];

export default function HeaderMenuToggle({ children }: HeaderMenuToggleProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div className='block lg:hidden'>
      <button
        onClick={toggleMobileMenu}
        className='relative z-9999 cursor-pointer h-10 w-10 flex items-center justify-center border-[1px] border-solid bg-surface-subtle border-surface rounded-full'
      >
        {isMobileMenuOpen ? (
          <X className='text-theme-icon font-bold size-4' />
        ) : (
          <Menu className='text-theme-icon font-bold size-4' />
        )}
      </button>

      <Dialog open={isMobileMenuOpen} modal>
        <DialogOverlay className='fixed inset-0 bg-background/80' />

        <DialogContent
          showCloseButton={false}
          className='h-84 w-80 max-h-84 max-w-80 py-6 px-0 bg-background border-[1px] border-surface rounded-2xl'
        >
          <div className='flex flex-col gap-8 items-center'>
            <ul className='flex flex-col gap-4 items-center justify-center '>
              {options.map(({ id, option }) => (
                <li key={id}>
                  <a
                    href='#'
                    className='text-theme-icon text-sm font-medium hover:underline'
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>

            {children}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
