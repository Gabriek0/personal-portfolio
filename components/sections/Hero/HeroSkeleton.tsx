import { Section, SectionWrapper } from '@/components/ui/Section';
import { Skeleton } from '@/components/ui/Skeleton';

export default function HeroSkeleton() {
  return (
    <Section className='items-center h-fit w-full my-8 lg:h-170'>
      <SectionWrapper>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          <Skeleton className='h-7 w-1/4 mb-2' />
          <Skeleton className='h-10 w-full mb-2' />
          <Skeleton className='h-6 w-2/4 mb-4' />
          <Skeleton className='h-12 w-full mb-4' />

          <div className='flex gap-4 mb-12'>
            <Skeleton className='h-13 flex-1 rounded-3xl' />
            <Skeleton className='h-13 flex-1 rounded-3xl' />
          </div>

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
