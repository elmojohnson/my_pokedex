import React from "react";
import { motion } from "framer-motion";

interface GridProps {
  children: any;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.2 }}
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
    >
      {children}
    </motion.div>
  );
};

export default Grid;
