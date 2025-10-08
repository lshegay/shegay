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
