'use client';

import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import { BR, ES, US } from 'country-flag-icons/react/3x2';
import { useState } from 'react';

const options = [
  {
    id: 1,
    icon: BR,
    label: 'PT/BR',
    value: 'pt-br',
  },
  {
    id: 2,
    icon: US,
    label: 'EN/US',
    value: 'en-us',
  },
  {
    id: 3,
    icon: ES,
    label: 'EN/ES',
    value: 'en-es',
  },
];

export default function HeaderLanguageSelect() {
  const [language, setLanguage] = useState<string>('en-us');

  return (
    <SelectRoot onValueChange={(event) => setLanguage(event)} value={language}>
      <SelectTrigger className='cursor-pointer w-fit outline-0'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.id}
            value={option.value}
            className='cursor-pointer hover:bg-surface'
          >
            <div className='h-6 w-6 flex items-center justify-center rounded-full overflow-hidden '>
              <option.icon className='size-9' />
            </div>

            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
