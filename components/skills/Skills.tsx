import React from "react";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { backEnd, frontEnd, otherSkills } from "@/constants/skills";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-r from-dark to-darker mx-auto px-2.5 md:px-20 py-24"
    >
      <FramerMotionWrapper variant="fromBottom">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">What I can do</p>
          <h2 className="text-4xl md:text-6xl text-light font-bold">Skills</h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="max-w-[1980px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-4 auto-rows-fr text-xs">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-darkAccent text-4xl bg-darker rounded-lg">
              Front End
            </p>
            <div className="grid grid-cols-3 gap-4 bg-darker rounded-lg p-4">
              {frontEnd.map((skill: any, key) => (
                <div
                  key={key}
                  className="text-center justify-center flex flex-col gap-2"
                >
                  <div className="bg-light h-[120px] rounded-lg flex justify-center items-center shadow-md">
                    {skill.icon}
                  </div>
                  <div className="w-full bg-light rounded-lg p-2 text-center font-bold shadow-md">
                    <p>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-4xl bg-darker text-darkAccent rounded-lg">
              Back End
            </p>
            <div className="grid grid-cols-3 gap-4 bg-darker rounded-lg p-4">
              {backEnd.map((skill: any, key) => (
                <div
                  key={key}
                  className="text-center justify-center flex flex-col gap-2"
                >
                  <div className="bg-light h-[120px] rounded-lg flex justify-center items-center shadow-md">
                    {skill.icon}
                  </div>
                  <div className="w-full bg-light rounded-lg p-2 text-center font-bold shadow-md">
                    <p>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-center text-4xl bg-darker text-darkAccent rounded-lg">
              Other
            </p>
            <div className="grid grid-cols-3 gap-4 bg-darker rounded-lg p-4">
              {otherSkills.map((skill: any, key) => (
                <div
                  key={key}
                  className="text-center justify-center flex flex-col gap-2"
                >
                  <div className="bg-light h-[120px] rounded-lg flex justify-center items-center shadow-md">
                    {skill.icon}
                  </div>
                  <div className="w-full bg-light rounded-lg p-2 text-center font-bold shadow-md">
                    <p>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Skills;
