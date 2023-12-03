"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

type NoteworthyProps = {
  image: string;
  color: string;
  liveLink?: string;
  githubLink?: string;
};

const Noteworthy: React.FC<NoteworthyProps> = ({
  image,
  color,
  liveLink,
  githubLink,
}) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className={`bg-gradient-to-r ${color} pt-4 pl-4 rounded-2xl relative`}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div className="h-[320px] rounded-lg relative">
        <div
          className={`${
            overlay ? "w-full px-4" : "w-0"
          } absolute h-full bg-gray-900/95 z-10 duration-200 ease-in-out rounded-lg flex flex-col justify-between items-center py-12 overflow-hidden text-center text-white`}
        >
          <p className="text-3xl font-bold">Thistle & Thorns LLC</p>
          <p className="text-left">
            A Squarespace site I designed and built for a local tattoo shop that
            approached me after struggling with their chosen CMS. With a bounce
            rate under 40% the page has 2.7k views in {"its'"} first three
            months. Currently on call as a webmaster
          </p>
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
        <Image src={image} alt={image} fill className="rounded-lg" />
      </div>
    </div>
  );
};
export default Noteworthy;
