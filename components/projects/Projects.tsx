"use client";
import { motion } from "framer-motion";
import React from "react";
import { FiActivity } from "react-icons/fi";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-4 overflow-hidden">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-4xl md:text-6xl py-4">
          Personal Projects
        </h2>
      </motion.div>
      <div className="w-full flex items-center justify-center px-4 py-2">
        <div className="w-full">
          <div className="bg-gray-700 w-full h-[420px]" />
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[90%] h-[420px] ml-[-120px] flex flex-col justify-between">
            <div>
              <p className="text-end pb-2">Featured Project</p>
              <h3 className="text-5xl text-end">Reddit Clone</h3>
            </div>
            <div className="bg-black py-4 px-8 rounded-lg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam dolore quod alias accusamus numquam corrupti
                voluptatibus nobis aspernatur nulla repellat. Quasi suscipit
                voluptate voluptatibus neque placeat sequi modi esse odio!
              </p>
              <div className="w-full">
                <ul className="flex items-center justify-center gap-4 pt-4">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end items-center gap-4 pb-4">
              <FiActivity size={40} />
              <FiActivity size={40} />
            </div>
          </div>
        </motion.div>
      </div>
      <h2 className="text-center text-4xl md:text-6xl py-4">
        Other Noteworthy Projects
      </h2>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
        <div className="bg-gray-400 h-[320px]" />
      </div>
    </section>
  );
};
export default Projects;
