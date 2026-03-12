import { Section, SectionWrapper } from '@/src/shared/components/ui/section';
import { Skeleton } from '@/src/shared/components/ui/skeleton';

export default function ProjectSkeleton() {
  return (
    <Section className='w-full my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <Skeleton className='h-6.5 w-1/4 rounded-3xl lg:h-7' />
          <Skeleton className='h-7 w-1/2 my-2 lg:h-8' />
          <Skeleton className='h-5 w-2/6 my-4 lg:h-6' />
        </header>

        <div className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {Array.from({ length: 4 }, (_, idx) => (
            <div key={idx} className='flex flex-col'>
              <Skeleton className='mb-6 h-72 w-80 md:mb-4 md:h-68 md:w-76 lg:h-80 lg:w-93' />
              <Skeleton className='h-6 w-2/4 mb-6' />
              <Skeleton className='h-20 w-full lg:h-24' />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}
