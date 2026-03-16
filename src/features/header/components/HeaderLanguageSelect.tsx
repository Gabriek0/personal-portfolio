'use client';

import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/src/shared/components/ui/select';

import { getMediaUrl } from '@/src/shared/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { HeaderLanguageSelectProps } from '../types';

export default function HeaderLanguageSelect({
  data,
}: HeaderLanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const selectedLanguage = useMemo(() => {
    const [lang] = pathname.split('/').filter(Boolean);

    return lang;
  }, [pathname, router]);

  const onValueChange = useCallback((value: string) => {
    const [, ...paths] = pathname.split('/').filter(Boolean);
    router.push(`/${value}/${paths.join('/')}`);
  }, [router]);

  return (
    <SelectRoot value={selectedLanguage} onValueChange={onValueChange}>
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
