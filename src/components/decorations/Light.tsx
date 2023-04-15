import { HTMLMotionProps, motion, MotionProps } from 'framer-motion';
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
  radius = 256,
  opacity = 0.2,
  blur = 170,
  ...props
}: Props) {
  return (
    <motion.div
      {...props}
      className={cl('rounded-full', className)}
      style={{
        filter: `blur(${blur}px)`,
        backgroundColor: color,
        width: radius * 2,
        height: radius * 2,
        opacity,
        ...props.style,
      }}
    />
  );
}
