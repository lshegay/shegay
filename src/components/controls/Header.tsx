import type { DivProps } from 'react-html-props';
import cl from 'classnames';

import Container from '../layout/Container';
import Link from 'next/link';

export type Props = DivProps;

const MENU = [
  {
    name: 'Work',
    link: '/work',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Get in touch',
    link: '/touch',
  },
];

export default function Header({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cl(
        `w-full h-[76px] border-b-[1px]
        dark:border-b-neutral-900 border-b-neutral-200
        `,
        className
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <h1 className="font-radwave">
          <Link href="/">SHEGAY</Link>
        </h1>
        <ul className="flex">
          {MENU.map(({ name, link }) => (
            <li key={link} className="mr-5">
              <Link
                className="text-sm font-bold transition-colors
                ease-out-expo dark:text-neutral-500 dark:hover:text-white"
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
