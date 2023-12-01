"use client";
import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import Card from "./Card";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-12 mx-auto px-2.5 md:px-20 py-24 text-stone-700">
      <FramerMotionWrapper variant="fromBottom">
        <h2 className="text-center text-4xl md:text-6xl py-8">My Services</h2>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-2 md:px-24 py-4">
          <Card
            title="Web Development"
            icon={<FiChevronsUp size={25} />}
            description="I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly."
          />
          <Card
            title="Seo"
            icon={<FiChevronsUp size={25} />}
            description="A greater audience. A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door."
          />
          <Card
            title="Seo"
            icon={<FiChevronsUp size={25} description="asdjf;laskdjfaksf" />}
            description="A greater audience. A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door."
          />
          <Card
            title="Seo"
            icon={
              <FiChevronsUp
                size={25}
                description="A greater audience. A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door."
              />
            }
            description="A greater audience. A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door."
          />
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Services;
