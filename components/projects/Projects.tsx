"use client";
import React, { useRef } from "react";
import { FiActivity } from "react-icons/fi";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import Link from "next/link";

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
            <FramerMotionWrapper variant="fromRight" className="py-2">
              <p className="md:text-end pb-2">Featured Project</p>
              <h3 className="text-5xl md:text-end">Full Stack Dating App</h3>
            </FramerMotionWrapper>
          </div>
          <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-10">
            <p>
              A full stack dating application implementing Next Js server
              actions. Features include: user registration, profile Management,
              messaging, and filtering based on user preferences.
            </p>
            <div className="w-full">
              <ul className="flex items-center justify-center gap-4 pt-4">
                <li>Next Js</li>
                <li>MongoDB</li>
                <li>Tailwind</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 pb-4">
            <FiActivity size={40} />
            <FiActivity size={40} />
          </div>
        </div>
      </div>

      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center px-4 py-12"
      >
        <div className="w-full">
          
          <video ref={videoRef} muted loop>
            {/* <source src="/video-example.webm" type="video/webm" /> */}
            <source src="/clipMovieDatabase.mp4" type="video/mp4" />
            {"Sorry, your browser doesn't support videos."}
          </video>

        </div>
        <div className="md:w-[90%] md:h-[420px] md:mr-[-120px] flex flex-col md:justify-between z-10">
          <div>
            <FramerMotionWrapper variant="fromLeft">
              <p className="pb-2">Featured Project</p>
              <h3 className="text-5xl">Movie Database</h3>
            </FramerMotionWrapper>
          </div>
          <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-0">
            <p>
              A full stack dating application implementing Next Js server
              actions. Features include: user registration, profile Management,
              messaging, and filtering based on user preferences.
            </p>
            <div className="w-full">
              <ul className="flex items-center justify-center gap-4 pt-4">
                <li>Next Js</li>
                <li>Firebase</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 pb-4">
            <Link href="https://movie-database-4bf43.web.app/search">
              <FiActivity size={40} />
            </Link>
            <Link href="https://movie-database-4bf43.web.app/search">
              <FiActivity size={40} />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-24">
        <div className="w-full">
          <div className="bg-gray-700 w-full h-[420px]" />
        </div>
        <div className="md:w-[90%] md:h-[420px] md:ml-[-120px] flex flex-col md:justify-between z-10">
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
