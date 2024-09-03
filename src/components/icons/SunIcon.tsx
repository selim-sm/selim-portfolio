import { motion } from "framer-motion";
import { LucideMoonStar, LucideSun } from "lucide-react";

const SunIcon = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LucideSun />
      </motion.div>
    </>
  );
};

export default SunIcon;
