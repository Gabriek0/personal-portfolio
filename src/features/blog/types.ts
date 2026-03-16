import { blogDict } from "./lib/dictionaries";
import { BlogSection } from '@/src/shared/types/strapi';

export interface BlogProps { data: BlogSection }

export type BlogDictKey = keyof (typeof blogDict)['en'];