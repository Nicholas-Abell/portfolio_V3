import Wrapper from "@/components/shared/Wrapper";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    // <Wrapper>
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Projects />
    </main>
    // </Wrapper>
  );
}
