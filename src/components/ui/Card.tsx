import classNames from 'classnames';
import { motion, type MotionProps } from 'motion/react';
import { useRouter } from 'next/navigation';
import type { AProps } from 'react-html-props';

export type CardProps = AProps &
  MotionProps & {
    className?: string;
    variant?: 'default';
    scroll?: boolean;
  };

export default function Card(p: CardProps) {
  const { className, scroll, variant, ...props } = Object.assign({}, { variant: 'default' }, p);

  const router = useRouter();

  return (
    <motion.a
      {...props}
      className={classNames(
        `flex items-center
          relative w-full
          rounded-[20px] px-7 py-5
          overflow-hidden border-[1px] border-[#252525] backdrop-blur-sm`,
        className,
      )}
      variants={{
        initial: { background: 'rgb(23 23 23 / 0.1)' },
        hovered: { background: 'rgb(23 23 23 / 0.8)' },
        tapped: { scale: 0.95 },
      }}
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
      transition={{ type: 'spring', damping: 20 }}
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={(e) => {
        if (!props.href) return;

        e.stopPropagation();

        router.push(props.href, { scroll });
      }}
    >
      {props.children}
    </motion.a>
  );
}
