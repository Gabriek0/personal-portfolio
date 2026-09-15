import { Locale } from '@/src/lib/i18n';

export type BlogDictionaryKey = 'back' | 'readingTime' | 'notTranslated' | 'title' | 'description' | 'allPosts' | 'tags';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface BlogPostSummary extends BlogPostFrontmatter {
  slug: string;
  locale: Locale;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  requestedLocale: Locale;
  isTranslationAvailable: boolean;
}
