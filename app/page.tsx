'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';

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

      <Hero>
        <Hero.Presentation />
        <Hero.Buttons />
        <Hero.SocialMedia />
      </Hero>

      {/* <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills /> */}
    </body>
  );
}
