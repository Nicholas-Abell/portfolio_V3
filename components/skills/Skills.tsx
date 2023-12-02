import React from "react";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section className="w-full min-h-screen bg-[#f5eef0] mx-auto px-2.5 md:px-20 py-24">
      <FramerMotionWrapper variant="fromBottom">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">What I can do</p>
          <h2 className="text-4xl md:text-6xl">Skills</h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-4xl">Front-End</p>
            <div className="grid grid-cols-3 gap-4 bg-white rounded-lg p-4">
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />{" "}
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-4xl">Front-End</p>
            <div className="grid grid-cols-3 gap-4 bg-white rounded-lg p-4">
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />{" "}
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-4xl">Front-End</p>
            <div className="grid grid-cols-3 gap-4 bg-white rounded-lg p-4">
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />{" "}
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
              <div className="bg-gray-800 h-[120px] rounded-lg" />
            </div>
          </div>
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Skills;
