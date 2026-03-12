import qs from 'qs';

export const query = (lang: string) => {
  return qs.stringify(
    {
      populate: [
        'header_section.header_navigation_bar',
        'header_section.header_language_selector',
        'header_section.header_language_selector.language_flag',
        'hero_section',
        'hero_section.hero_animation',
        'hero_section.hero_role_icon',
        'hero_section.hero_primary_button',
        'hero_section.hero_secondary_button',
        'hero_section.hero_social_media',
        'about_section',
        'about_section.about_header',
        'about_section.about_button',
        'about_section.about_image',
        'project_section.projects_header',
        'project_section.projects_list',
        'project_section.projects_list.project_image',
        'blog_section.blog_header',
        'blog_section.blog_header.experience_link',
        'experience_section.experiences_header',
        'experience_section.experiences_header.experience_link',
        'experience_section.experiences_button_switchers',
        'experience_section.experiences_list',
        'experience_section.experiences_list.experience_image',
        'skill_section.skills_header',
        'skill_section.skills_list',
        'skill_section.skills_list.skill_image',
        'skill_section.skills_link',
        'footer_section',
        'footer_section.footer_back_to_top_button',
      ],
      locale: lang,
      status: 'published',
    },
    {
      encodeValuesOnly: true,
    },
  );
};
