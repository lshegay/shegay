import Link from 'next/link';
import { useRouter } from 'next/router';
import type { DivProps } from 'react-html-props';
import cl from 'classnames';

import settings from '@/settings';
import Container from './Container';

export type Props = DivProps;

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
        <ul className="flex items-center">
          {settings.headerMenu.map(({ name, link }) => (
            <li key={link} className="mr-2">
              <Link
                className="rounded-lg p-2 text-sm font-bold
                transition-colors ease-out dark:text-neutral-500
                dark:hover:bg-neutral-800/50 dark:hover:text-white
                dark:active:bg-transparent dark:active:text-neutral-600"
                href={link}
                style={{
                  ...(router.asPath == link ? { color: 'white' } : {}),
                }}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="mr-2" />
          {settings.socials.map(({ icon, link }) => (
            <li key={link} className="mr-2 -ml-2">
              <Link
                target="_blank"
                href={link}
                className="block rounded-lg p-2 text-xl font-bold
                transition-colors ease-out dark:text-neutral-500
                dark:hover:bg-neutral-800/50 dark:hover:text-white
                dark:active:bg-transparent dark:active:text-neutral-600"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
