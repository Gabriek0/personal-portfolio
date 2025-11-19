import {
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/Section';

export default function SkillHeader() {
  return (
    <header className='flex flex-col'>
      <SectionBadge className='mt-0 mb-2'>Habilidades</SectionBadge>
      <SectionTitle className='mt-0 mb-2'>
        Minhas principais skills
      </SectionTitle>
      <SectionDescription className='mt-0 mb-8'>
        Conheça um pouco mais da minha jornada.
      </SectionDescription>
    </header>
  );
}
