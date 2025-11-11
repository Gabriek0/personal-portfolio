'use client';

import Header from '@/components/sections/Header';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <Header>
        <Header.Logo />

        <Header.Navbar>
          <Header.LanguageSelect />
        </Header.Navbar>

        <Header.ThemeSwitcher />

        <Header.MenuToggle>
          <Header.LanguageSelect />
        </Header.MenuToggle>
      </Header>

      {/* <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills /> */}
    </body>
  );
}
