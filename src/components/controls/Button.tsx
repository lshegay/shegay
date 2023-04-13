import Link from 'next/link';
import { motion } from 'framer-motion';
import cl from 'classnames';
import type { ButtonProps } from 'react-html-props';
import Light from '../decorations/Light';

export type CustomButtonProps = ButtonProps;

export default function Button({
  children,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <motion.div className="relative z-0 inline-block overflow-hidden rounded-[20px]">
      <button {...props} className={cl('relative z-0 font-bold', className)}>
        {children}
      </button>
      <div className="absolute top-0 left-0 z-[-1] flex h-full w-full justify-center">
        <Light
          color="#CA00FF"
          className="absolute -top-1/2 z-[1]"
          radius={30}
          blur={40}
          opacity={0.7}
        />
        <div
          className="absolute left-[1px] top-[1px] z-0
            h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[20px] bg-black"
        />
        <div
          className="absolute left-0 top-0 z-[-1]
            h-full
            w-full bg-gradient-to-b from-[#303030]
            to-[#5C1956]"
        />
      </div>
    </motion.div>
  );
}

export type ButtonLinkProps = React.ComponentProps<typeof Link>;

export function ButtonLink({
  children,
  className,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cl(
        'group relative z-0 inline-block overflow-hidden rounded-[20px] font-bold',
        className
      )}
    >
      {children}
      <div className="absolute top-0 left-0 z-[-1] flex h-full w-full justify-center">
        <Light
          color="#CA00FF"
          className="absolute -top-1/2 z-[1] group-hover:scale-125"
          radius={30}
          blur={40}
          opacity={0.7}
        />
        <div
          className="absolute left-[1px] top-[1px] z-0
            h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[20px] bg-black"
        />
        <div
          className="absolute left-0 top-0 z-[-1] h-full w-full
            bg-gradient-to-b from-[#616161] to-[#a42b9a] opacity-50
            transition-opacity group-hover:opacity-100 group-active:opacity-70"
        />
      </div>
    </Link>
  );
}
