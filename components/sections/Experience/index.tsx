import { Section, SectionTitle, SectionWrapper } from '@/components/ui/Section';
import { ExperienceProps } from './Experience.types';
import ExperienceHeader from './ExperienceHeader';
import ExperienceTimeline from './ExperienceTimeline';

function Experience({ children }: ExperienceProps) {
  return (
    <Section className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <SectionTitle>{children}</SectionTitle>
      </SectionWrapper>
    </Section>
  );
}

Experience.Header = ExperienceHeader;
Experience.Timeline = ExperienceTimeline;

export default Experience;
