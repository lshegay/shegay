import { HTMLMotionProps, motion } from 'framer-motion';
import cl from 'classnames';

export type Props = HTMLMotionProps<'div'>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <motion.div
      {...props}
      className={cl('lg:w-[1120px] lg:mx-auto px-5', className)}
    >
      {children}
    </motion.div>
  );
}
