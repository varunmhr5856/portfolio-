"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const skills = [
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/08f7fe" },
  { name: "C", icon: "https://cdn.simpleicons.org/c/08f7fe" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/00ff41" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/08f7fe" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/00ff41" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Nmap", icon: "/nmap-logo.png", textOnly: false },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/08f7fe", textOnly: false },
  { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/00ff41", textOnly: false },
  { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite/08f7fe", textOnly: false },
  { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/00ff41", textOnly: false },
  { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/08f7fe", textOnly: false },
  { name: "Networking", icon: "https://cdn.simpleicons.org/cisco/00ff41", textOnly: false },
  { name: "Fortinet", icon: "https://cdn.simpleicons.org/fortinet/00ff41", textOnly: false },
  { name: "Firewall", icon: "https://cdn.simpleicons.org/paloaltonetworks/08f7fe", textOnly: false }
];

// Doubling the skills array to create a seamless infinite marquee effect
const marqueeSkills = [...skills, ...skills, ...skills];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-12 relative overflow-hidden bg-[rgba(0,0,0,0.3)]">
      <div className="container px-4 md:px-6 mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack & Tools
        </h2>
        <div className="h-1 w-20 bg-[var(--color-cyber-blue)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-blue)]" />
      </div>

      <div className="w-full relative py-10 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,10,0.5)]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group perspective-1000">
                <GlassCard
                  interactive
                  glowColor="green"
                  className="flex flex-col items-center justify-center p-6 backdrop-blur-md transform-style-3d group-hover:rotate-x-12 group-hover:scale-105 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-[360deg]">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
                    />
                  </div>
                  <h3 className="font-mono text-white text-sm tracking-widest">{skill.name}</h3>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
