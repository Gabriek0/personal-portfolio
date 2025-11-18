'use client';

import About from '@/components/sections/About';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

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

      <main className='w-full px-5'>
        <Hero>
          <Hero.Presentation />
          <Hero.Buttons />
          <Hero.Divider />
          <Hero.SocialMedia />
        </Hero>

        <About>
          <About.Description />
          <About.Image />
        </About>

        <Projects>
          <Projects.Presentation />
          <Projects.List />
        </Projects>
      </main>
    </body>
  );
}
