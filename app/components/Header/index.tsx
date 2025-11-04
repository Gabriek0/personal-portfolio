import Logo from './Logo';
import Navbar from './Navbar';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className='w-full mx-auto py-8 px-28 flex items-center justify-between'>
      <Logo />
      <Navbar />
      <ThemeSwitcher />
    </header>
  );
}
