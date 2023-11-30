import React from "react";
import Card from "./Card";
import profileImage from "../../public/profile.png";
import mary from "../../public/mary-kleine.jpg";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-3xl md:text-6xl font-bold py-8">
        Testimonials
      </h2>
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
    </section>
  );
};
export default Testimonials;
