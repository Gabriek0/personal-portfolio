'use client';

import { motion } from 'framer-motion';
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

  return (
    <motion.button
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      onClick={handleThemeSwitch}
      className='cursor-pointer fixed z-9999 bottom-6 right-6 h-10 w-10 flex items-center justify-center shrink-0 border-[1px] border-solid bg-card border-border rounded-full lg:h-14 lg:w-14 lg:relative lg:bottom-0 lg:right-0'
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className='dark:text-icon font-bold size-4 lg:size-4.5' />
      ) : (
        <SunDimIcon className='text-icon font-bold size-4 lg:size-6' />
      )}
    </motion.button>
  );
}
