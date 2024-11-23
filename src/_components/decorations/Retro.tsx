import type { DivProps } from 'react-html-props';
import cl from 'classnames';

import Autotext from './Autotext';
import Retro from './Retro.module.css';

export type Props = DivProps;

export function Grid({ children, className, ...props }: Props) {
  return (
    <>
      <div className={cl(className)}>
        <div className="absolute top-0 left-0 z-[1] mb-24 flex w-full flex-col">
          {new Array(5).fill(0).map((v) => (
            <div key={v}>
              <Autotext text="nextjs react bun framer-motion typescript&nbsp;" />
              <Autotext text="mongodb vuetify postgresql express.js&nbsp;" direction="right" />
              <Autotext text="vite css tailwind nodejs deno&nbsp;" />
              <Autotext text="nuxtjs vue clickhouse golang&nbsp;" direction="right" />
              <Autotext text="k8s cicd daisyui shadcn rest&nbsp;" />
              <Autotext text="graphql baseweb vercel sass&nbsp;" direction="right" />
            </div>
          ))}
        </div>
        <div className={cl(Retro.grid, 'absolute top-0 left-0 z-0 h-full w-full')} />
        {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-black/20 to-black" />
        <div
          className="absolute top-0 left-0 flex h-full
            w-full justify-center overflow-hidden dark:bg-[rgba(97,97,97,0.4)]"
        /> */}
        <div
          className="absolute top-0 left-0 z-[2] h-full w-full
          bg-gradient-to-b from-transparent via-70% via-black/95 to-black"
        />
      </div>
    </>
  );
}
