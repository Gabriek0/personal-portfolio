'use client';

import { motion } from 'framer-motion';
import { HeaderNavbarProps } from './Header.types';
import HeaderLanguageSelect from './HeaderLanguageSelect';

export default function HeaderNavbar({ data }: HeaderNavbarProps) {
  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      className='hidden lg:flex max-h-14 min-w-main items-center justify-center py-4.5 border-surface bg-surface-subtle border-[1px] rounded-2xl'
    >
      <ul className='flex gap-6'>
        {data.header_navigation_bar.map(({ id, link_title }) => (
          <li key={id}>
            <a
              href='#'
              className={`relative cursor-pointer text-theme-icon font-medium text-sm hover:underline`}
            >
              {link_title}
            </a>
          </li>
        ))}
      </ul>

      <hr className='w-[1px] h-5 bg-surface mx-6' />

      <HeaderLanguageSelect data={data.header_language_selector} />
    </motion.nav>
  );
}
