'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HeaderNavbarProps } from './Header.types';
import HeaderLanguageSelect from './HeaderLanguageSelect';

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

export default function HeaderNavbar({ data }: HeaderNavbarProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const sectionIds = data.header_navigation_bar
    .map(({ link_url }) => link_url.replace('#', ''))
    .filter(Boolean);

  const activeSection = useActiveSection(sectionIds);

  const activeNavId =
    data.header_navigation_bar.find(
      ({ link_url }) => link_url.replace('#', '') === activeSection,
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
        {data.header_navigation_bar.map(({ id, link_title, link_url }) => (
          <li key={id} className='relative'>
            <a
              href={link_url}
              onMouseEnter={() => setHoveredId(id)}
              className='relative z-10 block cursor-pointer text-icon font-medium text-sm px-3 py-1.5 transition-colors duration-200'
            >
              {link_title}
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

      <HeaderLanguageSelect data={data.header_language_selector} />
    </motion.nav>
  );
}
