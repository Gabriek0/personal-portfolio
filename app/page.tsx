'use client';

import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skill from '@/components/sections/Skill';

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
          <Hero.Header />
          <Hero.Buttons />
          <Hero.Divider />
          <Hero.SocialMedia />
        </Hero>

        <About>
          <About.Description />
          <About.Image />
        </About>

        <Projects>
          <Projects.Header />
          <Projects.List />
        </Projects>

        <Experience>
          <Experience.Header />
          <Experience.Timeline />
        </Experience>

        <Skill>
          <Skill.Header />
          <Skill.List />
        </Skill>
      </main>
    </body>
  );
}
