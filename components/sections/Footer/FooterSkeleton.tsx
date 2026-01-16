import Divider from '@/components/ui/Divider';
import { Skeleton } from '@/components/ui/Skeleton';

export default function FooterSkeleton() {
  return (
    <footer className='mt-0 mb-6 mx-auto min-w-80 max-w-80 md:max-w-155 md:min-w-155 lg:min-w-192 md:mb-16'>
      <Divider />

      <div className='w-full flex justify-between '>
        <Skeleton className='h-6 w-28' />
        <Skeleton className='h-6 w-2/6' />
      </div>
    </footer>
  );
}
