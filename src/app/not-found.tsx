'use client';

import notFound from '@/public/not-found.png';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/src/components/ui/select';
import HeaderLogo from '@/src/features/header/components/HeaderLogo';
import HeaderThemeSwitcher from '@/src/features/header/components/HeaderThemeSwitcher';
import { motion, Variants } from 'framer-motion';
import { House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

type Lang = 'en' | 'pt-BR' | 'es';

const languages: { code: Lang; label: string; country: string }[] = [
  { code: 'es', label: 'Español', country: 'ES' },
  { code: 'en', label: 'English', country: 'US' },
  { code: 'pt-BR', label: 'Português', country: 'BR' },
];

const translations: Record<Lang, { title: string; description: string; button: string }> = {
  en: {
    title: 'Page not found',
    description: "You've ventured into the void. The page you're looking for has either been moved, deleted, or is hiding in my backlog.",
    button: 'Go to home',
  },
  'pt-BR': {
    title: 'Página não encontrada',
    description:'Você se aventurou no vazio. A página que você está procurando foi movida, deletada ou está escondida no meu backlog.',
    button: 'Ir para o início',
  },
  es: {
    title: 'Página no encontrada',
    description: 'Te adentraste en el vacío. La página que buscas fue movida, eliminada o se está escondiendo en mi backlog.',
    button: 'Ir al inicio',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
};

export default function NotFound() {
  const [lang, setLang] = useState<Lang>('en');

  const currentLang = languages.find((l) => l.code === lang)!;
  const t = translations[lang];

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='z-10 w-full mx-auto flex gap-4 items-center justify-between py-6.5 px-5 xl:py-8 xl:px-28 md:sticky md:top-0'>
        <HeaderLogo />
        <motion.div
          className='flex items-center gap-2'
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 22,
            delay: 0.2,
          }}
        >
          <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
            <SelectTrigger className='w-fit cursor-pointer gap-2 border-border'>
              <span className='inline-flex size-5 shrink-0 overflow-hidden rounded-full'>
                <ReactCountryFlag
                  countryCode={currentLang.country}
                  svg
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </span>
              <span className='text-sm font-medium text-foreground'>
                {currentLang.label}
              </span>
            </SelectTrigger>
            <SelectContent>
              {languages.map(({ code, label, country }) => (
                <SelectItem key={code} value={code} className='cursor-pointer'>
                  <span className='inline-flex size-5 shrink-0 overflow-hidden rounded-full'>
                    <ReactCountryFlag
                      countryCode={country}
                      svg
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
        <HeaderThemeSwitcher />
      </header>

      <motion.main
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-1 flex-col items-center justify-center gap-6 px-5 pb-16 text-center'
      >
        <motion.div variants={itemVariants}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06 }}
          >
            <Image
              priority
              width={320}
              height={280}
              src={notFound}
              alt='Robot Illustration'
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className='text-xl font-bold text-foreground md:text-size-2xl'
        >
          {t.title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='max-w-sm text-sm text-secondary-foreground md:text-size-base'
        >
          {t.description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href='/'>
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className='inline-flex gap-2 items-center cursor-pointer rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background md:text-size-base'
            >
              {t.button}
              <House className='size-5' />
            </motion.span>
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
}
