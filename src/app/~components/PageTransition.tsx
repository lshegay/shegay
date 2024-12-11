'use client';

import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type Props = {
  children: ReactNode;
};

export function FrozenRoute({ children }: Props) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
}

/* {!isPresent && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <motion.div
            className="absolute top-0 left-0 w-full bg-black"
            initial={{ height: '0%' }}
            animate={{ height: '50%' }}
            transition={{ duration: 0.25 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-black"
            initial={{ height: '0%' }}
            animate={{ height: '50%' }}
            transition={{ duration: 0.25 }}
          ></motion.div>
        </div>
      )} */

export default function PageTransition(p: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <FrozenRoute>{p.children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
