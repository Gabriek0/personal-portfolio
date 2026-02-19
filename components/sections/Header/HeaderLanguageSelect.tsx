'use client';

import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import { getMediaUrl } from '@/lib/getMediaUrl';
import { usePathname, useRouter } from 'next/navigation';
import { HeaderLanguageSelectProps } from './Header.types';

export default function HeaderLanguageSelect({
  data,
}: HeaderLanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SelectRoot
      value={pathname.replace('/', '')}
      onValueChange={(value) => router.push('/' + value)}
    >
      <SelectTrigger className='cursor-pointer w-fit outline-0'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {data.map(({ id, language_code, language_name, language_flag }) => (
          <SelectItem
            key={id}
            value={language_code}
            className='cursor-pointer hover:bg-border'
          >
            <img
              alt={language_flag.name}
              src={getMediaUrl(language_flag.url)}
              className='h-6 w-6 object-fill object-center rounded-full'
            />
            {language_name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
