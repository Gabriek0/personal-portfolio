import Blog from '@/src/features/blog';
import {
  getAllTags,
  getPostBySlug,
  getPostsByTag,
} from '@/src/features/blog/server/posts';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import { getPortfolioContent } from '@/src/lib/content';
import { isLocale, locales } from '@/src/lib/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = await getAllTags();
  return locales.flatMap((lang) => tags.map((tag) => ({ lang, tag })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; tag: string }>;
}): Promise<Metadata> {
  const { lang, tag } = await params;

  return {
    title: `Tag: ${tag} | Gabriel Henrique`,
    alternates: {
      canonical: `/${lang}/blog/tags/${tag}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; tag: string }>;
}) {
  const { lang, tag } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const data = await getPortfolioContent(lang);
  const posts = await getPostsByTag(lang, tag);
  const postsWithContent = await Promise.all(
    posts.map(async (post) => {
      const fullPost = await getPostBySlug(post.slug, lang);

      return {
        ...post,
        content: fullPost?.content || '',
      };
    }),
  );

  if (!data) {
    notFound();
  }

  return (
    <main className='w-full px-5'>
      <Header data={data.header} />
      <Blog locale={lang} posts={postsWithContent} />
      <Footer data={data.footer} />
    </main>
  );
}
