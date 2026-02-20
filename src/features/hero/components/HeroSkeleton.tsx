import { Section, SectionWrapper } from '@/src/components/ui/Section';
import { Skeleton } from '@/src/components/ui/Skeleton';
import HeroDivider from './HeroDivider';

export default function HeroSkeleton() {
  return (
    <Section className='items-center h-fit w-full my-8 lg:h-170'>
      <SectionWrapper>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          <Skeleton className='h-7 w-1/4 mb-2' />
          <Skeleton className='h-10 w-full mb-2' />
          <Skeleton className='h-6 w-2/4 mb-4' />
          <Skeleton className='h-12 w-full mb-4' />

          <div className='flex flex-col gap-4 my-6 md:flex-row lg:my-8'>
            <Skeleton className='h-13 max-w-full rounded-3xl md:flex-1' />
            <Skeleton className='h-13 max-w-full rounded-3xl md:flex-1' />
          </div>

          <HeroDivider />

          <footer>
            <ul className='flex items-center justify-center gap-4 md:gap-6 md:justify-normal'>
              {Array.from({ length: 4 }, (_, idx) => (
                <Skeleton key={idx} className='h-5 flex-1' />
              ))}
            </ul>
          </footer>
          <Skeleton />
        </div>
      </SectionWrapper>
    </Section>
  );
}
