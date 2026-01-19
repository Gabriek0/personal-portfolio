'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/Dialog';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { HeaderMenuToggleProps } from './Header.types';
import HeaderLanguageSelect from './HeaderLanguageSelect';
import { DialogTitle } from "@radix-ui/react-dialog";

export default function HeaderMenuToggle({ data }: HeaderMenuToggleProps) {
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

      <Dialog modal open={isMobileMenuOpen} >
        <DialogTitle />
        <DialogOverlay className='fixed inset-0 bg-background/80'/>

        <DialogContent
          showCloseButton={false}
          onInteractOutside={() => setIsMobileMenuOpen(false)}
          className='h-84 w-80 max-h-84 max-w-80 py-6 px-0 bg-background border-[1px] border-surface rounded-2xl'
        >
          <div className='flex flex-col gap-8 items-center'>
            <ul className='flex flex-col gap-4 items-center justify-center '>
              {data.header_navigation_bar.map(({ id, link_title }) => (
                <li key={id}>
                  <a
                    href='#'
                    className='text-theme-icon text-sm font-medium hover:underline'
                  >
                    {link_title}
                  </a>
                </li>
              ))}
            </ul>

            <HeaderLanguageSelect data={data.header_language_selector} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
