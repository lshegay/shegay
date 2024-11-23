import { motion } from 'motion/react';
import type { DivProps } from 'react-html-props';
import classNames from 'classnames';

export type Props = DivProps & {
  text: string;
  duration?: number;
  direction?: 'left' | 'right';
};

const autoTextPositions = {
  left: [
    ['0%', '-100%'],
    ['100%', '0%'],
    ['200%', '100%'],
  ],
  right: [
    ['-100%', '0%'],
    ['0%', '100%'],
    ['100%', '200%'],
  ],
};

export default function Autotext(p: Props) {
  const { text, duration, direction } = Object.assign(
    {},
    {
      duration: 70,
      direction: 'left',
    },
    p,
  );

  return (
    <div
      className="relative flex w-full overflow-hidden
        font-radwave text-7xl text-white/30 xl:text-9xl !leading-[0.7]"
    >
      {autoTextPositions[direction].map(([from, to], index) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className={classNames('whitespace-nowrap', { absolute: index > 0 })}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{
            ease: 'linear',
            duration: duration,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
