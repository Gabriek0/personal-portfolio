import AboutSkeleton from '@/src/features/about/components/AboutSkeleton';
import ExperienceSkeleton from '@/src/features/experience/components/ExperienceSkeleton';
import FooterSkeleton from '@/src/features/footer/components/FooterSkeleton';
import HeaderSkeleton from '@/src/features/header/components/HeaderSkeleton';
import HeroSkeleton from '@/src/features/hero/components/HeroSkeleton';
import ProjectSkeleton from '@/src/features/projects/components/ProjectSkeleton';
import SkillSkeleton from '@/src/features/skills/components/SkillSkeleton';
import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <HeaderSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <ProjectSkeleton />
      <ExperienceSkeleton />
      <SkillSkeleton />
      <FooterSkeleton />
    </React.Fragment>
  );
}
