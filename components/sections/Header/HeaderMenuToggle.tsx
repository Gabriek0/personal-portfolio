'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { HeaderMenuToggleProps } from './Header.types';
import HeaderLanguageSelect from './HeaderLanguageSelect';
import { useActiveSection } from './useActiveSection';

const sidebarVariants = {
  closed: { x: '100%' },
  open: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const navItemVariants = {
  closed: { x: 30, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20, delay: 0.1 + i * 0.06 },
  }),
};

export default function HeaderMenuToggle({ data }: HeaderMenuToggleProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const sectionIds = useMemo(() => data.header_navigation_bar.map(({ link_url }) => link_url.replace('#', '')).filter(Boolean), [data.header_navigation_bar]);
  const activeSection = useActiveSection(sectionIds);
  const activeNavId = data.header_navigation_bar.find(({ link_url }) => link_url.replace('#', '') === activeSection)?.id ?? null;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <div className='block lg:hidden'>
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
        onClick={toggleMobileMenu}
        className='fixed z-9999 top-7 right-5 cursor-pointer h-10 w-10 flex items-center justify-center border-[1px] border-solid bg-card border-border rounded-full'
      >
        <AnimatePresence mode='wait'>
          <motion.span
            key={isMobileMenuOpen ? 'close' : 'menu'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='flex items-center justify-center'
          >
            {isMobileMenuOpen ? (
              <X className='text-icon font-bold size-4' />
            ) : (
              <Menu className='text-icon font-bold size-4' />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key='overlay'
              variants={overlayVariants}
              initial='closed'
              animate='open'
              exit='exit'
              onClick={() => setIsMobileMenuOpen(false)}
              className='fixed inset-0 z-9998 bg-background/60 backdrop-blur-sm'
            />

            <motion.aside
              key='sidebar'
              variants={sidebarVariants}
              initial='closed'
              animate='open'
              exit='exit'
              className='fixed top-0 right-0 z-9999 h-dvh w-1/2 max-w-72 border-l border-border bg-background px-6 py-20 flex flex-col gap-10'
            >
              <nav>
                <ul className='flex flex-col gap-1'>
                  {data.header_navigation_bar.map(({ id, link_title, link_url }, i) => (
                    <motion.li
                      key={id}
                      custom={i}
                      variants={navItemVariants}
                      initial='closed'
                      animate='open'
                      className='relative'
                    >
                      <a
                        href={link_url}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`relative z-10 block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          activeNavId === id ? 'text-foreground' : 'text-icon hover:text-foreground'
                        }`}
                      >
                        {link_title}
                      </a>
                      <AnimatePresence>
                        {activeNavId === id && (
                          <motion.span
                            layoutId='mobile-nav-highlight'
                            className='absolute inset-0 rounded-lg bg-border/60'
                            transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + data.header_navigation_bar.length * 0.06,
                  },
                }}
              >
                <HeaderLanguageSelect data={data.header_language_selector} />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
