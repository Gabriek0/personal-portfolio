import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getAllPosts(limit?: number) {
  const filePath = path.join(process.cwd(), 'src', 'features', 'blog', 'posts');

  const fileNames = fs.readdirSync(filePath);

  const posts = fileNames.map((fileName) => {
    const fileContent = fs.readFileSync(`${filePath}/${fileName}`, { encoding: 'utf-8' });
    const parsed = matter(fileContent);

    parsed.data.slug = fileName.replace('.mdx', '');

    return parsed;
  });

  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(slug: string) {
  const { default: Post } = await import(
    `@/src/features/blog/posts/${slug}.mdx`
  );
  return Post;
}
