import { Skeleton } from '@/components/ui/Skeleton';

export default function HeaderSkeleton() {
  return (
    <header className='w-full mx-auto flex gap-4 items-center justify-between py-6.5 px-5 xl:py-8 xl:px-28'>
      <Skeleton className='relative z-9999 h-10 w-10 rounded-full lg:h-14 lg:w-14' />
      <Skeleton className='hidden lg:flex h-14 w-[768px] py-4.5 rounded-2xl' />
      <Skeleton className='fixed bottom-6 right-6 z-9999 h-10 w-10 rounded-full shrink-0 lg:h-14 lg:w-14 lg:relative lg:bottom-0 lg:right-0' />
      <Skeleton className='block lg:hidden h-10 w-10 rounded-full lg:h-14 lg:w-14' />
    </header>
  );
}
