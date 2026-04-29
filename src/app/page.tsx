import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />

      <footer className="py-8 text-center text-gray-500 border-t border-white/5 font-mono text-sm">
        <p>&copy; {new Date().getFullYear()} Varun Mehrotra. All rights reserved.</p>
        <p className="opacity-50 mt-2 hover:opacity-100 hover:text-[var(--color-cyber-green)] transition-all cursor-default">System.exit(0);</p>
      </footer>
    </main>
  );
}
