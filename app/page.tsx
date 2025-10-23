'use client';

import ThemeSwitcher from './components/ThemeSwitcher';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <main>
        <h1>Hello, world!</h1>

        <ThemeSwitcher />
      </main>
    </body>
  );
}
