import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

type FeaturedProps = {};

const Featured: React.FC<FeaturedProps> = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-2">
      <div className="w-full">
        <div className="bg-gray-700 w-full h-[420px]" />
      </div>
      <div className="w-[90%] h-[420px] ml-[-120px] flex flex-col justify-between">
        <div>
          <p className="text-end pb-2">Featured Project</p>
          <h3 className="text-5xl text-end">Reddit Clone</h3>
        </div>
        <div className="bg-black py-4 px-8 rounded-lg">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolore quod alias accusamus numquam corrupti voluptatibus nobis
            aspernatur nulla repellat. Quasi suscipit voluptate voluptatibus
            neque placeat sequi modi esse odio!
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
          <FaGithub size={40} />
          <CgWebsite size={40} />
        </div>
      </div>
    </div>
  );
};
export default Featured;
