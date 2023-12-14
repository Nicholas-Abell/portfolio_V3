"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FaLink } from "react-icons/fa";

type CardProps = {
  content: string;
  name: string;
  link?: string;
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
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex flex-col items-center drop-shadow-lg shadow-darkAccent">
      <Image
        src={image}
        width={160}
        height={160}
        onLoad={() => setLoading(false)}
        className={`rounded-full translate-y-1/2 border-8 border-light border-solid ${
          loading && "animate-pulse bg-gray-400"
        }`}
        alt={name}
        placeholder="blur"
        blurDataURL={image}
      />
      <div className="w-full bg-light p-4 rounded-lg flex flex-col items-center justify-between gap-2 md:gap-8 pt-24 h-full">
        <div className="flex flex-col items-center gap-2">
          <ImQuotesLeft size={25} className="text-main" />
          <p className="text-gray-600 text-xl px-4 md:px-12">{content}</p>
        </div>
        <div>
          <p className="text-center py-8 font-bold">{name}</p>

          {link && (
            <Link
              href={link}
              className="
               flex items-center gap-2 text-gray-400 whitespace-nowrap"
            >
              {siteTitle}
              <FaLink />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
