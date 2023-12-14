"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import LoadingSkeleton from "../loaders/LoadingSkeleton";

type NoteworthyProps = {
  image: string;
  title: string;
  description: string;
  color: string;
  liveLink?: string;
  githubLink?: string;
};

const Noteworthy: React.FC<NoteworthyProps> = ({
  image,
  title,
  color,
  liveLink,
  githubLink,
  description,
}) => {
  const [loading, setLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className={`bg-gradient-to-r ${color} pt-4 pl-4 rounded-2xl relative`}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      onClick={() => setOverlay(true)}
    >
      <div className="h-[240px] md:h-[320px] rounded-lg relative shadow-lg shadow-gray-400">
        <div
          className={`${
            overlay ? "w-full px-4" : "w-0"
          } absolute h-full bg-darker z-10 duration-200 ease-in-out rounded-lg flex flex-col justify-between items-center py-4 md:py-12 overflow-hidden text-center text-white`}
        >
          <p className="text-xl md:text-3xl font-bold">{title}</p>
          <p className="text-sm md:text-base text-left">{description}</p>
          <div className="flex items-center gap-4">
            {liveLink && (
              <Link
                href={liveLink}
                className="flex flex-col items-center hover:text-gray-400"
              >
                <CgWebsite size={40} />
                <p>Live</p>
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                className="flex flex-col items-center hover:text-gray-400"
              >
                <FaGithub size={40} />
                <p>Github</p>
              </Link>
            )}
          </div>
        </div>
        <Image
          src={image}
          alt={image}
          onLoad={() => setLoading(false)}
          fill
          className="rounded-lg object-fill"
        />
        {loading && <LoadingSkeleton />}
      </div>
    </div>
  );
};
export default Noteworthy;
