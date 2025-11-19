import SkillsList from './SkillList';
import SkillHeader from './SkillHeader';
import { SkillProps } from './Skill.types';
import { Section, SectionWrapper } from '@/components/ui/Section';

function Skill({ children }: SkillProps) {
  return (
    <Section className='max-w-main my-12 mx-auto'>
      <SectionWrapper>{children}</SectionWrapper>
    </Section>
  );
}

Skill.Header = SkillHeader;
Skill.List = SkillsList;

export default Skill;
