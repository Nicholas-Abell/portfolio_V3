"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="w-full min-h-screen bg-light text-light grid grid-cols-3 relative overflow-hidden">
      <div className="grid grid-cols-3 col-span-3 sm:col-span-2 grid-rows-5 p-4 pb-0 sm:pb-4 sm:pr-2 gap-2 sm:gap-4">
        <div className="relative rounded-lg col-span-3 row-span-4 text-light grid grid-cols-3 grid-rows-3 z-20 gap-4">
          <div className=" col-span-3 row-span-2 flex items-center justify-center text-center bg-gradient-to-r from-dark to-darker rounded-br-lg rounded-bl-lg md:rounded-bl-none z-20">
            <div className="text-left">
              <p>Software Developer</p>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-light">
                NICHOLAS ABELL
              </h1>
            </div>
          </div>
          <motion.div
            whileHover={{ y: "-5%" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 60, delay: 0 }}
            className="rounded-lg text-xl font-bold bg-accent col-span-3 row-span-2 border shadow-md shadow-gray-400 z-10"
          >
            <Link
              href="/#projects"
              className="w-full h-full flex justify-center items-center"
            >
              PROJECTS
            </Link>
          </motion.div>
        </div>
        <motion.div
          transition={{ type: "spring", stiffness: 60, delay: 0 }}
          className="row-span-4 col-span-3 grid grid-cols-3 gap-2"
        >
          <motion.div
            whileHover={{ y: "-5%" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 60, delay: 0 }}
            className="bg-main rounded-lg row-span-2 border shadow-md shadow-gray-400 text-xl font-bold"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={"/#skills"}
            >
              SKILLS
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: "-5%" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 60, delay: 0 }}
            className="rounded-lg text-xl font-bold bg-darkAccent col-span-2 row-span-2 z-10 border shadow-md shadow-gray-400"
          >
            <Link
              href={"/#contact"}
              className="w-full h-full flex justify-center items-center"
            >
              CONTACT
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-full grid-cols-3 grid-rows-6 grid gap-2 xl:gap-3 p-4 pt-2 sm:pt-4 pl-2 col-span-3 sm:col-span-1">
        <div className="bg-gradient-to-r from-dark to-darker rounded-xl col-span-2 sm:col-span-3 relative flex justify-center items-center row-span-3 z-10 py-4">
          <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px]">
            <Image
              src="/profile.png"
              alt="profile"
              fill
              className={`${
                loading && "bg-gray-400 animate-pulse object-fill"
              } rounded-xl`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
        <motion.div
          initial={{ x: "150%" }}
          animate={{ x: 0, transition: { delay: 1.5 } }}
          transition={{ type: "spring", stiffness: 60 }}
          className="bg-accent row-span-3 rounded-lg block sm:hidden z-10 border shadow-md shadow-gray-400"
        />
        <Link
          href="https://github.com/Nicholas-Abell"
          className="row-span-2 sm:row-span-1 z-[2]"
          aria-label="github"
        >
          <motion.div
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ y: "-115%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="bg-main w-full h-full rounded-lg flex
            justify-center items-center border shadow-md shadow-gray-400"
          >
            <SiGithub size={45} className="text-light" />
          </motion.div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicholas-abell-348807192/"
          className="row-span-2 sm:row-span-1 z-[1]"
          aria-label="linkedin"
        >
          <motion.div
            whileHover={{
              rotate: [5, -5, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ x: "-105%", y: "-115%" }}
            animate={{ x: 0, y: 0 }}
            transition={{
              y: { type: "spring", stiffness: 50, delay: 0 },
              x: { type: "spring", stiffness: 60, delay: 1 },
            }}
            className="bg-accent rounded-lg flex justify-center items-center w-full h-full border shadow-md shadow-gray-400"
          >
            <SiLinkedin size={45} className="text-light" />
          </motion.div>
        </Link>
        <Link
          href="mailto:nicholaswabell@gmail.com"
          className="row-span-2 sm:row-span-1"
          aria-label="gmail"
        >
          <motion.div
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            initial={{ x: "150%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 1 }}
            className="bg-darkAccent w-full h-full rounded-lg flex
            justify-center items-center z-[1] border shadow-md shadow-gray-400"
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
