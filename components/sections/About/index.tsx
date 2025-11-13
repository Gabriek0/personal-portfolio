import { AboutProps } from './About.types';
import AboutDescription from './AboutDescription';
import AboutImage from './AboutImage';

function About({ children }: AboutProps) {
  return (
    <section className='flex mt-18 lg:mt-0'>
      <div className='my-0 mx-auto max-w-80 md:max-w-155 lg:min-w-192'>
        <div className='flex flex-col items-center gap-8 md:gap-10 md:flex-row lg:items-start '>
          {children}
        </div>
      </div>
    </section>
  );
}

About.Image = AboutImage;
About.Description = AboutDescription;

export default About;
