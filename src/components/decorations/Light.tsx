import cl from 'classnames';

export type Props = {
  color?: string;
  className?: string;
  radius?: number;
  opacity?: number;
};

export default function Light({
  className,
  color = '#D321FF',
  radius = 512,
  opacity = 0.2,
}: Props) {
  return (
    <div
      className={cl('opacity-10 blur-[170px] rounded-full', className)}
      style={{
        backgroundColor: color,
        width: radius,
        height: radius,
        opacity,
      }}
    />
  );
}
