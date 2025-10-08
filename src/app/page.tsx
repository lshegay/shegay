import Header from './~components/Header';
import Landing from './~components/sections/Landing';
import About from './~components/sections/About';
import Works from './~components/sections/Works';

import ScrollContainer from '@/components/ui/ScrollContainer';
import ScrollContainerHorizontal from '@/components/ui/ScrollContainerHorizontal';

import { getAllPosts } from '@/utils/ssg';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />

      <ScrollContainer className="w-full">
        <section className="h-screen w-full bg-black text-white">
          <Landing />
        </section>

        <section>
          <About />
        </section>
      </ScrollContainer>

      {/* <ScrollContainerHorizontal scrollY={2000}>
        <Works posts={posts} />
      </ScrollContainerHorizontal> */}
    </>
  );
}
