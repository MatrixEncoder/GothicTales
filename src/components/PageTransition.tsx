<<<<<<< HEAD
'use client';

=======
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
import { motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen">
      {children}
    </div>
=======
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
  );
}
