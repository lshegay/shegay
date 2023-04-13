import Link from 'next/link';
import { useRouter } from 'next/router';
import type { DivProps } from 'react-html-props';
import cl from 'classnames';
import Container from './Container';

export type Props = DivProps;

export const MENU = [
  {
    name: 'Work',
    link: '/work',
  },
  {
    name: 'Get in touch',
    link: '/touch',
  },
];

export default function Header({ children, className, ...props }: Props) {
  const router = useRouter();

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
        <Link
          className="font-radwave transition-opacity duration-75 hover:opacity-50"
          href="/"
        >
          SHEGAY
        </Link>
        <ul className="flex">
          {MENU.map(({ name, link }) => (
            <li key={link} className="mr-2">
              <Link
                className="rounded-lg p-2 text-sm font-bold
                transition-colors ease-out dark:text-neutral-500
                dark:hover:bg-neutral-800 dark:hover:text-white
                dark:active:bg-black dark:active:text-neutral-300"
                href={link}
                style={{
                  ...(router.asPath == link ? { color: 'white' } : {}),
                }}
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
