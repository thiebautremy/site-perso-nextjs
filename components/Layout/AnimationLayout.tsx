import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const AnimationLayout: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setIsMobile(width < 768);
  }, []);

  return isMobile ? (
    <div>{children}</div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
