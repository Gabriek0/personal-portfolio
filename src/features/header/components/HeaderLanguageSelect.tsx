'use client';

import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { defaultLocale } from '@/src/lib/i18n';
import { getMediaUrl } from '@/src/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { HeaderLanguageSelectProps } from '../types';

export default function HeaderLanguageSelect({
  data,
}: HeaderLanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const nextPath = (locale: string) => {
    const rest = segments.slice(1);
    return `/${locale}${rest.length ? `/${rest.join('/')}` : ''}`;
  };

  return (
    <SelectRoot
      value={pathname.split('/')[1] || defaultLocale}
      onValueChange={(value) => router.push(nextPath(value))}
    >
      <SelectTrigger className='cursor-pointer w-fit outline-0'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {data.map(({ id, code, name, flag }) => (
          <SelectItem
            key={id}
            value={code}
            className='cursor-pointer hover:bg-border'
          >
            <img
              alt={flag.alt || flag.name}
              src={getMediaUrl(flag.src)}
              className='h-6 w-6 object-fill object-center rounded-full'
            />
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
