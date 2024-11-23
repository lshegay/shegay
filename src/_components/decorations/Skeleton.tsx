import type { DivProps } from 'react-html-props';

export type Props = DivProps;

export default function Skeleton({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="relative h-full w-full animate-pulse overflow-hidden rounded-[20px]">
        <div
          className="absolute left-[1px] top-[1px] z-0
            h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[20px] bg-black"
        />
        <div
          className="absolute left-0 top-0 z-[-1] h-full w-full
            bg-gradient-to-b from-[#a8a8a8] to-[#161616]"
        />
      </div>
    </div>
  );
}
