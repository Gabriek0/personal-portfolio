'use client';

import { HeaderNavbarProps } from './Header.types';

const options = [
  {
    id: 1,
    option: 'Início',
  },
  {
    id: 2,
    option: 'Sobre',
  },
  {
    id: 3,
    option: 'Portfólio',
  },
  {
    id: 4,
    option: 'Artigos',
  },
  {
    id: 5,
    option: 'Experiência',
  },
  {
    id: 6,
    option: 'Contato',
  },
];

export default function HeaderNavbar({ children }: HeaderNavbarProps) {
  return (
    <nav className='hidden lg:flex max-h-14 min-w-main items-center justify-center py-4.5 border-surface bg-surface-subtle border-[1px] rounded-2xl'>
      <ul className='flex gap-6'>
        {options.map(({ id, option }) => (
          <li key={id}>
            <a
              href='#'
              className={`relative cursor-pointer text-theme-icon font-medium text-sm hover:underline`}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <hr className='w-[1px] h-5 bg-surface mx-6' />

      {children}
    </nav>
  );
}
