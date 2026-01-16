export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiLink {
  id: number;
  link_title: string;
  link_url: string | null;
}

export interface StrapiButton {
  id: number;
  button_text: string;
  button_url: string | null;
  button_value: string | null;
}

export type HeaderLanguageSelector = Array<{
  id: number;
  language_name: string;
  language_code: string;
  language_flag: StrapiImage;
}>;

export type HeaderNavigationBar = Array<{
  id: number;
  link_title: string;
  link_url: string;
}>;

export interface SectionHeader {
  id: number;
  section_badge: string;
  section_title: string;
  section_description: string;
}

export interface HeaderSection {
  id: number;
  header_navigation_bar: HeaderNavigationBar;
  header_language_selector: HeaderLanguageSelector;
}
export interface HeroSection {
  id: number;
  hero_greetings: string;
  hero_name: string;
  hero_role: string;
  hero_description: string;
  hero_role_icon: StrapiImage | null;
  hero_animation: StrapiImage;
  hero_social_media: StrapiLink[];
  hero_primary_button: StrapiButton;
  hero_secondary_button: StrapiButton;
}

export interface AboutSection {
  id: number;
  about_image: StrapiImage;
  about_button: StrapiLink;
  about_header: SectionHeader;
}

export interface Project {
  id: number;
  project_title: string;
  project_description: string;
  project_link: string;
  project_image: StrapiImage;
}

export interface ProjectSection {
  id: number;
  projects_list: Project[];
  projects_header: SectionHeader;
}

export type ExperienceType = 'career' | 'education';

export interface Experience {
  id: number;
  experience_title: string;
  experience_organization: string;
  experience_location: string;
  experience_from: string;
  experience_to: string | null;
  experience_type: ExperienceType;
  experience_description: string;
  experience_image: StrapiImage;
}

export interface ExperienceSection {
  id: number;
  experiences_list: Experience[];
  experiences_button_switchers: StrapiButton[];
  experiences_header: SectionHeader;
}

export interface Skill {
  id: number;
  skill_name: string;
  skill_url: string;
  skill_image: StrapiImage;
}

export interface SkillSection {
  id: number;
  skills_list: Skill[];
  skills_link: StrapiLink[];
  skills_header: SectionHeader;
}

export interface FooterSection {
  id: number;
  footer_copyright: string;
  footer_back_to_top_button: StrapiButton;
}

export interface PageData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  header_section: HeaderSection;
  hero_section: HeroSection;
  about_section: AboutSection;
  project_section: ProjectSection;
  experience_section: ExperienceSection;
  skill_section: SkillSection;
  footer_section: FooterSection;
}

export interface StrapiApiResponse {
  data: PageData;
  meta: {};
}
