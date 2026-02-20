'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MoonIcon, SunDimIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export default function HeaderThemeSwitcher() {
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleThemeSwitch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const isDark = resolvedTheme === 'dark';
      const newTheme = isDark ? 'light' : 'dark';

      const supportsViewTransition = 'startViewTransition' in document;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (!supportsViewTransition || prefersReducedMotion) {
        setTheme(newTheme);
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const style = document.createElement('style');

      if (isDark) {
        style.textContent = `
          ::view-transition-new(root) {
            z-index: 9999;
            animation: theme-reveal 500ms ease-in-out forwards;
          }
          ::view-transition-old(root) {
            z-index: 1;
            animation: none;
          }
          @keyframes theme-reveal {
            from { clip-path: circle(0px at ${x}px ${y}px); }
            to { clip-path: circle(${endRadius}px at ${x}px ${y}px); }
          }
        `;
      } else {
        style.textContent = `
          ::view-transition-old(root) {
            z-index: 9999;
            animation: theme-reveal 500ms ease-in-out forwards;
          }
          ::view-transition-new(root) {
            z-index: 1;
            animation: none;
          }
          @keyframes theme-reveal {
            from { clip-path: circle(${endRadius}px at ${x}px ${y}px); }
            to { clip-path: circle(0px at ${x}px ${y}px); }
          }
        `;
      }

      document.head.appendChild(style);

      const transition = (
        document as Document & {
          startViewTransition: (cb: () => void) => ViewTransition;
        }
      ).startViewTransition(() => {
        flushSync(() => setTheme(newTheme));
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      });

      transition.finished.then(() => style.remove());
    },
    [resolvedTheme, setTheme],
  );

  if (!isClient) return <React.Fragment />;

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      initial={{ y: -20, opacity: 0, filter: 'blur(6px)' }}
      animate={{
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.35 },
      }}
      whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      onClick={handleThemeSwitch}
      className='cursor-pointer fixed z-10 bottom-6 left-6 h-10 w-10 flex items-center justify-center shrink-0 border-[1px] border-solid bg-card border-border rounded-full lg:z-auto lg:h-14 lg:w-14 lg:relative lg:bottom-0 lg:left-0'
    >
      <AnimatePresence mode='wait'>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='flex items-center justify-center'
        >
          {isDark ? (
            <MoonIcon className='dark:text-icon font-bold size-4 lg:size-4.5' />
          ) : (
            <SunDimIcon className='text-icon font-bold size-4 lg:size-6' />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
