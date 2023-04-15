export const transition = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
};

export function inViewProps() {
  return {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 50 },
    transition: {
      type: 'spring',
      delay: 0.25,
      damping: 20,
    },
    viewport: { once: true },
  };
}

export function inViewStaggerProps() {
  return {
    parent: {
      variants: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      },
      viewport: { once: true },
      initial: 'hidden',
      whileInView: 'show',
    },
    children: {
      variants: {
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            damping: 20,
          },
        },
      },
    },
  };
}

export const staggerProps = inViewStaggerProps();
