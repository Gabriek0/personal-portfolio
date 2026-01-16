import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skill from '@/components/sections/Skill';
import { query } from '@/lib/qs';
import { client } from '@/services/strapi-client';
import { StrapiApiResponse } from '@/types/strapi';
import { notFound } from 'next/navigation';

type GetDataResponse = Promise<StrapiApiResponse['data'] | null>;

const delay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getData(lang: string): GetDataResponse {
  try {
    const response = await client.fetch(`content?${query(lang)}`);
    const { data }: StrapiApiResponse = await response.json();

    await delay(2000);
    return data;
  } catch (error: any) {
    if (error instanceof Error) {
      console.log('Strapi API Error: ', error.message);
    } else {
      console.error('Strapi API Error: ', error);
    }

    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const data = await getData(lang);

  if (!data) {
    notFound();
  }

  return (
    <main className='w-full px-5'>
      <Header data={data.header_section} />
      <Hero data={data.hero_section} />
      <About data={data.about_section} />
      <Projects data={data.project_section} />
      <Experience data={data.experience_section} />
      <Skill data={data.skill_section} />
      <Footer data={data.footer_section} />
    </main>
  );
}
