import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className='text-2xl font-bold text-foreground mt-10 mb-4 leading-snug'>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className='text-xl font-semibold text-foreground mt-8 mb-3 leading-snug'>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className='text-lg font-semibold text-foreground mt-6 mb-2 leading-snug'>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className='text-base font-semibold text-foreground mt-5 mb-2'>
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className='text-base text-foreground leading-[1.75] mb-5'>{children}</p>
  ),
  ul: ({ children }) => (
    <ul className='list-disc pl-6 mb-5 space-y-2 text-foreground'>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className='list-decimal pl-6 mb-5 space-y-2 text-foreground'>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className='text-base leading-[1.75]'>{children}</li>
  ),
  strong: ({ children }) => (
    <strong className='font-semibold text-foreground'>{children}</strong>
  ),
  em: ({ children }) => <em className='italic'>{children}</em>,
  a: ({ children, href }) => (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-foreground underline underline-offset-2 hover:opacity-60 transition-opacity'
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className='border-l-2 border-border pl-4 my-6 italic text-muted-foreground'>
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className='bg-card border border-border px-1.5 py-0.5 rounded text-sm font-mono text-foreground'>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className='bg-card border border-border p-4 rounded-xl overflow-x-auto my-6 text-sm font-mono'>
      {children}
    </pre>
  ),
  hr: () => <hr className='border-t border-border my-8' />,
};
