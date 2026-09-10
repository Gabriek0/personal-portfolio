'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HeaderNavbarProps } from '../types';
import HeaderLanguageSelect from './HeaderLanguageSelect';
import { useActiveSection } from '../hooks/useActiveSection';

export default function HeaderNavbar({ data }: HeaderNavbarProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const sectionIds = data.navigation
    .map(({ url }) => url.replace('#', ''))
    .filter(Boolean);

  const activeSection = useActiveSection(sectionIds);

  const activeNavId =
    data.navigation.find(
      ({ url }) => url.replace('#', '') === activeSection,
    )?.id ?? null;

  const highlightedId = isHovering ? hoveredId : activeNavId;

  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      className='hidden lg:flex max-h-14 min-w-main items-center justify-center py-4.5 border-border bg-card border-[1px] rounded-2xl'
    >
      <ul
        className='flex gap-1'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoveredId(null);
        }}
      >
        {data.navigation.map(({ id, title, url }) => (
          <li key={id} className='relative'>
            <a
              href={url}
              onMouseEnter={() => setHoveredId(id)}
              className='relative z-10 block cursor-pointer text-icon font-medium text-sm px-3 py-1.5 transition-colors duration-200'
            >
              {title}
            </a>

            <AnimatePresence>
              {highlightedId === id && (
                <motion.span
                  layoutId='navbar-highlight'
                  className='absolute inset-0 rounded-lg bg-border'
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      <hr className='w-[1px] h-5 bg-border mx-6' />

      <HeaderLanguageSelect data={data.languageSelector} />
    </motion.nav>
  );
}
