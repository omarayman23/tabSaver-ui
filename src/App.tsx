import { Hero } from "./components/Hero";
import { About } from "./components/About"; // <-- Make sure this is uncommented
import { Experience } from "./components/Experience";
import { OpenSource } from "./components/OpenSource";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { WorkExperience } from "./components/WorkExperience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About /> {/* <-- This will now show "Education & Achievements" */}
      <Experience />
      <OpenSource />
      <Projects />
      <Skills />
      <Certificates />
      <WorkExperience /> {/* This will correctly show "Work Experience" */}
      <Contact />
    </div>
  );
}
