import type { PProps } from 'react-html-props';
import cl from 'classnames';

export type Props = PProps;

export function Text({ children, className, ...props }: Props) {
  return (
    <p
      {...props}
      className={cl(
        'bg-gradient-to-b from-white to-[#CBCBCB] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </p>
  );
}
