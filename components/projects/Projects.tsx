"use client";
import React from "react";
import { FiActivity } from "react-icons/fi";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-4 overflow-hidden mx-auto px-2.5 md:px-20 py-24 relative">
      <FramerMotionWrapper variant="fromBottom">
        <h2 className="text-center text-4xl md:text-6xl py-8">
          Personal Projects
        </h2>
      </FramerMotionWrapper>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-2">
        <div className="w-full">
          <div className="bg-gray-700 w-full h-[420px]" />
        </div>
        <div className="md:w-[90%] md:h-[420px] md:ml-[-120px] flex flex-col md:justify-between">
          <div>
            <FramerMotionWrapper variant="fromRight">
              <p className="md:text-end pb-2">Featured Project</p>
              <h3 className="text-5xl md:text-end">Reddit Clone</h3>
            </FramerMotionWrapper>
          </div>
          <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-10">
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
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center px-4 py-12">
        <div className="w-full z-[-50]">
          <div className="bg-gray-700 w-full h-[420px] z-[-50]" />
        </div>
        <div className="md:w-[90%] md:h-[420px] md:ml-[120px] flex flex-col md:justify-between z-50">
          <div>
            <FramerMotionWrapper variant="fromLeft">
              <p className="pb-2">Featured Project</p>
              <h3 className="text-5xl">Reddit Clone</h3>
            </FramerMotionWrapper>
          </div>
          <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-50">
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
          <div className="flex justify-start items-center gap-4 pb-4">
            <FiActivity size={40} />
            <FiActivity size={40} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-24">
        <div className="w-full z-[-50]">
          <div className="bg-gray-700 w-full h-[420px] z-[-50]" />
        </div>
        <div className="md:w-[90%] md:h-[420px] md:ml-[-120px] flex flex-col md:justify-between z-50">
          <div>
            <FramerMotionWrapper variant="fromRight">
              <p className="md:text-end pb-2">Featured Project</p>
              <h3 className="text-5xl md:text-end">Reddit Clone</h3>
            </FramerMotionWrapper>
          </div>
          <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-50">
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
      </div>
      <div className="w-full relative">
        <div className="bg-[#f5eef0] h-[320px] w-[80vw] absolute top-0 left-80 -z-50 rounded-xl" />
        <FramerMotionWrapper variant="fromLeft">
          <h2 className="text-4xl md:text-6xl pb-4 pt-24">
            Other Noteworthy Projects
          </h2>
        </FramerMotionWrapper>

        <FramerMotionWrapper variant="fromBottom">
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-24">
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
            <div className="bg-gray-400 h-[320px] rounded-lg" />
          </div>
        </FramerMotionWrapper>
      </div>
    </section>
  );
};
export default Projects;
