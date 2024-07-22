import React from "react";
import { animate, motion } from "framer-motion";

const Animation = ({
  children,
  initial = { y: -1000 },
  animate = { y: 0 },
  transition = { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] },
}) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default Animation;
