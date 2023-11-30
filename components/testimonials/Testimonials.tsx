"use client";
import React from "react";
import Card from "./Card";
import profileImage from "../../public/profile.png";
import mary from "../../public/mary-kleine.jpg";
import { motion } from "framer-motion";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="w-full min-h-screen">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-3xl md:text-6xl font-bold py-8">
          Testimonials
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid lg:grid-cols-3 py-4 gap-4">
          <Card
            name="Mary"
            link="thistleandthornsllc.com"
            image={mary}
            content="lorem ipsadjf sdjfbkasjd flasdijfoiasesdfasdn fffffffffffffffffff fffffffaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaafffffnf lsajdfhn c a,sdfhoasild fjsfdh"
          />
          <Card
            name="Mary"
            link="thistleandthornsllc.com"
            image={profileImage}
            content="lorem ipsadjf sdjfbkasjd flasdijfoiasenf lsajdfhn ca,sdfhoasild fjsfdh"
          />
          <Card
            name="Mary"
            link="thistleandthornsllc.com"
            image={profileImage}
            content="lorem ipsadjf sdjfbkasjd flasdijfoiasenf lsajdfhn ca,sdfhoasild fjsfdh"
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Testimonials;
