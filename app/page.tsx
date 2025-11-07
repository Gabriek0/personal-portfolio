'use client';

import About from '@/components/sections/About';
import Experiences from '@/components/sections/Experiences';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
    </body>
  );
}
