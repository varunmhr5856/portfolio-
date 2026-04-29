"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Brain, Terminal, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
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

        <div className="flex flex-col gap-12">
          {/* Top Row: Bio and Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <GlassCard className="relative p-8 overflow-hidden before:absolute before:-left-12 before:-top-12 before:w-48 before:h-48 before:bg-[var(--color-cyber-blue)] before:rounded-full before:opacity-10 before:blur-3xl">
                <p className="text-gray-300 leading-relaxed text-[15px] mb-4">
                  I am a Computer Science and Engineering student at Lovely Professional University with a strong interest in cybersecurity, networking, and ethical hacking. I have experience working with security tools such as Nmap, Wireshark, Nikto, Splunk, and Cisco Packet Tracer, and I am skilled in programming languages including C++, C, Python, SQL, HTML, and CSS.
                </p>
                <p className="text-gray-300 leading-relaxed text-[15px] mb-4">
                  I have worked as a freelance technical content writer and analyst, where I solved technical problems and reviewed educational content while maintaining high accuracy and quality. I have also developed cybersecurity research projects such as a Python-based keylogger, a Wi-Fi attack simulation system, and a comprehensive Splunk-based Active Directory monitoring lab to analyze and defend against real-world network vulnerabilities.
                </p>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  Through certifications from Fortinet and Cisco and achievements on platforms like TryHackMe and HackerRank, I continuously work to strengthen my skills in cybersecurity and network security.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="relative rounded-full overflow-hidden border-4 border-white/10 group aspect-square max-w-[300px] mx-auto shadow-2xl transition-all duration-500 hover:border-[var(--color-cyber-green)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] hover:-translate-y-2">
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,255,65,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                
                {/* Image */}
                <img 
                  src="/profile_new.jpg" 
                  alt="Varun Mehrotra" 
                  className="w-full h-full object-cover object-[60%_top] transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Inner animating ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-[var(--color-cyber-green)] opacity-0 group-hover:opacity-50 transition-all duration-500 z-20 scale-110 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Skills Tiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: "Ethical Hacking", desc: "Vulnerability analysis", proficiency: 92 },
              { icon: Server, title: "Network Security", desc: "Defensive systems", proficiency: 89 },
              { icon: Brain, title: "Prompt Engineering", desc: "AI interaction", proficiency: 94 },
              { icon: Terminal, title: "Development", desc: "Secure coding", proficiency: 87 }
            ].map((item, i) => (
              <GlassCard key={i} interactive glowColor="blue" className="relative flex flex-col items-center text-center p-6 group overflow-hidden h-full">
                <div className="w-12 h-12 rounded-full bg-[rgba(8,247,254,0.1)] flex items-center justify-center mb-4 text-[var(--color-cyber-blue)] group-hover:scale-0 transition-transform duration-300">
                  <item.icon size={24} />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-3xl font-bold text-[var(--color-cyber-blue)] font-mono tracking-tighter">
                    {item.proficiency}%
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">Proficiency</span>
                </div>

                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className="font-bold text-white font-mono text-sm mb-2 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
