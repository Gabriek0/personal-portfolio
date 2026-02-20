import { Section, SectionWrapper } from '@/src/components/ui/Section';
import HeroButtons from './components/HeroButtons';
import HeroDivider from './components/HeroDivider';
import HeroHeader from './components/HeroHeader';
import HeroSocialMedia from './components/HeroSocialMedia';
import { HeroProps } from './types';

function Hero({ data }: HeroProps) {
  const { hero_social_media } = data;

  return (
    <Section id='home' className='items-center h-fit w-full my-8 lg:h-170'>
      <SectionWrapper>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          <HeroHeader data={data} />
          <HeroButtons data={data} />
          <HeroDivider />
          <HeroSocialMedia data={hero_social_media} />
        </div>
      </SectionWrapper>
    </Section>
  );
}

export default Hero;
