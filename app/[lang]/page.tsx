import Header from '@/components/sections/Header';
import { query } from '@/lib/qs';
import { client } from '@/services/strapi-client';
import { StrapiApiResponse } from '@/types/strapi';
import { notFound } from 'next/navigation';
import React from 'react';

type GetDataResponse = Promise<StrapiApiResponse['data'] | null>;

async function getData(lang: string): GetDataResponse {
  try {
    const response = await client.fetch(`content?${query(lang)}`);
    const { data }: StrapiApiResponse = await response.json();

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
    <React.Fragment>
      <Header data={data?.header_section} />

      {/* <main className='w-full px-5'>
        <Hero>
          <Hero.Header />
          <Hero.Buttons />
          <Hero.Divider />
          <Hero.SocialMedia />
        </Hero>

        <About>
          <About.Description />
          <About.Image />
        </About>

        <Projects>
          <Projects.Header />
          <Projects.List />
        </Projects>

        <Experience>
          <Experience.Header />
          <Experience.Timeline />
        </Experience>

        <Skill>
          <Skill.Header />
          <Skill.List />
        </Skill>

        <Footer />
      </main> */}
    </React.Fragment>
  );
}
