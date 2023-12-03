import React, { ReactElement } from "react";

type CardProps = {
  title: string;
  icon: ReactElement;
  description?: string;
  emphasis?: string;
};

const Card: React.FC<CardProps> = ({ title, icon, description, emphasis }) => {
  return (
    <div className="rounded-lg relative shadow-[#f5eef0] hover:shadow-xl px-4 py-8 h-[240px] ease-out duration-700">
      <div className="flex items-center gap-4 py-4">
        <div className="bg-blue-400 rounded-lg p-2">{icon}</div>
        <p className="font-bold text-xl md:text-3xl">{title}</p>
      </div>
      <p className="text-xl text-gray-600">
        <em className=" font-semibold not-italic">{emphasis}</em> {description}
      </p>
    </div>
  );
};

export default Card;
