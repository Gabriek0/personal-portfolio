import PostPage from '@/src/features/blog/components/PostPage';
import {
  getAllPosts,
  getPostBySlug,
} from '@/src/features/blog/server/db/posts';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import { locales } from '@/src/shared/data/locale';
import { notFound } from 'next/navigation';
import React from 'react';
import { getPortfolioData } from '../../page';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts(6);
  const params = locales.flatMap((lang) =>
    posts.map((post) => ({ lang, slug: post.data.slug })),
  );

  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const data = await getPortfolioData(lang);
  const { data: postData, content } = await getPostBySlug(slug);

  if (!data) {
    notFound();
  }

  const { header_section, footer_section } = data;

  return (
    <React.Fragment>
      <Header data={header_section} />
      <PostPage data={postData} content={content} lang={lang} />
      <Footer data={footer_section} />
    </React.Fragment>
  );
}
