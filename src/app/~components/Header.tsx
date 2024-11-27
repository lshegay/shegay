'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import type { DivProps } from 'react-html-props';
import classNames from 'classnames';
import { useDebounce } from 'use-debounce';

import settings from '@/settings';
import Container from './Container';
import Button from '@/components/ui/Button';

export type Props = DivProps;

export default function Header({ children, className, ...props }: Props) {
  const pathname = usePathname();
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
    <div {...props} className={classNames('fixed z-10 w-full h-[76px] p-4', className)}>
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
        <div className="flex">
          {/* <ul className="flex items-center mr-2">
            {settings.headerMenu.map(({ name, link }) => (
              <li key={link} className="mr-2">
                <Button
                  className={classNames({
                    'text-white': pathname == link,
                  })}
                  href={link}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul> */}
          <ul className="flex items-center">
            {settings.socials.map(({ icon, link }) => (
              <li key={link}>
                <Button href={link} target="_blank" rel="noreferrer" variant="text" icon>
                  {icon}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
