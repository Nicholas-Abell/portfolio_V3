"use client";
import { motion } from "framer-motion";
import React from "react";
import { Variants } from "framer-motion";

type LoadTestProps = {};

const LoadTest: React.FC<LoadTestProps> = () => {
  const loaderContainer = {
    animate: {
      repeatDelay: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const loadAnimation: Variants = {
    animate: {
      y: "20%",
      className: "",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  return (
    <section className="bg-dark w-full h-screen">
      <motion.div
        variants={loaderContainer}
        animate="animate"
        className="flex justify-center items-center w-full h-full gap-2"
      >
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">L</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">O</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">A</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">D</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">I</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">N</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          variants={loadAnimation}
          className="bg-main rounded-lg shadow-md shadow-gray-400 w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] flex justify-center items-center border"
        >
          <p className="text-light sm:text-4xl md:text-8xl font-bold">G</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoadTest;
