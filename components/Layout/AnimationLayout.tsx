import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

type AnimationLayoutProps = {
  children: ReactNode;
};

const AnimationLayout: React.FC<AnimationLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setIsMobile(width < 768);
  }, []);

  return isMobile ? (
    <div>{children}</div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileTap={{ opacity: 0, scale: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
