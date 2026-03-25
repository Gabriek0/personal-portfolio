import { BlogSection } from '@/src/shared/types/strapi';
import { blogDict } from "./lib/dictionaries";

export interface BlogProps { data: BlogSection }

export type BlogDictKey = keyof (typeof blogDict)['en'];

export type PostBySlugResult = {
 data: Record<string, unknown>;
 content: string;
 isTranslationAvailable: boolean;
};