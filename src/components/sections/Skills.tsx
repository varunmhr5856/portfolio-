"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const skills = [
  { name: "Nmap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Wireshark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
  { name: "Splunk", icon: "https://www.splunk.com/favicon.ico" },
  { name: "Metasploit", icon: "https://www.metasploit.com/favicon.ico" },
  { name: "Kali Linux", icon: "https://www.kali.org/images/kali-logo.svg" },
  { name: "Burp Suite", icon: "https://portswigger.net/favicon.ico" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[rgba(5,5,5,0.3)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tools & Technologies
        </h2>
        <div className="h-1 w-20 bg-[var(--color-cyber-blue)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-blue)]" />
      </motion.div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-32 md:w-40 group perspective-1000">
              <GlassCard
                interactive
                glowColor={index % 2 === 0 ? "green" : "blue"}
                className="flex flex-col items-center justify-center p-4 h-full backdrop-blur-md transform-style-3d group-hover:rotate-x-12 group-hover:scale-105 transition-all duration-500 border-white/5 bg-[rgba(15,15,15,0.4)]"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-10 h-10 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_8px_${index % 2 === 0 ? 'rgba(0,255,65,0.8)' : 'rgba(8,247,254,0.8)'}]`}
                  />
                </div>
                <h3 className="font-mono text-white text-[10px] md:text-xs tracking-widest">{skill.name}</h3>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
