import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FaLink } from "react-icons/fa";

type CardProps = {
  content: string;
  name: string;
  link: string;
  siteTitle?: string;
  image: any;
};

const Card: React.FC<CardProps> = ({
  content,
  name,
  link,
  image,
  siteTitle,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        width={160}
        height={160}
        className=" rounded-full translate-y-1/2 border-8 border-[#f5eef0] border-solid"
        alt="a"
      />
      <div className="w-full bg-white p-4 rounded-lg min-h-[420px] flex flex-col items-center justify-between gap-8 pt-32">
        <div className="flex flex-col items-center gap-2">
          <ImQuotesLeft size={25} className="text-gray-300" />
          <p className="text-gray-600 text-xl px-12">{content}</p>
        </div>
        <div>
          <p className="text-center py-8 font-bold">{name}</p>

          <Link
            href={link}
            className={`${
              siteTitle ? " visible" : " invisible"
            } flex items-center gap-2 text-gray-400`}
          >
            {siteTitle}
            <FaLink />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
