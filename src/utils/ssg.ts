import fs from 'node:fs';
import { join } from 'node:path';
import { serialize } from 'next-mdx-remote/serialize';

export type Thumbnail = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

export type Post = {
  title: string;
  description: string;
  date: string;
  color: string;
  thumbnails: Thumbnail[];
  wide: boolean;
  slug: string;
  redirect: string | null;
  cover: string | null;

  source: {
    compiledSource: string;
    scope: Record<string, unknown>;
  };
};

export type MDXParams = {
  title: string;
  description: string;
  date: Date;
  color: string;
  thumbnails: Thumbnail[];
  wide?: boolean;
  redirect?: string;
  cover?: string;
};

const postsDirectory = join(process.cwd(), 'works');

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const mdxSource = await serialize(fileContents, { parseFrontmatter: true });
  const { frontmatter, ...source } = mdxSource;
  const data = mdxSource.frontmatter as MDXParams;

  const serializedData = {
    title: data.title,
    description: data.description,
    date: new Intl.DateTimeFormat('en-EN').format(data.date),
    color: data.color,
    thumbnails: data.thumbnails,
    wide: data.wide ?? false,
    slug: realSlug,
    redirect: data.redirect ?? null,
    cover: data.cover ?? null,
  };

  return { ...serializedData, source };
}

export async function getAllPosts(
  limit?: number,
  order: string[] = [],
): Promise<Omit<Post, 'source'>[]> {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = (
    await Promise.all(
      slugs.map(async (slug) => {
        const { source, ...post } = await getPostBySlug(slug);
        return post;
      }),
    )
  )
    .filter(({ slug }) => !order.length || order.includes(slug))
    .sort((post1, post2) => {
      if (order.length > 0) return order.indexOf(post1.slug) - order.indexOf(post2.slug);

      return new Date(post1.date) < new Date(post2.date) ? -1 : 1;
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
