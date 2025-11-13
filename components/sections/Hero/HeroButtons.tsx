import { Button } from '@/components/ui/Button';
import { Download, ExternalLink } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className='flex flex-col gap-4 mt-6 md:flex-row lg:mt-8'>
      <Button
        variant='primary'
        className='max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
      >
        Vamos conversar
        <ExternalLink className='size-5' />
      </Button>
      <Button
        variant='secondary'
        className='max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-50'
      >
        Baixar currículo
        <Download className='size-5' />
      </Button>
    </div>
  );
}
