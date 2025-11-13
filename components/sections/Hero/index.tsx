import { HeroProps } from './Hero.types';
import HeroButtons from './HeroButtons';
import HeroDivider from './HeroDivider';
import HeroPresentation from './HeroPresentation';
import HeroSocialMedia from './HeroSocialMedia';

function Hero({ children }: HeroProps) {
  return (
    <section className='flex items-center h-fit w-full my-8 px-5 lg:h-170'>
      <div className='min-w-[90%] my-0 mx-auto lg:min-w-main'>
        <div className='max-w-100 flex-col items-center lg:items-start'>
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
