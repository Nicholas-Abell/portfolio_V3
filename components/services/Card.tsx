import React, { ReactElement } from "react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  icon: ReactElement;
  description?: string;
};

const Card: React.FC<CardProps> = ({ title, icon, description }) => {
  return (
    <div className="rounded-lg hover:bg-black hover:shadow-lg px-4 py-8 h-[240px] ease-out duration-700">
      <div className="flex items-center gap-4 py-2">
        <div className="bg-blue-400 rounded-lg p-2">{icon}</div>
        <p className="font-bold text-xl">{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
