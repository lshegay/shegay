import cl from 'classnames';
import { Card } from '../controls';
import type { DivProps } from 'react-html-props';
import type { Post } from '@/utils/ssg';

export type Props = DivProps & { posts: Post[] };

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
          link={`/work/${post.slug}`}
          images={post.thumbnails}
          className={cl({ wide: post.wide })}
        />
      ))}
    </div>
  );
}
