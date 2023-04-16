import { HTMLMotionProps, motion } from 'framer-motion';
import cl from 'classnames';

export type Props = HTMLMotionProps<'div'> & {
  color?: string;
  className?: string;
  radius?: number;
  opacity?: number;
  blur?: number;
};

export default function Light({
  className,
  color = '#D321FF',
  radius = 300,
  opacity = 0.1,
  blur = 170,
  ...props
}: Props) {
  return (
    <motion.div
      {...props}
      className={cl('rounded-full', className)}
      style={{
        backgroundColor: color,
        boxShadow: `0 0 ${blur * 2}px ${radius}px ${color}`,
        width: 1,
        height: 1,
        opacity,
        ...props.style,
      }}
    />
  );
}
