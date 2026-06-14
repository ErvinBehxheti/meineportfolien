import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Intro />
      <Marquee />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
