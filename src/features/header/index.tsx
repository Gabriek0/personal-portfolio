import HeaderLogo from './components/HeaderLogo';
import HeaderMenuToggle from './components/HeaderMenuToggle';
import HeaderNavbar from './components/HeaderNavbar';
import HeaderThemeSwitcher from './components/HeaderThemeSwitcher';
import { HeaderProps } from './types';

function Header({ data }: HeaderProps) {
  return (
    <header className='z-10 w-full mx-auto flex gap-4 items-center justify-between py-6.5 px-5 xl:py-8 xl:px-28 md:sticky md:top-0'>
      <HeaderLogo />
      <HeaderNavbar data={data} />
      <HeaderThemeSwitcher />
      <HeaderMenuToggle data={data} />
    </header>
  );
}

export default Header;
