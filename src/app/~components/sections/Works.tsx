'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';

import type { Post } from '@/utils/ssg';
import Image from 'next/image';

export type Props = {
  posts: Omit<Post, 'source'>[];
};

export default function Works(props: Props) {
  const previews = useMemo(() => {
    return props.posts.map((post) => {
      const thumbnail = post.thumbnails[0];

      return (
        <motion.div key={post.slug} className="mr-4">
          <Image
            src={thumbnail}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        </motion.div>
      );
    });
  }, [props.posts]);

  return (
    <section
      className="flex"
      style={{
        width: `calc(${previews.length} * 100%)`,
      }}
    >
      {previews}
    </section>
  );
}
