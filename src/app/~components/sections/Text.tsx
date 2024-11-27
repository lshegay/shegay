import { useMemo } from 'react';
import { randomInt } from 'es-toolkit';
import classNames from 'classnames';
import Autotext from '@/components/animations/Autotext';
import TextBackgroundStyles from './TextBackground.module.css';

export default function Text() {
  const autotextElements = useMemo(
    () =>
      new Array(5).fill(0).map((_, index) => {
        const duration = randomInt(60, 80);

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index}>
            <Autotext text="nextjs react bun framer-motion typescript&nbsp;" duration={duration} />
            <Autotext
              text="mongodb vuetify postgresql express.js&nbsp;"
              direction="right"
              duration={duration}
            />
            <Autotext text="vite css tailwind nodejs deno&nbsp;" duration={duration} />
            <Autotext
              text="nuxtjs vue clickhouse golang&nbsp;"
              direction="right"
              duration={duration}
            />
            <Autotext text="k8s cicd daisyui shadcn rest&nbsp;" duration={duration} />
            <Autotext
              text="graphql baseweb vercel sass&nbsp;"
              direction="right"
              duration={duration}
            />
          </div>
        );
      }),
    [],
  );

  return (
    <>
      <div className="absolute top-0 left-0 z-[1] mb-24 flex w-[200%] -translate-x-1/2 flex-col -skew-x-6">
        {autotextElements}
      </div>
      <div
        className={classNames(
          TextBackgroundStyles.background,
          'absolute top-0 left-0 z-0 h-full w-[150%]',
        )}
      />
    </>
  );
}
