"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { motion } from "framer-motion";

type FeaturedProps = {
  title: string;
  githubLink: string;
  liveLink: string;
  description: string;
  skills: string[];
  fromRight?: boolean;
  video: string;
};

const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  liveLink,
  githubLink,
  skills,
  fromRight,
  video,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleHover = () => {
    videoRef.current?.play();
    setShowVideo(true);
  };

  const handleLeave = () => {
    videoRef.current?.pause();
    setShowVideo(false);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`w-full flex flex-col-reverse ${
        fromRight ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center px-4 py-12`}
    >
      <div className="w-full relative">
        <div
          className={`absolute w-full h-full top-0 left-0 bg-gray-600/60 z-10 ease-in-out duration-200 ${
            showVideo && "w-0"
          }`}
        />
        <video ref={videoRef} muted loop>
          {/* <source src="/video-example.webm" type="video/webm" /> */}
          <source src={video} type="video/mp4" />
          {"Sorry, your browser doesn't support videos."}
        </video>
      </div>

      <div
        className={`md:w-[90%] md:h-[420px] ${
          fromRight ? "md:ml-[-120px]" : "md:mr-[-120px]"
        } flex flex-col md:justify-between z-10`}
      >
        <div>
          <FramerMotionWrapper variant={fromRight ? "fromRight" : "fromLeft"}>
            <p className={`${fromRight && "text-end"} pb-2`}>
              Featured Project
            </p>
            <h3 className={`${fromRight && "text-end"} text-5xl`}>{title}</h3>
          </FramerMotionWrapper>
        </div>
        <div className="bg-[#dbecfd] py-4 md:px-8 rounded-lg z-0">
          <p>{description}</p>
          <div className="w-full">
            <ul className="flex items-center justify-center gap-4 pt-4">
              {skills.map((skill, key) => (
                <li key={key}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`flex items-center gap-4 pb-4 ${
            fromRight ? "justify-end" : "justify-start"
          } `}
        >
          <Link href={liveLink}>
            <CgWebsite size={40} />
          </Link>
          <Link href={githubLink}>
            <FaGithub size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Featured;
