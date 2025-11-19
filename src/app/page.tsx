import Image from "next/image";
import Header from "../../components/header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import ContactMe from "../../components/ContactMe";
import SkillItem from "../../components/SkillsItem";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Contact Me Section */}
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>

    </div>
  );
}
