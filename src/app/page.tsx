// TODO: next-seo

import Header from './~components/Header';
import Landing from './~components/sections/Landing';

import { getAllPosts } from '@/utils/ssg';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        {/* Landscape */}
        <Header />
        <Landing posts={posts} />
        {/* Works */}

        {/* About me */}

        {/* <Footer /> */}
      </div>
    </>
  );
}
