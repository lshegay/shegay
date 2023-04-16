import type { DivProps } from 'react-html-props';
import cl from 'classnames';
import { Text, Title } from '../decorations';

export type Props = DivProps & {
  title: string;
  description: string;
  header?: boolean;
};

export default function Section({
  title,
  description,
  children,
  className,
  header,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={cl(
        `flex flex-col lg:flex-row
        mt-32 mb-44 justify-between`,
        className
      )}
    >
      <div className="not-prose">
        <Text className=" mt-0 mb-4 text-2xl uppercase">{description}</Text>
        {header ? (
          <Title className="text-7xl">{title}</Title>
        ) : (
          <h1 className="text-5xl font-bold">{title}</h1>
        )}
      </div>
      <div className="w-full shrink-0 lg:w-[500px]">{children}</div>
    </div>
  );
}
