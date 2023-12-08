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
        <div className="relative bg-gradient-to-r from-dark to-darker rounded-lg col-span-3 row-span-4 text-light p-4 md:p-12 flex flex-col justify-between">
          <div>
            <p className="text-gray-300 text-xl lg:text-4xl font-bold">
              Software Developer
            </p>
            <h1 className="pt-8 md:pt-4 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-main">
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
        <div className="bg-main rounded-lg row-span-2" />
        <div className="rounded-lg bg-darkAccent col-span-2 row-span-2" />
      </div>
      <div className="h-full grid-cols-3 grid-rows-6 grid gap-2 p-4 pt-2 sm:pt-4 pl-2 col-span-3 sm:col-span-1">
        <div className="bg-gradient-to-r from-dark to-darker rounded-xl col-span-3 relative flex justify-center items-center row-span-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]">
              <Image
                src="/profile.png"
                alt="profile"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
          </div>
        </div>
        <Link
          href="https://github.com/Nicholas-Abell"
          className="row-span-2 sm:row-span-1"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            className="bg-main w-full h-full rounded-lg flex
            justify-center items-center"
          >
            <SiGithub size={45} className="text-light" />
          </motion.div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicholas-abell-348807192/"
          className="row-span-2 sm:row-span-1"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
            className="bg-darkAccent rounded-lg flex justify-center items-center w-full h-full"
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
              scale: 1.1,
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            className="bg-main w-full h-full rounded-lg flex
            justify-center items-center"
          >
            <SiGmail size={45} className="text-light" />
          </motion.div>
        </Link>
        <div className="rounded-xl col-span-3 bg-gradient-to-r from-dark to-darker row-span-2" />
      </div>
    </section>
  );
};
export default Hero;
