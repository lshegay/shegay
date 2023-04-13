import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import cl from 'classnames';
import { FaBehance, FaGithub, FaVk, FaArrowRight } from 'react-icons/fa';
import type { DivProps } from 'react-html-props';

import { staggerProps } from '@/utils';
import Container from './Container';
import { Light } from '../decorations';
import { MENU } from './Header';

const FOOTER_MENU = [{ link: '/', name: 'Home' }, ...MENU];
const SOCIALS = [
  { link: 'https://github.com/lshegay', icon: <FaGithub /> },
  { link: 'https://www.behance.net/shegay', icon: <FaBehance /> },
  { link: 'https://vk.com/korewashegay', icon: <FaVk /> },
];

export type Props = DivProps;

export default function Footer({ className, ...props }: Props) {
  const router = useRouter();
  return (
    <div
      className={cl(
        `relative z-0 w-full border-b-[1px] py-24
      dark:border-y-neutral-900 dark:bg-black dark:text-white`,
        className
      )}
      {...props}
    >
      <Container
        {...staggerProps.parent}
        className="relative z-[1] flex flex-col justify-between md:flex-row"
      >
        <div className="mb-20 md:mb-0">
          <motion.h1
            {...staggerProps.children}
            className="mb-7 bg-gradient-to-b from-[#CD62FF] to-[#FF50B9] bg-clip-text
        font-radwave text-4xl text-transparent md:text-6xl"
          >
            Lets
            <br />
            Work
            <br />
            Together
          </motion.h1>
          <p className="mb-3 text-neutral-300">Feel free to reach out!</p>
          <Link
            href="mailto:lshegay@icloud.com"
            className="mb-8 -ml-2 inline-flex items-center rounded-xl p-2
            transition-colors hover:bg-neutral-900
            active:bg-black active:text-neutral-600"
          >
            <span className="mr-5 text-2xl font-bold">lshegay@icloud.com</span>
            <FaArrowRight />
          </Link>
          <div className="flex text-3xl">
            {SOCIALS.map(({ icon, link }) => (
              <Link
                key={link}
                href={link}
                className="mr-4 -ml-2 rounded-lg p-2 font-bold
                transition-colors ease-out
                dark:hover:bg-neutral-800 dark:hover:text-white
                dark:active:bg-black dark:active:text-neutral-300"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-left md:text-right">
          <motion.div {...staggerProps.children}>
            <h2 className="mb-5 font-radwave text-xl">Menu</h2>
          </motion.div>
          <ul>
            {FOOTER_MENU.map(({ link, name }) => (
              <motion.li key={link} className="mb-2" {...staggerProps.children}>
                <Link
                  className="-ml-2 rounded-lg p-2 font-bold transition-colors
                ease-out dark:text-neutral-500 dark:hover:bg-neutral-800
                dark:hover:text-white dark:active:bg-black
                dark:active:text-neutral-300 md:-mr-2"
                  href={link}
                  style={{
                    ...(router.asPath == link ? { color: 'white' } : {}),
                  }}
                  scroll={false}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <Container className="relative h-full">
          <Light
            className="absolute left-0 top-[-150px]"
            color="rgb(173 85 255)"
            radius={100}
          />
          <Light
            color="rgb(255 0 0)"
            className="absolute right-0 bottom-[20px]"
            radius={200}
          />
        </Container>
      </div>
    </div>
  );
}
