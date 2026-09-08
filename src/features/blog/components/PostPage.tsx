import { MDXRemote } from 'next-mdx-remote/rsc';
import dayjs from '@/src/lib/dayjs';
import { BlogPost } from '@/src/features/blog/types';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import { calculateReadingTime, slugifyTag } from '@/src/features/blog/lib/utils';
import { t } from '@/src/features/blog/lib/dictionaries';
import { mdxComponents } from '@/src/features/blog/lib/mdx-components';

interface PostPageProps {
  post: BlogPost;
}

export default function PostPage({ post }: PostPageProps) {
  const locale = post.requestedLocale;
  const readingTime = calculateReadingTime(post.content);
  const formattedDate = dayjs(post.date).locale(locale.toLowerCase()).format('L');

  return (
    <main className='w-full px-5 py-8 mx-auto max-w-80 md:max-w-155 lg:max-w-3xl'>
      <Link
        href={`/${locale}/blog`}
        className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group'
      >
        <span className='flex items-center justify-center size-8 rounded-full border border-border group-hover:border-foreground transition-colors'>
          <ArrowLeft className='size-4' />
        </span>
        {t(locale, 'back')}
      </Link>

      {!post.isTranslationAvailable && (
        <p
          role='status'
          className='mt-6 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950 dark:text-amber-200'
        >
          {t(locale, 'notTranslated')}
        </p>
      )}

      <header className='text-center mt-8 mb-6'>
        <h1 className='text-xl font-bold text-foreground leading-snug md:text-2xl'>
          {post.title}
        </h1>

        <p className='mt-3 text-sm text-muted-foreground leading-relaxed md:text-base'>
          {post.description}
        </p>

        <div className='flex flex-wrap items-center justify-center gap-5 mt-4 text-sm text-muted-foreground'>
          <span className='flex items-center gap-1.5'>
            <Calendar className='size-4 shrink-0' />
            {formattedDate}
          </span>
          <span className='flex items-center gap-1.5'>
            <BookOpen className='size-4 shrink-0' />
            {readingTime} {t(locale, 'readingTime')}
          </span>
        </div>

        <ul className='mt-4 flex flex-wrap justify-center gap-2'>
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/${locale}/blog/tags/${slugifyTag(tag)}`}
                className='rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-foreground'
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <div className='w-full aspect-video bg-card rounded-2xl border border-border' />

      <article className='mt-8 post-content'>
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  );
}
