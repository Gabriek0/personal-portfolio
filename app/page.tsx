'use client';

import Logo from './components/Logo';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <main>
        <h1>Hello, world!</h1>
        <Logo />

        <ThemeSwitcher />
      </main>
    </body>
  );
}
