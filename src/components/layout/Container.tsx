import type { DivProps } from 'react-html-props';
import cl from 'classnames';

export type Props = DivProps;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div {...props} className={cl('max-w-[1120px] m-auto', className)}>
      {children}
    </div>
  );
}
