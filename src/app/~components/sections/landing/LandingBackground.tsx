'use client';

import { useEffect, useRef } from 'react';

import Default from './Default';

export function LandingBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    let animation = true;

    const ww = window.innerWidth;
    const ctx = canvas.current.getContext('2d');

    canvas.current.width = 1280;
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

  return (
    <div className="absolute top-0 left-0 h-full z-0 w-full overflow-hidden">
      <Default />
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
