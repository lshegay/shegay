import { motion } from 'framer-motion';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import cl from 'classnames';
import { useFloat } from '@/utils';

export type Props = ImageProps & { align: 'left' | 'center' | 'right' };

export default function HoverImage({
  alt = '',
  src = '',
  align = 'left',
  className,
  style,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const image = useFloat<HTMLDivElement>(0);

  return (
    <motion.div
      className={cl('mb-20 flex', className)}
      style={{
        justifyContent: align,
        y: image.y,
        opacity: image.opacity,
        ...style,
      }}
      ref={image.anchor}
    >
      <div className="not-prose relative">
        <Image
          {...props}
          alt={alt}
          src={src}
          className="relative z-[1] rounded-md"
          onLoadingComplete={() => {
            setLoaded(true);
          }}
        />
        {loaded && (
          <div
            className="absolute top-0 left-0 z-0 h-full w-full
          animate-pulse rounded-md border border-neutral-700 bg-[#2a1f2c]"
          />
        )}
      </div>
    </motion.div>
  );
}
