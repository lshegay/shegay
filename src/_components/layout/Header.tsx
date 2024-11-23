import { useEffect } from 'react';
import type { DivProps } from 'react-html-props';
import classNames from 'classnames';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cl from 'classnames';

import settings from '@/settings';
import Container from './Container';

export type Props = DivProps;

export default function Header({ children, className, ...props }: Props) {
  const router = useRouter();
  const [isLanding, setIsLanding] = useDebounce(true, 200);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = window.innerHeight;

      setIsLanding(position <= height);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsLanding]);

  return (
    <div
      {...props}
      className={cl(
        `w-full h-[76px] p-4
        `,
        className,
      )}
    >
      <Container
        className={classNames(
          `p-8 flex h-full items-center justify-between
          border border-neutral-400 border-opacity-15 shadow-lg rounded-[20px]
          transition-colors backdrop-blur-sm`,
          [isLanding ? 'bg-neutral-900/10' : 'bg-neutral-900/50'],
        )}
      >
        <Link className="font-radwave transition-opacity duration-75 hover:opacity-50" href="/">
          SHEGAY
        </Link>
        <ul className="flex items-center">
          {settings.headerMenu.map(({ name, link }) => (
            <li key={link} className="mr-2">
              <Link
                className="rounded-lg px-3 p-2 text-sm font-bold
                    transition-colors ease-out bg-neutral-200/5 text-neutral-300
                  hover:text-white hover:bg-neutral-200/10
                    active:bg-transparent active:text-neutral-600"
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
                    transition-colors ease-out text-neutral-500
                    hover:text-white hover:bg-neutral-200/10
                    active:bg-transparent active:text-neutral-600"
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
