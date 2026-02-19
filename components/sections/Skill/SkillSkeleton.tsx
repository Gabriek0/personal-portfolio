import { Section, SectionWrapper } from '@/components/ui/Section';
import { Skeleton } from '@/components/ui/Skeleton';

export default function SkillSkeleton() {
  return (
    <Section className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <header className='flex flex-col'>
          <Skeleton className='h-6.5 w-1/6 mt-0 mb-2 rounded-3xl' />
          <Skeleton className='h-5 w-2/4 mt-0 mb-2 lg:w-2/6' />
          <Skeleton className='h-5 w-4/6 mt-4 mb-8 lg:w-3/6' />
        </header>

        <ul className='w-full flex flex-wrap justify-center gap-3'>
          {Array.from({ length: 12 }).map((_, idx) => (
            <li
              key={idx}
              className='max-h-8.5 min-h-8.5 w-fit flex items-center gap-2 p-2 bg-card border-border border-[1px] rounded-3xl md:max-h-12 md:min-h-12'
            >
              <Skeleton className='h-4.5 w-4.5 rounded-full md:h-6 md:w-6' />
              <Skeleton className={`h-5 w-14`} />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}
