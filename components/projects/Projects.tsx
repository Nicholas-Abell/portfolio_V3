"use client";
import React from "react";
import { FiActivity } from "react-icons/fi";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-4 overflow-hidden mx-auto px-2.5 md:px-20">
      <FramerMotionWrapper variant="fromBottom">
        <h2 className="text-center text-4xl md:text-6xl py-4">
          Personal Projects
        </h2>
      </FramerMotionWrapper>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-2">
        <div className="w-full">
          <div className="bg-gray-700 w-full h-[420px]" />
        </div>
        <FramerMotionWrapper variant="fromRight">
          <div className="md:w-[90%] md:h-[420px] md:ml-[-120px] flex flex-col md:justify-between z-10">
            <div>
              <p className="md:text-end pb-2">Featured Project</p>
              <h3 className="text-5xl md:text-end">Reddit Clone</h3>
            </div>
            <div className="bg-black py-4 md:px-8 rounded-lg">
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
        </FramerMotionWrapper>
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
