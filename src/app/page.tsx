// TODO: next-seo

import Header from './components/Header';

import { getAllPosts } from '@/utils/ssg';

import MyPhoto from '@public/me2.jpg';
import Landing from './components/sections/Landing';

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

