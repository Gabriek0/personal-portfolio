import { Locale } from '@/src/lib/i18n';

export interface ContentMedia {
  id: number;
  name: string;
  alt: string | null;
  caption: string | null;
  width: number;
  height: number;
  src: string;
}

export interface ContentLink {
  id: number;
  title: string;
  url: string | null;
}

export interface ContentButton {
  id: number;
  text: string;
  url: string | null;
  value: string | null;
}

export interface SectionHeader {
  id: number;
  badge: string;
  title: string;
  description: string;
  link: ContentLink | null;
}

export interface HeaderLanguageOption {
  id: number;
  name: string;
  code: Locale;
  flag: ContentMedia;
}

export interface HeaderNavigationItem {
  id: number;
  title: string;
  url: string;
}

export interface HeaderSection {
  id: number;
  active: boolean;
  navigation: HeaderNavigationItem[];
  languageSelector: HeaderLanguageOption[];
}

export interface HeroSection {
  id: number;
  active: boolean;
  greeting: string;
  name: string;
  role: string;
  description: string;
  roleIcon: ContentMedia | null;
  animation: ContentMedia;
  socialLinks: ContentLink[];
  primaryAction: ContentButton;
  secondaryAction: ContentButton;
}

export interface AboutSection {
  id: number;
  active: boolean;
  image: ContentMedia;
  action: ContentLink;
  header: SectionHeader;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image: ContentMedia;
}

export interface ProjectSection {
  id: number;
  active: boolean;
  items: ProjectItem[];
  header: SectionHeader;
}

export type ExperienceType = 'career' | 'education';

export interface BaseExperienceItem {
  id: number;
  title: string;
  from: string;
  location: string;
  to: string | null;
  organization: string;
  type: ExperienceType;
  description: string;
  image: ContentMedia;
}

export interface CareerExperienceItem extends BaseExperienceItem {
  type: 'career';
  isCurrentWork: boolean;
  currentWorkLabel: string | null;
}

export interface EducationExperienceItem extends BaseExperienceItem {
  type: 'education';
}

export type ExperienceItem = CareerExperienceItem | EducationExperienceItem;

export interface ExperienceSection {
  id: number;
  active: boolean;
  header: SectionHeader;
  switchers: ContentButton[];
  items: ExperienceItem[];
}

export interface SkillItem {
  id: number;
  name: string;
  url: string;
  image: ContentMedia;
}

export interface SkillSection {
  id: number;
  active: boolean;
  items: SkillItem[];
  links: ContentLink[];
  header: SectionHeader;
}

export interface FooterSection {
  id: number;
  active: boolean;
  copyright: string;
  backToTopAction: ContentButton;
}

export interface BlogSection {
  active: boolean;
}

export interface PortfolioContent {
  locale: Locale;
  header: HeaderSection;
  hero: HeroSection;
  about: AboutSection;
  projects: ProjectSection;
  blog: BlogSection;
  experience: ExperienceSection;
  skills: SkillSection;
  footer: FooterSection;
}

export interface PortfolioContentProvider {
  getContent(locale: Locale): Promise<PortfolioContent | null>;
}
