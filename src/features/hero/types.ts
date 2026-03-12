import { HeroSection } from '@/src/shared/types/strapi';

export interface HeroProps {
  data: HeroSection;
}

export interface HeroHeaderProps {
  data: HeroSection;
}

export interface HeroButtonProps {
  data: HeroSection;
}

export interface HeroSocialMediaProps {
  data: HeroSection['hero_social_media'];
}
