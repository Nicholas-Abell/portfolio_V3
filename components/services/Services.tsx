"use client";
import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import Card from "./Card";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { SiGooglesheets } from "react-icons/si";
import { MdOutlineWifiTethering } from "react-icons/md";

type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
  return (
    <section
      id="services"
      className="w-full max-w-[1980px] min-h-screen flex flex-col justify-center items-center gap-12 mx-auto px-2.5 xl:px-20 py-24 text-stone-700"
    >
      <FramerMotionWrapper variant="fromBottom">
        <p className="text-gray-400">some of</p>
        <h2 className="text-4xl md:text-6xl font-bold text-darker">
          My Services
        </h2>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 gap-4 lg:px-32 py-4">
          <Card
            title="Web Development"
            icon={<FiChevronsUp size={25} />}
            emphasis="I don't just build websites. "
            description="I build high-performing mobile responsive websites that are not only beautiful, but user friendly."
            bgColor="bg-blue-200"
          />
          <Card
            title="Seo"
            icon={<MdOutlineWifiTethering size={25} />}
            emphasis="Reach a wider audience. "
            description="Using proven seo methods I can help customers find your website on Google and other popular search engines."
            bgColor="bg-red-200"
          />
          <Card
            title="Figma Conversion"
            icon={<FaFigma size={25} />}
            emphasis="I will convert your designs "
            description="into a fully functional and mobiles responsive website using React and Tailwind Css."
            bgColor="bg-yellow-200"
          />
          <Card
            title="Google Sheets"
            icon={<SiGooglesheets size={25} />}
            emphasis="Have Google Sheets work for you! "
            description="Let me automate your workflow. Using Apps Script and inline functions I can make your work easier than ever."
            bgColor="bg-green-200"
          />
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Services;
