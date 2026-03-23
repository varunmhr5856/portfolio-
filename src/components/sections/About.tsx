"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Brain, Terminal, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-green)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-green)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-l-2 border-t-2 border-[var(--color-cyber-green)] opacity-50" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 border-r-2 border-b-2 border-[var(--color-cyber-blue)] opacity-50" />
              
              <GlassCard className="relative p-6 md:p-8 h-full flex flex-col justify-center overflow-hidden border-white/10 bg-[rgba(10,10,10,0.6)]">
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] font-sans">
                    I am a Computer Science and Engineering student at Lovely Professional University with a strong interest in cybersecurity, networking, and ethical hacking. I have experience working with security tools such as Nmap, Wireshark, Nikto, Splunk, and Cisco Packet Tracer, and I am skilled in programming languages including C++, C, Python, SQL, HTML, and CSS.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] font-sans">
                    I have worked as a freelance technical content writer and analyst, where I solved technical problems and reviewed educational content while maintaining high accuracy and quality. I have also developed cybersecurity research projects such as a Python-based keylogger, a Wi-Fi attack simulation system, and a comprehensive Splunk-based Active Directory monitoring lab to analyze and defend against real-world network vulnerabilities.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] font-sans">
                    Through certifications from Fortinet and Cisco and achievements on platforms like TryHackMe and HackerRank, I continuously work to strengthen my skills in cybersecurity and network security.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: Shield, title: "Ethical Hacking", proficiency: 92 },
                    { icon: Server, title: "Network Security", proficiency: 89 },
                    { icon: Brain, title: "Prompt Engineering", proficiency: 94 },
                    { icon: Terminal, title: "Development", proficiency: 87 }
                  ].map((item, i) => (
                    <GlassCard key={i} interactive glowColor="blue" className="relative flex flex-col items-center text-center p-4 group overflow-hidden">
                      <div className="w-10 h-10 rounded-full bg-[rgba(8,247,254,0.1)] flex items-center justify-center mb-2 text-[var(--color-cyber-blue)] group-hover:scale-0 transition-transform duration-300">
                        <item.icon size={20} />
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-2xl font-bold text-[var(--color-cyber-blue)] font-mono tracking-tighter">
                          {item.proficiency}%
                        </span>
                        <span className="text-[8px] text-gray-500 font-mono uppercase tracking-widest">Proficiency</span>
                      </div>

                      <div className="group-hover:opacity-0 transition-opacity duration-300 text-center">
                        <h4 className="font-bold text-white font-mono text-[10px] md:text-xs mb-1 uppercase tracking-tighter">{item.title}</h4>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,255,65,0.2)] to-transparent z-10 opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
            <img 
              src="/about-visual.png" 
              alt="Cybersecurity Visual" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[var(--color-cyber-green)]/30">
                <span className="text-[10px] text-[var(--color-cyber-green)] font-mono uppercase tracking-widest">Secure_Layer: Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
