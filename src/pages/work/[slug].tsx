import { getAllPosts, getPostBySlug, markdownToHtml, Post } from '@/utils/ssg';
import { GetStaticPaths, GetStaticPropsContext } from 'next';

export type Props = { post: Post };

export default function Work({ post }: Props) {}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string;
}>) {
  if (!params) return null;

  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
