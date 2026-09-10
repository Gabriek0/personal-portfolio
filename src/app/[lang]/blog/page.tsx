import Blog from '@/src/features/blog';
import { getAllPosts, getPostBySlug } from '@/src/features/blog/server/posts';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import { getPortfolioContent } from '@/src/lib/content';
import { isLocale, locales } from '@/src/lib/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return {
    title: `Blog | Gabriel Henrique`,
    description: 'Articles about software development, product building, and learning in public.',
    alternates: {
      canonical: `/${lang}/blog`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const data = await getPortfolioContent(lang);
  const posts = await getAllPosts(lang);
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
