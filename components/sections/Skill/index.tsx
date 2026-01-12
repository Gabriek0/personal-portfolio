import { Section, SectionWrapper } from '@/components/ui/Section';
import SkillHeader from './SkillHeader';
import SkillsList from './SkillList';

function Skill() {
  return (
    <Section className='max-w-main my-12 mx-auto'>
      <SectionWrapper>
        <SkillHeader />
        <SkillsList />
      </SectionWrapper>
    </Section>
  );
}

Skill.Header = SkillHeader;
Skill.List = SkillsList;

export default Skill;
