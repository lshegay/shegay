// TODO: next-seo

import Header from './~components/Header';
import Landing from './~components/Landing';

import { getAllPosts } from '@/utils/ssg';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        <Header />
        <Landing posts={posts} />
      </div>
    </>
  );
}
