'use client';

import { LucideProps, MoonIcon, SunDimIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const iconProps: LucideProps = {
    size: 18,
    fontWeight: 'bold',
  };

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className='cursor-pointer h-14 w-14 absolute top-8 right-28 flex items-center justify-center border-[1px] border-solid bg-surface-subtle border-surface rounded-full dark:bg-surface-subtle dark:border-surface'
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon {...iconProps} className='dark:text-theme-icon' />
      ) : (
        <SunDimIcon {...iconProps} className='text-theme-icon' />
      )}
    </button>
  );
}

export default ThemeSwitcher;
