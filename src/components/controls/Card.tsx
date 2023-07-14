import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import cl from 'classnames';
import { useDebounce } from 'use-debounce';
import type { DivProps } from 'react-html-props';

import Light from '../decorations/Light';
import type { Thumbnail } from '@/utils/ssg';
import { transition } from '@/utils';

type Props = DivProps & {
  title: string;
  description: string;
  link: string;
  images?: Thumbnail[];
  color?: string;
  target?: string;
};

export default function Card({
  className,
  title,
  link,
  description,
  images = [],
  color = '#EA5400',
  target,
}: Props) {
  const card = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [width, setWidth] = useState(337);
  const [lagWidth] = useDebounce(width, 500);

  const { scrollYProgress } = useScroll({
    target: card,
    offset: ['start end', 'start center'],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 50,
  });

  useEffect(() => {
    const listener = () => {
      if (card.current) setWidth(card.current.offsetWidth);
    };
    listener();

    if (typeof window != 'undefined')
      window.addEventListener('resize', listener);

    return () => {
      if (typeof window != 'undefined') {
        window.removeEventListener('resize', listener);
      }
    };
  }, [card]);

  const imgElements = useMemo(() => {
    const contentWidth = lagWidth - 44 * 2 - 2;
    const sum = images.reduce(
      (accumulator, { width }) => accumulator + width,
      0
    );
    const dif =
      images.length > 1 && contentWidth < sum
        ? (sum - contentWidth) / (images.length - 1)
        : 0;

    const margin = contentWidth > sum ? (contentWidth - sum) / 2 : 0;

    let accumulateWidth = 0;

    return images.map((img, index, { length }) => {
      const element = (
        <motion.div
          key={img.src}
          className="absolute bg-white dark:bg-black"
          style={{
            y,
            zIndex: length - index,
            left: margin + accumulateWidth - index * dif,
            bottom: length == 1 ? undefined : 0,
            display:
              index > 0 && images[0].width > contentWidth ? 'none' : 'block',
          }}
          variants={{
            hovered: { scale: 1.05 },
            pressed: { scale: 0.95 },
          }}
          transition={transition}
        >
          <motion.div style={{ opacity: scrollYProgress }}>
            <motion.div
              animate={{ opacity: loaded[img.src] ? 1 : 0 }}
              variants={{ pressed: { opacity: 0.7 } }}
            >
              <Image
                {...img}
                alt={img.alt}
                className="relative z-[1] h-auto rounded-t-lg shadow-xl shadow-black"
                style={{
                  borderBottomLeftRadius: length == 1 ? '0.5rem' : undefined,
                  borderBottomRightRadius: length == 1 ? '0.5rem' : undefined,
                }}
                draggable={false}
                onLoadingComplete={(d) => {
                  setLoaded((v) => ({ ...v, [img.src]: true }));
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      );

      accumulateWidth += img.width;
      return element;
    });
  }, [images, lagWidth, scrollYProgress, y, loaded]);

  return (
    <motion.div
      ref={card}
      className={cl(
        `relative h-[345px] rounded-[20px]
        overflow-hidden border-[1px] border-[#252525] text-left`,
        className
      )}
      variants={{
        hovered: { y: -10 },
        pressed: { y: 0, scale: 0.95 },
      }}
      whileHover="hovered"
      whileTap="pressed"
      transition={transition}
    >
      <Link href={link} scroll={false} target={target}>
        <div
          className="absolute top-0 left-0 z-[1] h-full
          w-full bg-gradient-to-b from-transparent via-transparent to-black opacity-80"
        />
        <div className="relative flex h-full flex-col px-11 pt-7">
          <div className="z-[2] mb-7">
            <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
              {title}
            </h3>
            <p className="dark:text-neutral-400">{description}</p>
          </div>
          <div className="relative z-0 flex h-full w-full">{imgElements}</div>
        </div>
        <div
          className="absolute top-0 left-0 z-[-1] flex h-full
            w-full justify-center overflow-hidden dark:bg-[rgba(30,30,30,0.3)]"
        >
          <Light
            color={color}
            className="mt-[-60px]"
            blur={120}
            opacity={0.4}
            radius={100}
          />
        </div>
      </Link>
    </motion.div>
  );
}
