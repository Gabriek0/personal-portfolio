'use client';

import About from '@/components/sections/About';
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

        {/* 
          <Projects />
          <Experiences />
          <Skills /> 
        */}
      </main>
    </body>
  );
}
