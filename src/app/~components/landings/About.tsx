import { motion } from 'motion/react';

import AboutStyles from './About.module.css';
import classNames from 'classnames';

export default function About() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      animate={{
        x: [2, -2, 2, 2, -2, 2, -2, -2],
        y: [-2, 2, -2, -2, 2, -2, 2, 2],
        scale: [0.99, 1.01],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
        duration: 1,
      }}
    >
      <div
        className="absolute top-1/3 md:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          font-radwave text-5xl md:text-[300px] md:leading-[220px]
          text-white
          skew-x-[-45deg] skew-y-12"
      >
        <motion.span
          className="block "
          initial={{ skewY: -50 }}
          animate={{
            skewY: 0,
          }}
          transition={{ duration: 4 }}
        >
          ABOUT
        </motion.span>
        <motion.span
          className="block ml-44"
          initial={{ skewY: -50 }}
          animate={{
            skewY: 0,
          }}
          transition={{ duration: 6 }}
        >
          SHEGAY
        </motion.span>
      </div>
      <div className={classNames('absolute -top-1/2 -left-1/2 w-[200%] h-[200%] z-[-1]')} />
    </motion.div>
  );
}
