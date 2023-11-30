import Image from "next/image";
import Link from "next/link";
import React from "react";

//test
import { FiAlertCircle } from "react-icons/fi";

type CardProps = {
  content: string;
  name: string;
  link: string;
  image: any;
};

const Card: React.FC<CardProps> = ({ content, name, link, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        width={160}
        height={160}
        className=" rounded-full translate-y-1/2"
        alt="a"
      />
      <div className="w-full bg-gray-500 p-8 rounded-lg min-h-[480px] flex flex-col items-center justify-between gap-8 pt-32">
        <p>{content}</p>
        <div>
          <p className="text-center py-8">{name}</p>
          <Link href={link}>Thistle&ThornsLLC</Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
