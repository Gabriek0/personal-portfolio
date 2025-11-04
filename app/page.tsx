'use client';

import Header from './components/Header';

export default function Home() {
  return (
    <body className={`bg-background dark:bg-background`}>
      <main>
        <Header />
      </main>
    </body>
  );
}
