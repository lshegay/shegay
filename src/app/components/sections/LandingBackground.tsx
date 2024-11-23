'use client';

import { randomInt } from 'es-toolkit';
import classNames from 'classnames';

import Autotext from '@/components/animations/Autotext';

import LandingStyles from './Landing.module.css';
import { useEffect, useMemo, useRef } from 'react';

export function LandingBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    let animation = true;

    const ww = window.innerWidth;
    const ctx = canvas.current.getContext('2d');

    canvas.current.width = ww;
    canvas.current.height = ww * 0.5625;

    // Generate CRT noise
    function snow(ctx: CanvasRenderingContext2D) {
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;
      const d = ctx.createImageData(w, h);
      const b = new Uint32Array(d.data.buffer);
      const len = b.length;

      for (let i = 0; i < len; i++) {
        b[i] = ((255 * Math.random()) | 0) << 24;
      }

      ctx.putImageData(d, 0, 0);
    }

    function animate() {
      if (!animation) return;
      if (!ctx) return;

      snow(ctx);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      animation = false;
    };
  });

  const autotextElements = useMemo(() =>
    new Array(5).fill(0).map((_, index) => {
      const duration = randomInt(60, 80);

      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index}>
          <Autotext text="nextjs react bun framer-motion typescript&nbsp;" duration={duration} />
          <Autotext text="mongodb vuetify postgresql express.js&nbsp;" direction="right" duration={duration} />
          <Autotext text="vite css tailwind nodejs deno&nbsp;" duration={duration} />
          <Autotext text="nuxtjs vue clickhouse golang&nbsp;" direction="right" duration={duration} />
          <Autotext text="k8s cicd daisyui shadcn rest&nbsp;" duration={duration} />
          <Autotext text="graphql baseweb vercel sass&nbsp;" direction="right" duration={duration} />
        </div>
      )
    }),
    []
  );

  return (
    <div className="absolute top-0 left-0 h-full z-0 w-full overflow-hidden">
      <div className="absolute top-0 left-0 z-[1] mb-24 flex w-full flex-col">
        {autotextElements}
      </div>
      <div
        className={classNames(
          LandingStyles.background,
          'absolute top-0 left-0 z-0 h-full w-[150%]',
        )}
      />
      <div
        className="absolute top-0 left-0 z-[2] h-full w-full
          bg-gradient-to-b from-transparent via-90% via-black to-black"
      />
      <div
        className="absolute top-0 left-0 z-[2] h-full w-full
          bg-gradient-to-r from-transparent via-transparent via-80% to-black"
      />
      <div
        className="absolute top-0 left-0 z-[2] h-full w-full
          bg-gradient-to-l from-transparent via-transparent via-80% to-black"
      />
      <canvas ref={canvas} className="absolute top-0 left-0 z-[1] w-full h-full opacity-80" />
    </div>
  );
}
