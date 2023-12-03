"use client";
import React, { useRef } from "react";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import Featured from "./Featured";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleHover = () => {
    videoRef.current?.play();
  };

  const handleLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-8 overflow-hidden mx-auto px-2.5 lg:px-20 py-24 relative bg-[#f5f5f3]">
      <FramerMotionWrapper variant="fromBottom">
        <h2 className="text-center text-4xl md:text-6xl py-8">
          Personal Projects
        </h2>
      </FramerMotionWrapper>

      <Featured
        title="Dating App"
        githubLink="/"
        liveLink="/"
        description="   A full stack dating application implementing Next Js server
        actions. Features include: user registration, profile Management,
        messaging, and filtering based on user preferences."
        skills={["NextJs", "MongoDB", "Mongoose"]}
        video="/clipDatingApp.mp4"
      />

      <Featured
        title="Movie Database"
        githubLink="/"
        liveLink="/"
        description="Curious about upcoming movies and where they are Streaming? This app will tell you. Built in ReactJs with a Firebase backend for user authentication."
        skills={["ReactJs", "Firebase", "Tailwind Css"]}
        video="/clipMovieDatabase.mp4"
        fromRight
      />

      <Featured
        title="Reddit Clone"
        githubLink="/"
        liveLink="/"
        description="   A full stack dating application implementing Next Js server
        actions. Features include: user registration, profile Management,
        messaging, and filtering based on user preferences."
        skills={["ReactJs", "Firebase", "Tailwind"]}
        video="/clipRedditClone.mp4"
      />

      <div className="w-full relative">
        <div className="bg-[#f5eef0] h-[320px] w-[100vw] absolute top-0 lg:left-80 left-40 -z-50 rounded-xl" />
        <FramerMotionWrapper variant="fromLeft">
          <h2 className="text-4xl md:text-6xl pb-4 pt-24">
            Other Noteworthy Projects
          </h2>
        </FramerMotionWrapper>

        <FramerMotionWrapper variant="fromBottom">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 py-4 lg:px-24">
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
