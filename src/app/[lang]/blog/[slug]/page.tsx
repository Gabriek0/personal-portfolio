import PostPage from '@/src/features/blog/components/PostPage';
import { getAllPostSlugs, getPostBySlug } from '@/src/features/blog/server/posts';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import { getPortfolioContent } from '@/src/lib/content';
import { isLocale, locales } from '@/src/lib/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const post = await getPostBySlug(slug, lang);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Gabriel Henrique`,
    description: post.description,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const data = await getPortfolioContent(lang);
  const post = await getPostBySlug(slug, lang);

  if (!data || !post) {
    notFound();
  }

  return (
    <>
      <Header data={data.header} />
      <PostPage post={post} />
      <Footer data={data.footer} />
    </>
  );
}
