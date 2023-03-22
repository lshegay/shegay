import Head from 'next/head';
import Image from 'next/image';

import Light from '@/components/decorations/Light';
import Header from '@/components/controls/Header';
import Container from '@/components/layout/Container';
import { Grid } from '@/components/decorations/Retro';
import { Text } from '@/components/decorations/Typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="h-screen w-screen dark:bg-black dark:text-white">
        <div className="h-full">
          <div className="relative z-10 flex h-full flex-col">
            <Header />
            <Container
              className="relative flex h-full flex-col items-center
              justify-center text-center"
            >
              <h2 className="font-radwave text-4xl">
                <span
                  className="bg-gradient-to-b from-[#6AFF79] to-[#00C2FF] 
                  bg-clip-text text-transparent"
                >
                  Hey!
                </span>{' '}
                <span
                  className="bg-gradient-to-b from-[#FF0000] to-[#FF00C7] 
                  bg-clip-text text-transparent"
                >
                  this is a space of
                </span>
              </h2>
              <h1
                className="mb-2 bg-gradient-to-b from-[#FF75D8] via-[#FF75D8] to-[#FF00B8]
              bg-clip-text font-roadrage text-7xl text-transparent"
              >
                Developer with taste
              </h1>
              <Text className="w-[60%] text-xl">
                I’m Leonid Shegay and I’m versatile software engineer and
                full-stack web developer focused on making beautiful and
                functional apps
              </Text>
              <div className="absolute bottom-11 flex flex-col justify-center">
                <span className="mb-5">Scroll Down</span>
                <div className="flex w-full flex-col items-center">
                  <div className="h-[10px] w-[10px] rounded-full border-[1px] border-white" />
                  <div className="-mt-1 h-[6px] w-[6px] animate-bounce rounded-full bg-white" />
                </div>
              </div>
            </Container>
            <div
              className="relative flex h-[111px]
                w-full overflow-hidden border-y-[1px] border-y-neutral-200
                bg-black dark:border-y-neutral-900"
            >
              <Container className="flex w-full items-center justify-between">
                <Text className="font-radwave text-3xl">CRT NEWS</Text>
                <Text className="uppercase">
                  Currently based in Russia • Working in Rhonda Software •
                  Making web applications
                </Text>
              </Container>
              <Light
                color="#632CFF"
                className="absolute right-0 -top-1/3"
                opacity={0.1}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Grid className="absolute top-0 left-0 h-full w-full" />
            <Container className="relative h-full">
              <Light className="absolute left-0 top-[10%]" />
              <Light color="#FF2121" className="absolute right-0 top-1/3" />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
