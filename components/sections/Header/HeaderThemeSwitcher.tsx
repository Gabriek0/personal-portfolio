'use client';

import { motion } from 'framer-motion';
import { MoonIcon, SunDimIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function HeaderThemeSwitcher() {
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <React.Fragment />;

  return (
    <motion.button
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className='cursor-pointer fixed z-9999 bottom-6 right-6 h-10 w-10 flex items-center justify-center shrink-0 border-[1px] border-solid bg-surface-subtle border-surface rounded-full lg:h-14 lg:w-14 lg:relative lg:bottom-0 lg:right-0'
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className='dark:text-theme-icon font-bold size-4 lg:size-4.5' />
      ) : (
        <SunDimIcon className='text-theme-icon font-bold size-4 lg:size-6' />
      )}
    </motion.button>
  );
}
