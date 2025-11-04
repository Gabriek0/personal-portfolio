'use client';

import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <Header />
      <Hero />
    </body>
  );
}
