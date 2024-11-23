import { motion } from 'motion/react';
import type { DivProps } from 'react-html-props';

export type Props = DivProps & {
  text: string;
  duration?: number;
  direction?: 'left' | 'right';
};

export default function Autotext({
  text,
  duration = 70,
  direction = 'left',
}: Props) {
  return (
    <div
      className="relative flex w-full overflow-hidden
        font-radwave text-7xl text-white/30 xl:text-9xl !leading-[0.7]"
    >
      <motion.div
        className="whitespace-nowrap"
        initial={{ x: direction == 'left' ? '0%' : '-100%' }}
        animate={{ x: direction == 'left' ? '-100%' : '0%' }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute whitespace-nowrap"
        initial={{ x: direction == 'left' ? '100%' : '0%' }}
        animate={{ x: direction == 'left' ? '0%' : '100%' }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute whitespace-nowrap"
        initial={{ x: direction == 'left' ? '200%' : '100%' }}
        animate={{ x: direction == 'left' ? '100%' : '200%' }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
