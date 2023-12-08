"use client";
import React from "react";
import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-light text-light grid grid-cols-3 relative">
      <div className="grid grid-cols-3 col-span-3 sm:col-span-2 grid-rows-5 p-4 pb-0 sm:pb-4 sm:pr-2 gap-2 sm:gap-4">
        <div className="relative bg-gradient-to-r from-dark to-darker rounded-lg col-span-3 row-span-4 text-light p-4 md:p-12 flex flex-col justify-between z-20">
          <div>
            <p className="text-gray-300 text-xl lg:text-4xl font-bold">
              Software Developer
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-main">
              NICHOLAS <br className="hidden sm:block" /> ABELL
            </h1>
          </div>
          <div className="sm:ml-auto mt-auto bottom-0 right-0 text-sm lg:text-base xl:text-lg py-2 w-full sm:w-[60%] md:w-[40%] sm:h-[40%]">
            <p>
              I am a passionate software developer dedicated to solving
              real-world problems through innovative solutions.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="row-span-4 col-span-3 grid grid-cols-3 gap-4"
        >
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 1 }}
            className="bg-main rounded-lg row-span-2"
          />
          <div className="rounded-lg bg-darkAccent col-span-2 row-span-2 z-10" />
        </motion.div>
      </div>
      <div className="h-full grid-cols-3 grid-rows-6 grid gap-2 p-4 pt-2 sm:pt-4 pl-2 col-span-3 sm:col-span-1">
        <div className="bg-gradient-to-r from-dark to-darker rounded-xl col-span-2 sm:col-span-3 relative flex justify-center items-center row-span-3 z-10 py-4">
          <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px]">
            <Image
              src="/profile.png"
              alt="profile"
              fill
              className=" object-fill rounded-lg"
            />
          </div>
        </div>
        <div className="bg-accent row-span-3 rounded-lg block sm:hidden" />
        <Link
          href="https://github.com/Nicholas-Abell"
          className="row-span-2 sm:row-span-1 z-[2]"
        >
          <motion.div
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="bg-main w-full h-full rounded-lg flex
            justify-center items-center"
          >
            <SiGithub size={45} className="text-light" />
          </motion.div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicholas-abell-348807192/"
          className="row-span-2 sm:row-span-1 z-[1]"
        >
          <motion.div
            whileHover={{
              rotate: [5, -5, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ x: -180, y: -150 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 60, delay: 0 },
              x: { type: "spring", stiffness: 60, delay: 1 },
            }}
            className="bg-accent rounded-lg flex justify-center items-center w-full h-full"
          >
            <SiLinkedin size={45} className="text-light" />
          </motion.div>
        </Link>
        <Link
          href="mailto:nicholaswabell@gmail.com"
          className="row-span-2 sm:row-span-1"
        >
          <motion.div
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 1 }}
            className="bg-darkAccent w-full h-full rounded-lg flex
            justify-center items-center z-[1]"
          >
            <SiGmail size={45} className="text-light" />
          </motion.div>
        </Link>
        <div className="rounded-xl col-span-3 bg-gradient-to-r from-dark to-darker row-span-2 z-10" />
      </div>
    </section>
  );
};
export default Hero;
