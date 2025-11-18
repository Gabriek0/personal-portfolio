import { Section, SectionWrapper } from '@/components/ui/Section';
import { AboutProps } from './About.types';
import AboutDescription from './AboutDescription';
import AboutImage from './AboutImage';

function About({ children }: AboutProps) {
  return (
    <Section className='mt-18 lg:mt-0'>
      <SectionWrapper>
        <div className='flex flex-col items-center gap-8 md:gap-10 md:flex-row lg:items-start'>
          {children}
        </div>
      </SectionWrapper>
    </Section>
  );
}

About.Image = AboutImage;
About.Description = AboutDescription;

export default About;
