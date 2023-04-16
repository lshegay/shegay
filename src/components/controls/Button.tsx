import Link from 'next/link';
import cl from 'classnames';
import type { ButtonProps } from 'react-html-props';
import Light from '../decorations/Light';

export type CustomButtonProps = ButtonProps;

export type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  from?: string;
  to?: string;
  light?: string;
  radius?: number;
  blur?: number;
  opacity?: number;
};

export function Button({
  children,
  className,
  href,
  from = '#616161',
  to = '#a42b9a',
  light = '#CA00FF',
  radius = 30,
  blur = 40,
  opacity = 0.7,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cl(
        `group relative z-0 inline-block overflow-hidden
        rounded-[20px] font-bold text-center`,
        className
      )}
    >
      {children}
      <div className="absolute top-0 left-0 z-[-1] flex h-full w-full justify-center">
        <Light
          color={light}
          className="absolute z-[1] group-hover:scale-125"
          style={{ top: `-${radius}px` }}
          radius={radius}
          blur={blur}
          opacity={opacity}
        />
        <div
          className="absolute left-[1px] top-[1px] z-0
            h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[20px] bg-black"
        />
        <div
          className="absolute left-0 top-0 z-[-1] h-full w-full opacity-50
            transition-opacity group-hover:opacity-100 group-active:opacity-70"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
          }}
        />
      </div>
    </Link>
  );
}
