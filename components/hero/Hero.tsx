"use client";
import React from "react";
import Image from "next/image";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import {
  SiExpress,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import Link from "next/link";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="w-full h-screen pt-20 bg-light text-light grid grid-cols-3 relative">
      <div className="grid grid-cols-3 col-span-2 grid-rows-5 p-4 pr-2 gap-4">
        <div className="bg-gradient-to-r from-dark to-darker rounded-lg col-span-3 row-span-4 text-light p-4 md:p-12">
          <h1>NICHOLAS ABELL</h1>
        </div>
        <div className="bg-main rounded-lg"></div>
        <button className="col-span-2 rounded-lg bg-darkAccent">push</button>
      </div>
      <div className="h-full grid-cols-3 grid-rows-4 grid gap-2 p-4 pl-2">
        <div className="bg-gradient-to-r from-dark to-darker rounded-xl col-span-3 row-span-2 relative flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative w-[120px] h-[120px] md:w-[240px] md:h-[240px]">
              <Image
                src="/profile.png"
                alt="profile"
                fill
                className=" object-fill rounded-full shadow-lg shadow-dark"
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
              <div className="bg-gray-200 p-4"></div>
              <div className="bg-gray-200 p-4"></div>
              <div className="bg-gray-200 p-4"></div>
            </div>
          </div>
        </div>
        <div className="bg-main rounded-lg"></div>
        <div className="bg-darkAccent rounded-lg relative hidden lg:block"></div>
        <div className="bg-accent rounded-lg col-span-2 lg:col-span-1"></div>
        <div className="rounded-xl col-span-3 row-span-1 bg-dark"></div>
      </div>
    </section>
  );
};
export default Hero;
