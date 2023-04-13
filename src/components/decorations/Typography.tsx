import { HTMLMotionProps, motion } from 'framer-motion';
import cl from 'classnames';

export type TextProps = HTMLMotionProps<'p'>;
export type H1Props = HTMLMotionProps<'h1'>;

export function Text({ children, className, ...props }: TextProps) {
  return (
    <motion.p
      {...props}
      className={cl(
        'bg-gradient-to-b from-white to-[#CBCBCB] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </motion.p>
  );
}

export function Title({ children, className, ...props }: H1Props) {
  return (
    <motion.h1
      {...props}
      className={cl(
        'font-radwave text-2xl bg-gradient-to-b from-[#CD62FF] to-[#FF50B9] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </motion.h1>
  );
}
