import cl from 'classnames';
import type { DivProps } from 'react-html-props';

import type { Post } from '@/utils/ssg';
import { Card } from '../controls';

export type Props = DivProps & { posts: Omit<Post, 'source'>[] };

export default function CardGrid({ className, posts, ...props }: Props) {
  return (
    <div
      className={cl(
        `grid grid-cols-1 gap-[34px] md:grid-cols-2 lg:grid-cols-3
          [&>.wide]:lg:col-span-2`,
        className
      )}
      {...props}
    >
      {posts.map((post) => (
        <Card
          key={post.slug}
          {...post}
          link={post.redirect ?? `/work/${post.slug}`}
          target={post.redirect && '_blank'}
          images={post.thumbnails}
          className={cl({ wide: post.wide })}
        />
      ))}
    </div>
  );
}
