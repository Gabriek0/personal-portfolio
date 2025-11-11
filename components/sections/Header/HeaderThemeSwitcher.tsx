'use client';

import { MoonIcon, SunDimIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function HeaderThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className='cursor-pointer fixed z-9999 bottom-6 right-6 h-10 w-10 flex items-center justify-center shrink-0 border-[1px] border-solid bg-surface-subtle border-surface rounded-full lg:h-14 lg:w-14 lg:relative lg:bottom-0 lg:right-0'
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className='dark:text-theme-icon font-bold size-4 lg:size-4.5' />
      ) : (
        <SunDimIcon className='text-theme-icon font-bold size-4 lg-size-4.5' />
      )}
    </button>
  );
}
