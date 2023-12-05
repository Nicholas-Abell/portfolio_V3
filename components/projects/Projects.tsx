"use client";
import React, { useRef } from "react";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import Featured from "./Featured";
import Image from "next/image";
import Noteworthy from "./Noteworthy";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-8 overflow-hidden mx-auto py-24 relative"
    >
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
        description="A full stack dating application implementing Next Js server
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 px-4 lg:px-16  xl:px-24 overflow-hidden">
            <Noteworthy
              image="/imageThistle.png"
              title="Thistle & Thorns LLC"
              description="A Squarespace site I designed and built for a local tattoo shop that
              approached me after struggling with their chosen CMS. With a bounce
              rate under 40% the page has 2.7k views in its first three
              months. Currently on call as a webmaster"
              color="from-blue-200"
              liveLink="https://www.thistleandthornsllc.com/"
            />
            <Noteworthy
              image="/imageSMS.png"
              title="SMS Construction and Remodeling"
              description="A Website I built to help a small town handyman reach more clients. Currently hosted
              on Hostinger. I Set up Google analytics for client and used SEO best practices."
              color="from-red-400"
              liveLink="https://smsconstructionandremodeling.com/"
              githubLink="https://smsconstructionandremodeling.com/"
            />
            <Noteworthy
              image="/imageEverdell.png"
              title="Everdell Calculator"
              description="My first app. A calculator for the ppopular board game Everdell. Built in the Unity game engine in C#. This is still used by me and my family today"
              color="from-green-400"
              liveLink="https://darkforceyoda.itch.io/everdell-companion-app"
              githubLink="https://github.com/Nicholas-Abell/Everdell-Point-Tracker"
            />
            <Noteworthy
              image="/imageWordle.jpeg"
              title="WordleClone"
              description="Wordle Clone is a digital rendition of the beloved word puzzle game Wordle. Challenge yourself to uncover a secret five-letter word within six attempts, with helpful feedback after each guess."
              color="from-purple-400"
              liveLink="https://nicholas-abell.github.io/wordle_clone/"
              githubLink="https://github.com/Nicholas-Abell/wordle_clone"
            />
          </div>
        </FramerMotionWrapper>
      </div>
    </section>
  );
};
export default Projects;
