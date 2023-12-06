"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { FaDesktop, FaMobileScreen } from "react-icons/fa6";
import Link from "next/link";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full h-screen pt-20 grid grid-rows-3">
      <div className="grid grid-cols-4 gap-4 row-span-1">
        <FramerMotionWrapper
          variant="fromLeft"
          className="flex items-center py-12 text-xs lg:text-sm text-gray-700 col-span-1 px-4"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            placeat enim accusamus voluptate eveniet libero excepturi pariatur
          </p>
        </FramerMotionWrapper>
        <div className="flex justify-end items-center pt-12 col-span-2">
          <div className="w-full mx-auto flex flex-col justify-center items-center">
            <p>Software Developer</p>
            <h1 className="text-4xl lg:text-5xl font-bold">Nicholas Abell</h1>
          </div>
        </div>
        <FramerMotionWrapper
          variant="fromRight"
          className="flex items-start justify-center pt-12 col-span-1"
        >
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
            <Image
              width={180}
              height={120}
              src="/profile.png"
              alt="profile"
              className="rounded-full shadow-lg shadow-gray-400"
            />
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-4 text-gray-400">
              <Link
                className="hover:text-black rounded-full shadow-md shadow-gray-400 hover:shadow-purple-300 duration-200 ease-in-out p-2 flex justify-center items-center"
                href="/"
              >
                <SiGithub size={15} />
              </Link>
              <Link
                className="hover:text-black rounded-full shadow-md shadow-gray-400 hover:shadow-purple-300 duration-200 ease-in-out p-2 flex justify-center items-center"
                href="/"
              >
                <SiLinkedin size={15} />
              </Link>
              <Link
                className="hover:text-black rounded-full shadow-md shadow-gray-400 hover:shadow-purple-300 duration-200 ease-in-out p-2 flex justify-center items-center"
                href="/"
              >
                <SiGmail size={15} />
              </Link>
            </div>
          </div>
        </FramerMotionWrapper>
      </div>
      <div className="row-span-1"></div>
      <div className="row-span-1 relative">
        <div className="grid grid-cols-3 grid-rows-1 justify-center h-full">
          <div className="w-full flex justify-center items-center">
            <div className=" rounded-full bg-white border-4 border-[#f5eef0] p-4">
              <FaMobileScreen size={50} />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className=" rounded-full bg-white border-4 border-[#f5eef0] p-4">
              <FaDesktop size={50} />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className=" rounded-full bg-white border-4 border-[#f5eef0] p-4">
              <FaMobileScreen size={50} />
            </div>
          </div>
        </div>
        <div className="absolute z-[-10] w-full h-[50%] bottom-0 left-0 bg-[#f5eef0]" />
      </div>
    </section>
  );
};
export default Hero;
