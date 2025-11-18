import { Section, SectionWrapper } from '@/components/ui/Section';
import { HeroProps } from './Hero.types';
import HeroButtons from './HeroButtons';
import HeroDivider from './HeroDivider';
import HeroPresentation from './HeroPresentation';
import HeroSocialMedia from './HeroSocialMedia';

function Hero({ children }: HeroProps) {
  return (
    <Section className='items-center h-fit w-full my-8 lg:h-170'>
      <SectionWrapper>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          {children}
        </div>
      </SectionWrapper>
    </Section>
  );
}

Hero.Buttons = HeroButtons;
Hero.Divider = HeroDivider;
Hero.SocialMedia = HeroSocialMedia;
Hero.Presentation = HeroPresentation;

export default Hero;
