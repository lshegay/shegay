import classNames from 'classnames';
import { motion, type MotionProps } from 'motion/react';
import { useRouter } from 'next/navigation';
import type { AProps } from 'react-html-props';

export type ButtonProps = AProps &
  MotionProps & {
    className?: string;
    variant?: 'default' | 'text';
    scroll?: boolean;
    icon?: boolean;
  };

export default function Button(p: ButtonProps) {
  const { className, variant, scroll, icon, ...props } = Object.assign(
    {},
    { variant: 'default' },
    p,
  );

  const router = useRouter();

  return (
    <motion.a
      {...props}
      className={classNames(
        `block rounded-lg font-bold
        transition-colors ease-out
        hover:text-white hover:bg-neutral-200/10`,
        {
          'bg-neutral-200/5 text-neutral-300': variant == 'default',
          'text-white': variant == 'text',
          'p-2 text-xl': icon,
          'py-2 px-3 text-sm': !icon,
        },
        className,
      )}
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring' }}
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={(e) => {
        if (!props.href || props.target) return;

        e.stopPropagation();
        e.preventDefault();

        router.push(props.href, { scroll });
      }}
    >
      {props.children}
    </motion.a>
  );
}
