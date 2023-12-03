"use client";
import React from "react";
import Card from "./Card";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="w-full min-h-screen bg-[#f5eef0] mx-auto px-2.5 md:px-20 py-24">
      <FramerMotionWrapper variant="fromBottom">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">REVIEWS</p>
          <h2 className="text-4xl md:text-6xl">Testimonials</h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="grid lg:grid-cols-3 py-4 md:gap-4 px-8 md:px-0">
          <Card
            name="Mary"
            link="thistleandthornsllc.com"
            siteTitle="Thistle & Thorns LLC"
            image="/mary-kleine.jpg"
            content="Our site really took off! We didn't even know where to start, Nick just took over and a week later our site was live, and our shop was on google maps."
          />
          <Card
            name="Steve"
            link="https://smsconstructionandremodeling.com/"
            siteTitle="SMS Construction & Remodeling"
            image="/steve.jpg"
            content="lorem ipsadjf sdjfbkasjd flasdijfoiasenf lsajdfhn ca,sdfhoasild fjsfdh"
          />
          <Card
            name="Mary"
            link="thistleandthornsllc.com"
            image="/profile.png"
            content="lorem ipsadjf sdjfbkasjd flasdijfoiasenf lsajdfhn ca,sdfhoasild fjsfdh"
          />
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Testimonials;
