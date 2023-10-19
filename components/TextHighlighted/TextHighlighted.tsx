import Container from "../Container/Container";
import styles from "./TextHighlighted.module.scss";
import { motion } from "framer-motion";

const TextHighlighted = ({ text }: any) => {
  return (
    <Container margin="isHuge">
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className={styles.textHighlighted}>{text}</p>
      </motion.div>
    </Container>
  );
};

export default TextHighlighted;
