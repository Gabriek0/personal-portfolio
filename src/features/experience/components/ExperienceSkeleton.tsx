import { Section, SectionWrapper } from '@/src/components/ui/section';
import { Skeleton } from '@/src/components/ui/skeleton';

export default function ExperienceSkeleton() {
  return (
    <Section className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <Skeleton className='h-6.5 w-1/4 rounded-3xl lg:h-7' />
          <Skeleton className='h-7 w-1/2 my-2 lg:h-8' />

          <div className='md:flex md:items-center md:justify-between'>
            <Skeleton className='h-5 w-2/6 my-4 lg:h-6' />
            <Skeleton className='h-5 w-2/6 my-4 lg:h-6' />
          </div>
        </header>

        <div className='flex flex-col mt-10'>
          <div className='w-fit p-2 flex items-center gap-1 bg-secondary rounded-4xl relative'>
            <Skeleton className='h-13 w-28 rounded-3xl' />
            <Skeleton className='h-13 w-28 rounded-3xl' />
          </div>

          <ul className='flex flex-col gap-8 mt-8 w-full'>
            {Array.from({ length: 3 }, (_, idx) => (
              <li
                key={idx}
                className='w-full flex flex-col gap-8 align-top md:flex-row'
              >
                <div>
                  <Skeleton className='h-18 w-18 md:h-18 md:w-18 lg:h-22 lg:w-22 rounded-full' />
                </div>

                <div className='flex flex-col gap-2 lg:flex-1'>
                  <Skeleton className='h-7 w-2/4 lg:h-8' />
                  <Skeleton className='h-5 w-2/4 lg:h-6' />
                  <Skeleton className='h-5 w-3/4 lg:h-6' />
                  <Skeleton className='h-30 w-full lg:h-30' />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </Section>
  );
}
