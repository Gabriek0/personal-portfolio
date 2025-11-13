import { Mail } from 'lucide-react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

const socialMedia = [
  {
    id: 1,
    icon: GithubLogo,
    label: 'Github',
  },
  {
    id: 2,
    icon: LinkedinLogo,
    label: 'LinkedIn',
  },
  {
    id: 3,
    icon: InstagramLogo,
    label: 'Instagram',
  },
  {
    id: 4,
    icon: Mail,
    label: 'E-mail',
  },
];

export default function HeroSocialMedia() {
  return (
    <footer className='mt-16'>
      <ul className='flex items-center justify-center gap-4 md:gap-6 md:justify-normal '>
        {socialMedia.map((sm) => (
          <li className='flex items-center gap-1 hover:underline' key={sm.id}>
            <sm.icon className='size-4.5 text-text-description' />

            <a className='cursor-pointer text-text-description font-medium text-xs md:text-sm'>
              {sm.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
