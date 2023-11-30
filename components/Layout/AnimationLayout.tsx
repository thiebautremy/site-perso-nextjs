import { useState, useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
    ease: "easeInOut",
  },
  hidden: { opacity: 0, scale: 0.9 },
};

type AnimationLayoutProps = {
  children: ReactNode;
};

const AnimationLayout: React.FC<AnimationLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setIsMobile(width < 768);
  }, []);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return isMobile ? (
    <div>{children}</div>
  ) : (
    <motion.div
      // initial="hidden"
      // variants={boxVariant}
      // ref={ref}
      // animate={control}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileTap={{ opacity: 0, scale: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
