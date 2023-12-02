"use client";
import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile.png";
import { motion } from "framer-motion";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full min-h-screen grid md:grid-cols-2 items-center gap-8 mx-auto px-2.5 md:px-48 pt-8 relative overflow-hidden">
      <div className="bg-[#f5eef0] w-[1600px] h-[900px] absolute bottom-60 right-[-360px] rotate-45" />
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
          <button className="bg-[#f1cbd6] hover:bg-[#f5eef0] ease-out duration-200 p-4 rounded-lg font-bold">
            See My Work
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-200 ease-out duration-200 p-4 rounded-lg font-bold">
            Contact Me
          </button>
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
