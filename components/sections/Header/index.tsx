import { HeaderProps } from './Header.types';
import HeaderLogo from './HeaderLogo';
import HeaderMenuToggle from './HeaderMenuToggle';
import HeaderNavbar from './HeaderNavbar';
import HeaderThemeSwitcher from './HeaderThemeSwitcher';

function Header({ data }: HeaderProps) {
  return (
    <header className='z-10 w-full mx-auto flex gap-4 items-center justify-between py-6.5 px-5 xl:py-8 xl:px-28 md:sticky md:top-0'>
      <HeaderLogo />
l      <HeaderThemeSwitcher />
      <HeaderMenuToggle data={data} />
    </header>
  );
}

export default Header;
