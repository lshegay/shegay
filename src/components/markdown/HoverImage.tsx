import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

import { transition } from '@/utils';

export default function HoverImage({
  alt = '',
  src = '',
  ...props
}: ImageProps) {
  return (
    <motion.div className="overflow-hidden rounded-md">
      <motion.div whileHover={{ scale: 1.05 }} transition={transition}>
        <Image {...props} alt={alt} src={src} />
      </motion.div>
    </motion.div>
  );
}
