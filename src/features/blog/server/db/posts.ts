import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { defaultLocale } from '@/src/shared/data/locale';
import { getFormattedLanguage } from '../../lib/utils';
import { PostBySlugResult } from '../../types';

const POST_EXTENSION = '.mdx';

const postsDir = path.join(process.cwd(), 'src', 'features', 'blog', 'posts');

function readPostFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return matter(fileContent);
}

export async function getAllPosts(limit?: number, lang?: string) {
  const language = getFormattedLanguage(lang);
  const folderDir = path.join(postsDir, language);
  const fileNames = fs
    .readdirSync(folderDir)
    .filter((fileName) => fileName.endsWith(POST_EXTENSION));

  const posts = fileNames
    .map((fileName) => {
      const postDir = path.join(folderDir, fileName);

      if (!fs.existsSync(postDir)) return false;

      const parsed = readPostFile(postDir);

      parsed.data.slug = fileName.replace(POST_EXTENSION, '');

      return parsed;
    })
    .filter((item) => !!item);

  posts.sort((a, b) => {
    const da = new Date(String(a.data.date ?? 0)).getTime();
    const db = new Date(String(b.data.date ?? 0)).getTime();
    return db - da;
  });

  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(
  slug: string,
  lang: string,
): Promise<PostBySlugResult | null> {
  const language = getFormattedLanguage(lang);

  const defaultDir = path.join(
    postsDir,
    defaultLocale,
    `${slug}${POST_EXTENSION}`,
  );
  const localizedDir = path.join(
    postsDir,
    language,
    `${slug}${POST_EXTENSION}`,
  );

  const isTranslationAvailable = !!fs.existsSync(localizedDir);

  let dir: string = localizedDir;

  if (!fs.existsSync(localizedDir) && !fs.existsSync(defaultDir)) return null;

  if (!isTranslationAvailable) {
    dir = defaultDir;
  }

  const { data, content } = readPostFile(dir);

  return { data, content, isTranslationAvailable };
}
