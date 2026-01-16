import AboutSkeleton from '@/components/sections/About/AboutSkeleton';
import ExperienceSkeleton from '@/components/sections/Experience/ExperienceSkeleton';
import HeaderSkeleton from '@/components/sections/Header/HeaderSkeleton';
import HeroSkeleton from '@/components/sections/Hero/HeroSkeleton';
import ProjectSkeleton from '@/components/sections/Projects/ProjectSkeleton';
import SkillSkeleton from '@/components/sections/Skill/SkillSkeleton';
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
    </React.Fragment>
  );
}
