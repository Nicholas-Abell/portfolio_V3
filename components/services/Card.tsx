import React, { ReactElement } from "react";

type CardProps = {
  title: string;
  icon: ReactElement;
  description?: string;
  emphasis?: string;
  bgColor?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  emphasis,
  bgColor,
}) => {
  return (
    <div className="bg-gradient-to-r from-dark to-darker text-light rounded-lg relative shadow-accent hover:shadow-xl lg:hover:scale-105 px-4 py-8 h-[240px] ease-out duration-700">
      <div className="flex items-center gap-4 py-4">
        <div className={`${bgColor} rounded-lg p-2 text-gray-700`}>{icon}</div>
        <p className="font-bold text-xl md:text-3xl">{title}</p>
      </div>
      <p className="text-xl">
        <em className="font-semibold not-italic text-darkAccent">
          {emphasis}{" "}
        </em>
        {description}
      </p>
    </div>
  );
};

export default Card;
