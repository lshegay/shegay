import { motion } from 'motion/react';
import classNames from 'classnames';

import SphereStyles from './Sphere.module.css';
import Autotext from '@/components/animations/Autotext';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function Sphere() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
        <motion.div
          initial={{ rotate: '0deg', scale: 1 }}
          animate={{ rotate: '360deg', scale: [1.2, 1] }}
          transition={{
            type: 'spring',
            stiffness: 20,
            damping: 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        >
          <svg viewBox="0 0 75 75" width="700px">
            <title>Figure</title>
            <path
              d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z"
              stroke="white"
              strokeWidth="0.2"
              fillOpacity={0}
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
        <motion.div
          initial={{ rotate: '15deg', scale: 1 }}
          animate={{ rotate: '375deg', scale: [0.7, 1] }}
          transition={{
            type: 'spring',
            stiffness: 20,
            damping: 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        >
          <svg viewBox="0 0 75 75" width="800px">
            <title>Figure</title>
            <path
              d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z"
              stroke="white"
              strokeWidth="0.2"
              fillOpacity={0}
            />
          </svg>
        </motion.div>
      </div>
      <div
        className="absolute z-[1] top-32 h-32 w-full bg-[#ef4444]
          flex justify-between items-center
          pt-3
          font-radwave text-7xl text-black"
      >
        <Autotext text="SHEGAY SHEGAY&nbsp;" duration={5} />
      </div>
      <div
        className="absolute z-[1] bottom-32 h-32 w-full bg-[#ef4444]
          flex justify-between items-center
          pt-3
          font-radwave text-7xl text-black"
      >
        <Autotext text="SHEGAY SHEGAY&nbsp;" duration={5} direction="right" />
      </div>
      <motion.div
        className={classNames(SphereStyles.blueprint, 'z-[-10]')}
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{
          type: 'spring',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
      <div className={classNames(SphereStyles.scene, 'z-[1]')}>
        <div className={SphereStyles.clip}>
          <div className={SphereStyles.container}>
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={classNames(SphereStyles.circle, SphereStyles.border)} />
            <div className={SphereStyles.circle} />
            <div className={SphereStyles.circle} />
            <div className={SphereStyles.circle} />
            <div className={SphereStyles.circle} />
            <div className={SphereStyles.circle} />
          </div>
        </div>
      </div>
    </>
  );
}
