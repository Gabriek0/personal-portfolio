import {
  HeaderLanguageSelector,
  HeaderSection,
} from '@/src/shared/types/strapi';

export interface HeaderProps {
  data: HeaderSection;
}
export interface HeaderNavbarProps {
  data: HeaderSection;
}
export interface HeaderLanguageSelectProps {
  data: HeaderLanguageSelector;
}

export interface HeaderMenuToggleProps {
  data: HeaderSection;
}
