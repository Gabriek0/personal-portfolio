'use client';

import { StrapiLink } from '@/types/strapi';
import { motion, Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import {
  GithubLogo,
  IconProps,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react';
import { useMemo } from 'react';
import { HeroSocialMediaProps } from './Hero.types';

const logos = [GithubLogo, LinkedinLogo, InstagramLogo, Mail];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function HeroSocialMedia({ data }: HeroSocialMediaProps) {
  const socialMedia: Array<
    StrapiLink & {
      icon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >;
    }
  > = useMemo(() => {
    return data.map((data, idx) => ({
      ...data,
      icon: logos[idx],
    }));
  }, [data]);

  return (
    <footer>
      <motion.ul
        className='flex items-center justify-center gap-4 md:gap-6 md:justify-normal '
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {socialMedia.map(({ id, link_title, link_url, ...props }) => (
          <motion.li
            className='flex items-center gap-1 hover:underline'
            key={id}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <props.icon className='size-4.5 text-text-description' />

            <a
              target='_blank'
              href={link_url ?? '#'}
              className='cursor-pointer text-text-description font-medium text-xs md:text-sm'
            >
              {link_title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </footer>
  );
}
