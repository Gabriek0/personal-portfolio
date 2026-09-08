import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { defaultLocale, getPostDirectory, Locale, locales } from '@/src/lib/i18n';
import { slugifyTag } from '@/src/features/blog/lib/utils';
import { BlogPost, BlogPostFrontmatter, BlogPostSummary } from '@/src/features/blog/types';

const postsRoot = path.join(process.cwd(), 'src', 'features', 'blog', 'posts');
const extension = '.mdx';

const fallbackPostMetadata: Record<
  string,
  Record<Locale, { tags: string[] }>
> = {
  'building-a-modern-portfolio': {
    en: { tags: ['Next.js', 'MDX', 'Portfolio'] },
    es: { tags: ['Next.js', 'MDX', 'Portafolio'] },
    'pt-BR': { tags: ['Next.js', 'MDX', 'Portfolio'] },
  },
  'learning-by-doing': {
    en: { tags: ['Learning', 'Practice', 'Career'] },
    es: { tags: ['Aprendizaje', 'Practica', 'Carrera'] },
    'pt-BR': { tags: ['Aprendizado', 'Pratica', 'Carreira'] },
  },
  'thoughts-on-web-development': {
    en: { tags: ['Web Development', 'Tooling', 'Performance'] },
    es: { tags: ['Desarrollo Web', 'Herramientas', 'Rendimiento'] },
    'pt-BR': { tags: ['Desenvolvimento Web', 'Ferramentas', 'Performance'] },
  },
};

function getLocaleDirectory(locale: Locale) {
  return path.join(postsRoot, getPostDirectory(locale));
}

function parseFrontmatter(
  source: string,
  locale: Locale,
  slug: string,
): { frontmatter: BlogPostSummary; content: string } {
  const parsed = matter(source);
  const data = parsed.data as Partial<BlogPostFrontmatter>;
  const fallback = fallbackPostMetadata[slug]?.[locale];

  return {
    frontmatter: {
      slug,
      locale,
      title: data.title ?? slug,
      description: data.description ?? '',
      date: data.date ?? new Date(0).toISOString(),
      tags: Array.isArray(data.tags) && data.tags.length ? data.tags : fallback?.tags ?? [],
      published: data.published ?? true,
    },
    content: parsed.content,
  };
}

function sortPosts(posts: BlogPostSummary[]) {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllPosts(locale: Locale, limit?: number) {
  const folder = getLocaleDirectory(locale);
  const files = await fs.readdir(folder);

  const posts = await Promise.all(
    files
      .filter((fileName) => fileName.endsWith(extension))
      .map(async (fileName) => {
        const source = await fs.readFile(path.join(folder, fileName), 'utf8');
        return parseFrontmatter(
          source,
          locale,
          fileName.replace(extension, ''),
        ).frontmatter;
      }),
  );

  const publishedPosts = sortPosts(posts).filter((post) => post.published);
  return typeof limit === 'number' ? publishedPosts.slice(0, limit) : publishedPosts;
}

export async function getPostBySlug(
  slug: string,
  locale: Locale,
): Promise<BlogPost | null> {
  const requestedPath = path.join(getLocaleDirectory(locale), `${slug}${extension}`);
  const defaultPath = path.join(
    getLocaleDirectory(defaultLocale),
    `${slug}${extension}`,
  );

  let filePath = requestedPath;
  let resolvedLocale = locale;
  let isTranslationAvailable = true;

  try {
    await fs.access(requestedPath);
  } catch {
    isTranslationAvailable = false;
    resolvedLocale = defaultLocale;
    filePath = defaultPath;
  }

  try {
    const source = await fs.readFile(filePath, 'utf8');
    const parsed = parseFrontmatter(source, resolvedLocale, slug);

    if (!parsed.frontmatter.published) {
      return null;
    }

    return {
      ...parsed.frontmatter,
      content: parsed.content,
      requestedLocale: locale,
      isTranslationAvailable,
    };
  } catch {
    return null;
  }
}

export async function getAllPostSlugs() {
  const sets = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getAllPosts(locale);
      return posts.map((post) => post.slug);
    }),
  );

  return Array.from(new Set(sets.flat()));
}

export async function getPostsByTag(locale: Locale, tag: string) {
  const posts = await getAllPosts(locale);
  return posts.filter((post) =>
    post.tags.some((postTag) => slugifyTag(postTag) === tag),
  );
}

export async function getAllTags() {
  const postGroups = await Promise.all(locales.map((locale) => getAllPosts(locale)));
  const tags = postGroups
    .flat()
    .flatMap((post) => post.tags.map((tag) => slugifyTag(tag)));

  return Array.from(new Set(tags));
}
