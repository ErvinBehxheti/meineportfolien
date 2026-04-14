import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
