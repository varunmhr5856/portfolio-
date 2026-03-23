"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { Terminal, Download, Mail } from "lucide-react";

const heroTitles = [
  "Ethical Hacking",
  "Network Security",
  "Penetration Testing",
  "Cybersecurity Research"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const activeTitle = heroTitles[titleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === activeTitle) {
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setText((prevText) => {
        if (isDeleting) return activeTitle.substring(0, prevText.length - 1);
        return activeTitle.substring(0, prevText.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Picture */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-12">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-cyber-green)] animate-[pulse_3s_infinite] opacity-50 shadow-[0_0_30px_var(--color-cyber-green)]" />
            <div className="absolute inset-4 rounded-full border border-[var(--color-cyber-blue)] opacity-40" />
            <img 
              src="/profile_new.jpg" 
              alt="Varun Mehrotra" 
              className="w-full h-full object-cover object-[center_15%] rounded-full border-2 border-white/10 relative z-10"
            />
          </div>


          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-glow">
            Varun <span className="text-[var(--color-cyber-green)]">Mehrotra</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-mono mb-8 h-8">
            <span className="text-white">Role:</span> {text}
            <span className="inline-block w-[2px] h-5 bg-[var(--color-cyber-green)] ml-1 animate-[blink-caret_.75s_step-end_infinite]"></span>
          </h2>

          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Cybersecurity Enthusiast | Network Security Learner | Computer Science Student
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeonButton color="green" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <Terminal size={18} className="mr-2" /> View Projects
            </NeonButton>
            <NeonButton color="blue" onClick={() => window.open("/resume.pdf", "_blank")}>
              <Download size={18} className="mr-2" /> Download CV
            </NeonButton>
            <NeonButton color="green" variant="solid" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail size={18} className="mr-2" /> Contact Me
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
