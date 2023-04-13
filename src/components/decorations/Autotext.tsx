import { motion } from 'framer-motion';
import type { DivProps } from 'react-html-props';

export type Props = DivProps & {
  text: string;
  duration?: number;
  direction?: 'left' | 'right';
};

export default function Autotext({
  text,
  duration = 15,
  direction = 'left',
}: Props) {
  return (
    <div
      className="relative flex w-full overflow-hidden
        font-radwave text-4xl leading-tight text-black dark:text-white md:text-[64px]"
    >
      <motion.div
        className="whitespace-nowrap"
        initial={{ x: direction == 'left' ? '0%' : '-100%' }}
        animate={{ x: direction == 'left' ? '-100%' : '0%' }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Infinity,
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
          repeat: Infinity,
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
          repeat: Infinity,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
