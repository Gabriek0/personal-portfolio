import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/ui/Select';
import { BR, ES, US } from 'country-flag-icons/react/3x2';

export function Select() {
  return (
    <SelectRoot value='pt-br'>
      <SelectTrigger className='w-fit'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='pt-br'>
          <BR />
          PT/BR
        </SelectItem>
        <SelectItem value='en-us'>
          <US />
          EN/US
        </SelectItem>
        <SelectItem value='en-es'>
          <ES /> EN/ES
        </SelectItem>
      </SelectContent>
    </SelectRoot>
  );
}
