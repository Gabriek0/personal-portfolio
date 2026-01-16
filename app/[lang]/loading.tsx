import AboutSkeleton from '@/components/sections/About/AboutSkeleton';
import HeaderSkeleton from '@/components/sections/Header/HeaderSkeleton';
import HeroSkeleton from '@/components/sections/Hero/HeroSkeleton';
import ProjectSkeleton from '@/components/sections/Projects/ProjectSkeleton';
import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <HeaderSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <ProjectSkeleton />
    </React.Fragment>
  );
}
