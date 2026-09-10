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

  if (!data) {
    notFound();
  }

  const latestPostsWithContent = data.blog.active
    ? await Promise.all(
        (await getAllPosts(lang, 3)).map(async (post) => {
          const fullPost = await getPostBySlug(post.slug, lang);

          return {
            ...post,
            content: fullPost?.content || '',
          };
        }),
      )
    : [];

  return (
    <main className='w-full px-5'>
      {data.header.active && <Header data={data.header} />}
      {data.hero.active && <Hero data={data.hero} />}
      {data.about.active && <About data={data.about} />}
      {data.projects.active && <Projects data={data.projects} />}
      {data.blog.active && <Blog locale={lang} posts={latestPostsWithContent} />}
      {data.experience.active && <Experience data={data.experience} />}
      {data.skills.active && <Skill data={data.skills} />}
      {data.footer.active && <Footer data={data.footer} />}
    </main>
  );
}
