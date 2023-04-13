import fs from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

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
  content: string;
};

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const postsDirectory = join(process.cwd(), 'works');

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    date: new Intl.DateTimeFormat('en-EN').format(data.date),
    color: data.color,
    thumbnails: data.thumbnails,
    wide: !!data.wide,
    slug: realSlug,
    content,
  };
}

export async function getAllPosts(limit?: number, order: string[] = []) {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = (
    await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  ).sort((post1, post2) => {
    if (order.length > 0)
      return order.indexOf(post1.slug) - order.indexOf(post2.slug);

    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
