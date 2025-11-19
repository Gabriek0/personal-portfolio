import Tech from '@/public/img/Company.png';
import NextImage from 'next/image';

function SkillCard() {
  return (
    <li className='cursor-pointer max-h-8.5 min-h-8.5 w-fit flex items-center gap-2 p-2 bg-surface-subtle border-surface border-[1px] rounded-3xl md:max-h-12 md:min-h-12'>
      <div className='relative h-4.5 w-4.5 rounded-full overflow-hidden md:h-6 md:w-6'>
        <NextImage src={Tech} fill={true} alt='Technology' />
      </div>

      <span className='text-text-secondary text-xs font-medium md:text-sm'>
        Node.js
      </span>
    </li>
  );
}

export default function SkillsList() {
  return (
    <ul className='w-full flex flex-wrap justify-center gap-3'>
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </ul>
  );
}
