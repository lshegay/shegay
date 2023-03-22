import type { DivProps } from 'react-html-props';
import cl from 'classnames';

import Retro from './retro.module.scss';
import Container from '../layout/Container';
import Light from './Light';

export type Props = DivProps;

export function Grid({ children, className, ...props }: Props) {
  return (
    <>
      <div className={cl(className)}>
        <Container className="relative h-full">
          <Light className="absolute left-0 top-[10%]" />
          <Light color="#FF2121" className="absolute right-0 top-1/3" />
        </Container>
        <div
          className={cl(
            Retro.grid,
            'absolute top-0 left-0 h-full w-full mix-blend-soft-light'
          )}
        />
        <div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black
      via-black to-transparent"
        />
      </div>
    </>
  );
}
