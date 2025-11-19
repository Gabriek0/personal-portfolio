import { Button } from '@/components/ui/Button';
import Company from '@/public/img/Company.png';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import NextImage from 'next/image';

function ExperienceCard() {
  return (
    <div className='w-full flex flex-col gap-8 align-top md:flex-row'>
      <div className='flex h-fit w-fit shrink-0 relative rounded-full bg-background overflow-hidden border-text-description border-[1px]'>
        <div className='relative h-12 w-12 m-4 md:h-14 md:w-14'>
          <NextImage alt='Company' src={Company} fill={true} />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-text-important font-semibold text-xl md:text-2xl'>
          Empresa 1
        </h2>

        <div className='flex gap-2'>
          <p className='text-text-important font-regular text-sm underline md:text-base'>
            Desenvolvedor de Software
          </p>
          <span className='text-text-description font-light text-base'>|</span>
          <p className='text-text-description font-regular text-sm md:text-base'>
            São Paulo, Brasil
          </p>
        </div>

        <p className='text-text-description font-regular text-sm md:text-base'>
          Out 2023 - Out 2024 • 1 ano
        </p>

        <p className='text-text-important font-regular text-left text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
          ipsum sed leo luctus varius. Nunc nibh elit, fringilla at felis sed,
          iaculis volutpat elit. Nam sodales fringilla ultrices. Duis semper
          convallis finibus. Phasellus turpis tellus, sagittis in mollis sit
          amet, dapibus ac mi. Vivamus in odio quis ipsum lacinia laoreet in ut
          dui. Vestibulum fringilla tristique justo.
        </p>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className='flex flex-col mt-10'>
      <div className='w-fit p-2 flex items-center gap-1 bg-button-secondary rounded-4xl'>
        <Button
          variant={'primary'}
          className='max-w-full flex flex-1 items-center gap-3 py-3.5 px-5 rounded-3xl text-sm md:max-w-80 md:text-base lg:max-w-36'
        >
          <BriefcaseBusiness />
          Carreira
        </Button>

        <Button
          variant={'secondary'}
          className='max-w-full flex flex-1 items-center bg-transparent gap-3 py-3.5 px-5 rounded-3xl text-text-description text-sm md:max-w-80 md:text-base lg:max-w-36'
        >
          <GraduationCap />
          Educação
        </Button>
      </div>

      <ul className='flex flex-col gap-8 mt-8 w-full'>
        <li>
          <ExperienceCard />
        </li>
        <li>
          <ExperienceCard />
        </li>
        <li>
          <ExperienceCard />
        </li>
      </ul>
    </div>
  );
}
