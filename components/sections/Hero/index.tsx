import { Section, SectionWrapper } from '@/components/ui/Section';
import { HeroProps } from './Hero.types';
import HeroButtons from './HeroButtons';
import HeroDivider from './HeroDivider';
import HeroHeader from './HeroHeader';
import HeroSocialMedia from './HeroSocialMedia';

function Hero({ data }: HeroProps) {
  return (
    <Section className='items-center h-fit w-full my-8 lg:h-170'>
      <SectionWrapper>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          <HeroHeader data={data} />
          <HeroButtons data={data} />
          <HeroDivider />
          <HeroSocialMedia data={data.hero_social_media} />
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default Hero;
