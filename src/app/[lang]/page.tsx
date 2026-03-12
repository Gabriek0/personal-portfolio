import About from '@/src/features/about';
import Blog from '@/src/features/blog';
import { getAllPosts } from '@/src/features/blog/server/db/posts';
import Experience from '@/src/features/experience';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import Hero from '@/src/features/hero';
import Projects from '@/src/features/projects';
import Skill from '@/src/features/skills';
import { query } from '@/src/shared/lib/strapi/query';
import { Posts as IPosts } from '@/src/shared/types/posts';
import { StrapiApiResponse } from '@/src/shared/types/strapi';
import { notFound } from 'next/navigation';

type GetDataResponse = Promise<StrapiApiResponse['data'] | null>;

async function getPortfolioData(lang: string): GetDataResponse {
  try {
    const baseUrl = process.env.STRAPI_API_URL;
    const token = process.env.STRAPI_API_TOKEN;

    if (!baseUrl) {
      throw new Error('STRAPI_API_URL is not defined');
    }

    const url = `${baseUrl}content?${query(lang)}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600, tags: ['portfolio'] },
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const { data }: StrapiApiResponse = await response.json();

    return data ?? null;
  } catch (error) {
    console.error('🚀 ~ getPortfolioData ~ error:', error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const data = await getPortfolioData(lang);
  const posts = JSON.parse(JSON.stringify(await getAllPosts(3))) as IPosts;

  if (!data) {
    notFound();
  }

  const {
    header_section,
    hero_section,
    about_section,
    project_section,
    blog_section,
    experience_section,
    skill_section,
    footer_section,
  } = data;

  return (
    <main className='w-full px-5'>
      <Header data={header_section} />
      <Hero data={hero_section} />
      <About data={about_section} />
      <Projects data={project_section} />
      <Blog data={{ ...blog_section, posts_list: posts }} />
      <Experience data={experience_section} />
      <Skill data={skill_section} />
      <Footer data={footer_section} />
    </main>
  );
}
