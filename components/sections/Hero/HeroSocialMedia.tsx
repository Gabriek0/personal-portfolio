'use client';

import { StrapiLink } from '@/types/strapi';
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
      <ul className='flex items-center justify-center gap-4 md:gap-6 md:justify-normal '>
        {socialMedia.map(({ id, link_title, link_url, ...props }) => (
          <li className='flex items-center gap-1 hover:underline' key={id}>
            <props.icon className='size-4.5 text-text-description' />

            <a
              target='_blank'
              href={link_url ?? '#'}
              className='cursor-pointer text-text-description font-medium text-xs md:text-sm'
            >
              {link_title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
