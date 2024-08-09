import React from "react";
import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: ["0%", "100%", "0%"],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ThreeDotsWave: React.FC<{ dots: number }> = ({ dots = 3 }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        className="flex space-x-3"
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        {[...Array(dots)].map((_, index) => (
          <motion.span
            key={index}
            className="block w-4 h-4 bg-gray-900 rounded-full dark:bg-gray-100"
            variants={DotVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ThreeDotsWave;
