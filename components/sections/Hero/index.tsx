import { HeroProps } from './Hero.types';
import HeroButtons from './HeroButtons';
import HeroDivider from './HeroDivider';
import HeroPresentation from './HeroPresentation';
import HeroSocialMedia from './HeroSocialMedia';

function Hero({ children }: HeroProps) {
  return (
    <section className='flex items-center h-fit w-full my-8 lg:h-170'>
      <div className='my-0 mx-auto max-w-80 md:max-w-155 lg:min-w-192'>
        <div className='flex-col items-center lg:max-w-100 lg:items-start'>
          {children}
        </div>
      </div>
    </section>
  );
}

Hero.Buttons = HeroButtons;
Hero.Divider = HeroDivider;
Hero.SocialMedia = HeroSocialMedia;
Hero.Presentation = HeroPresentation;

export default Hero;
