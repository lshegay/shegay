import type { DivProps } from 'react-html-props';
import cl from 'classnames';
import { Text, Title } from '../decorations';

export type Props = DivProps & { title: string; description: string };

export default function Section({
  title,
  description,
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cl(
        `flex flex-col lg:flex-row
        mt-32 mb-44 justify-between`,
        className
      )}
    >
      <div className="not-prose">
        <Text className=" mt-0 mb-8 text-2xl uppercase">{description}</Text>
        <Title className="text-7xl">{title}</Title>
      </div>
      <div className="w-full shrink-0 lg:w-[500px]">{children}</div>
    </div>
  );
}
