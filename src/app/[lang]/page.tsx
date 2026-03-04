import About from '@/src/features/about';
import Experience from '@/src/features/experience';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import Hero from '@/src/features/hero';
import Projects from '@/src/features/projects';
import Skill from '@/src/features/skills';
import { client } from '@/src/lib/strapi/client';
import { query } from '@/src/lib/strapi/query';
import { StrapiApiResponse } from '@/src/types/strapi';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

type GetDataResponse = Promise<StrapiApiResponse['data'] | null>;

async function getPortfolioData(lang: string): GetDataResponse {
  try {
    const response = await client.fetch(`content?${query(lang)}`);

    const { data }: StrapiApiResponse = await response.json();

    return data;
  } catch (error: any) {
    console.log('🚀 ~ getPortfolioData ~ error:', error);
    if (error instanceof Error) {
      console.log('Strapi API Error: ', error.message);
    } else {
      console.error('Strapi API Error: ', error);
    }

    return null;
  }
}

const getCachedPortfolioData = unstable_cache(
  async (lang: string) => getPortfolioData(lang),
  ['portfolio-data'],
  { tags: ['portfolio'] },
);

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const data = await getCachedPortfolioData(lang);

  if (!data) {
    notFound();
  }

  const {
    header_section,
    hero_section,
    about_section,
    project_section,
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
      <Experience data={experience_section} />
      <Skill data={skill_section} />
      <Footer data={footer_section} />
    </main>
  );
}
