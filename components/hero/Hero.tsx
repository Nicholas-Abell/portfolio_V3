"use client";
import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile.png";
import { motion } from "framer-motion";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 mx-auto px-2.5 md:px-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center gap-8"
      >
        <p>Hello There, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold">Nicholas Abell</h1>
        <p>
          I am passionate about solving bussiness problems through innovation
        </p>
        <div className="grid grid-cols-2 items-center gap-4 pr-24">
          <button className="bg-blue-800 p-4 rounded-lg">See My Work</button>
          <button className="bg-blue-800 p-4 rounded-lg">Contact ME</button>
        </div>
      </motion.div>
      <div>
        <div className="relative w-[320px] md:h-[480px] h-[320px] md:w-[480px]">
          <Image
            src={profileImage}
            alt="profileImage"
            fill
            className="object-fill rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
