import type { DivProps } from 'react-html-props';
import cl from 'classnames';

import Container from '../layout/Container';
import Light from './Light';

import Retro from './Retro.module.scss';

export type Props = DivProps;

export function Grid({ children, className, ...props }: Props) {
  return (
    <>
      <div className={cl(className)}>
        <Container className="relative h-full">
          <Light className="absolute left-[256px] top-1/3" />
          <Light color="#FF2121" className="absolute right-[256px] top-1/2" />
        </Container>
        <div
          className={cl(
            Retro.grid,
            'absolute top-0 left-0 h-full w-full mix-blend-soft-light'
          )}
        />
        <div
          className="absolute top-0 left-0 h-2/3 w-full bg-gradient-to-b from-black
      via-black to-transparent"
        />
      </div>
    </>
  );
}
