import {
  getAllPosts,
  getPostBySlug,
} from '@/src/features/blog/server/db/posts';
import { locales } from '@/src/shared/data/locale';

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
  const { slug } = await params;
  const Post = await getPostBySlug(slug);

  return <Post />;
}
