import { motion } from 'motion/react';
import classNames from 'classnames';

import ContactStyles from './Contact.module.css';
import Autotext from '@/components/animations/Autotext';

export default function Contact() {
  return (
    <>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: -360, scale: 1.2 }}
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
          initial={{ rotate: 15, scale: 1 }}
          animate={{ rotate: 375, scale: 0.7 }}
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
      </div> */}
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
        className={classNames(ContactStyles.blueprint, 'z-[-10]')}
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{
          type: 'spring',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className={classNames(ContactStyles.scene, 'z-[1]')}>
          <div className={ContactStyles.clip}>
            <div className={ContactStyles.container}>
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={classNames(ContactStyles.circle, ContactStyles.border)} />
              <div className={ContactStyles.circle} />
              <div className={ContactStyles.circle} />
              <div className={ContactStyles.circle} />
              <div className={ContactStyles.circle} />
              <div className={ContactStyles.circle} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
