'use client';

import { HeaderProps } from './Header.types';
import HeaderLanguageSelect from './HeaderLanguageSelect';
import HeaderLogo from './HeaderLogo';
import HeaderMenuToggle from './HeaderMenuToggle';
import HeaderNavbar from './HeaderNavbar';
import HeaderThemeSwitcher from './HeaderThemeSwitcher';

function Header({ children }: HeaderProps) {
  return (
    <header className='w-full mx-auto flex gap-4 items-center justify-between py-6.5 px-5 xl:py-8 xl:px-28'>
      {children}
    </header>
  );
}

Header.Logo = HeaderLogo;
Header.Navbar = HeaderNavbar;
Header.MenuToggle = HeaderMenuToggle;
Header.ThemeSwitcher = HeaderThemeSwitcher;
Header.LanguageSelect = HeaderLanguageSelect;

export default Header;
