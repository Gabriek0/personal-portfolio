import { Button } from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import { CircleArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='mt-0 mb-6 mx-auto min-w-80 max-w-80 md:max-w-155 md:min-w-155 lg:min-w-192 md:mb-16'>
      <Divider />

      <div className='w-full flex justify-between '>
        <Button className='bg-transparent hidden underline text-text-important md:flex md:items-center md:gap-2'>
          Voltar para o topo
          <CircleArrowUp className='h-4.5 w-4.5 ' />
        </Button>

        <span className='text-sm font-normal text-text-important md:text-base'>
          Gabriel Henrique © 2025 Todos direitos reservados
        </span>
      </div>
    </footer>
  );
}
