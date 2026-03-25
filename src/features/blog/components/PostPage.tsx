import { calculateReadingTime } from '@/src/features/blog/lib/utils';
import dayjs from '@/src/shared/lib/dayjs';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { t } from '../lib/dictionaries';
import { mdxComponents } from '../lib/mdx-components';

interface PostFrontmatter {
  date?: string;
  title?: string;
  description?: string;
}

interface PostPageProps {
  lang: string;
  content: string;
  data: PostFrontmatter;
  isTranslationAvailable?: boolean;
}

export default function PostPage({
  data,
  lang,
  content,
  isTranslationAvailable = true,
}: PostPageProps) {
  const locale = lang?.toLowerCase();

  const readingTime = calculateReadingTime(content);
  const formattedDate = dayjs(data.date).locale(locale).format('L');

  return (
    <main className='w-full px-5 py-8 mx-auto max-w-80 md:max-w-155 lg:max-w-3xl'>
      <Link
        href={`/${lang}#blog`}
        className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'
      >
        <span className='flex items-center justify-center size-8 rounded-full border border-border group-hover:border-foreground transition-colors'>
          <ArrowLeft className='size-4' />
        </span>
        {t('back', lang)}
      </Link>
      
      {!isTranslationAvailable && (
        <p
          role='status'
          className='mt-6 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950 dark:text-amber-200'
        >
          {t('notTranslated', lang)}
        </p>
      )}

      <header className='text-center mt-8 mb-6'>
        {data.title && (
          <h1 className='text-xl font-bold text-foreground leading-snug md:text-2xl'>
            {data.title}
          </h1>
        )}

        {data.description && (
          <p className='mt-3 text-sm text-muted-foreground leading-relaxed md:text-base'>
            {data.description}
          </p>
        )}

        {(formattedDate || readingTime) && (
          <div className='flex items-center justify-center gap-5 mt-4 text-sm text-muted-foreground'>
            {formattedDate && (
              <span className='flex items-center gap-1.5'>
                <Calendar className='size-4 shrink-0' />
                {formattedDate}
              </span>
            )}

            {readingTime > 0 && (
              <span className='flex items-center gap-1.5'>
                <BookOpen className='size-4 shrink-0' />
                {readingTime} {t('readingTime', lang)}
              </span>
            )}
          </div>
        )}
      </header>

      <div className='w-full aspect-video bg-card rounded-2xl border border-border' />

      <article className='mt-8 post-content'>
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </main>
  );
}
