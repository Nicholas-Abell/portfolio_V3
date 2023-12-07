import Wrapper from "@/components/shared/Wrapper";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Hero />
      <Services />
      <Testimonials />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
