import About from '@/src/features/about';
import Experience from '@/src/features/experience';
import Footer from '@/src/features/footer';
import Header from '@/src/features/header';
import Hero from '@/src/features/hero';
import Projects from '@/src/features/projects';
import Skill from '@/src/features/skills';
import { fetchStrapiWithRetry } from '@/src/lib/strapi/fetch';
import { query } from '@/src/lib/strapi/query';
import { StrapiApiResponse } from '@/src/types/strapi';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'pt-BR' }];
}

type GetDataResponse = Promise<StrapiApiResponse['data'] | null>;

async function getPortfolioData(lang: string): GetDataResponse {
  try {
    const baseUrl = process.env.STRAPI_API_URL;
    const token = process.env.STRAPI_API_TOKEN;

    if (!baseUrl) throw new Error('STRAPI_API_URL is not defined.');
    if (!token) throw new Error('STRAPI_API_TOKEN is not defined.');

    const input = `${baseUrl}content?${query(lang)}`;

    const init: RequestInit = {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      next: { tags: ['portfolio'] },
    }

    const response = await fetchStrapiWithRetry({ input, init });

    if (response.ok) {
      const { data }: StrapiApiResponse = await response.json();
      return data ?? null;
    } 

    throw new Error(`${response.status} Error: ${response.statusText}`);
  } catch (error) {
    console.error('Error retrieving portfolio content: ', error);
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
