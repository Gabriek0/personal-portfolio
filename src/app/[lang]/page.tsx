import About from '@/src/features/about';
import Blog from '@/src/features/blog';
import Experience from '@/src/features/experience';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import Hero from '@/src/features/hero';
import Projects from '@/src/features/projects';
import Skill from '@/src/features/skills';
import { getAllPosts, getPostBySlug } from '@/src/features/blog/server/posts';
import { getPortfolioContent } from '@/src/lib/content';
import { isLocale, locales } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
  const latestPosts = await getAllPosts(lang, 3);
  const latestPostsWithContent = await Promise.all(
    latestPosts.map(async (post) => {
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
      <Hero data={data.hero} />
      <About data={data.about} />
      <Projects data={data.projects} />
      <Blog locale={lang} posts={latestPostsWithContent} />
      <Experience data={data.experience} />
      <Skill data={data.skills} />
      <Footer data={data.footer} />
    </main>
  );
}
