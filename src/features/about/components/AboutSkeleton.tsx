import { Section, SectionWrapper } from '@/src/components/ui/Section';
import { Skeleton } from '@/src/components/ui/Skeleton';

export default function AboutSkeleton() {
  return (
    <Section className='mt-18 lg:mt-0'>
      <SectionWrapper>
        <div className='flex flex-col items-center gap-8 md:gap-10 md:flex-row lg:items-start'>
          <div className='max-w-120 w-full lg:w-3/4'>
            <Skeleton className='h-6.5 w-1/4 rounded-3xl lg:h-7' />
            <Skeleton className='h-7 w-1/2 my-2 lg:h-8' />
            <Skeleton className='h-22 w-full my-4 lg:h-24' />
            <Skeleton className='w-4/4 h-6.5 lg:w-3/4 lg:h-6' />
          </div>

          <div>
            <Skeleton className='h-46.5 w-46.5 lg:h-62.5 lg:w-62.5 rounded-full' />
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
