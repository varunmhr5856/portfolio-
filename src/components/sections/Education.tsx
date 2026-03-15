"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    score: "CGPA: 7.1",
    date: "2023 – Present",
    icon: GraduationCap,
  },
  {
    institution: "Dr Virendra Swarup Education Centre School",
    degree: "Intermediate",
    score: "63%",
    date: "Completed",
    icon: BookOpen,
  },
  {
    institution: "Dr Virendra Swarup Education Centre School",
    degree: "Matriculation",
    score: "65%",
    date: "Completed",
    icon: School,
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ backgroundImage: 'linear-gradient(var(--color-cyber-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-cyber-green) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
           
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-green)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-green)]" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[rgba(0,255,65,0.2)] md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center md:items-start flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-cyber-dark)] border-2 border-[var(--color-cyber-green)] shadow-[0_0_10px_var(--color-cyber-green)] flex items-center justify-center z-10 z-[1] mt-1 md:mt-0">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-green)] animate-pulse" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,255,65,0.2)] hover:border-[rgba(0,255,65,0.4)] transition-all duration-300 group">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 && 'md:justify-end'}`}>
                      <item.icon className="text-[var(--color-cyber-green)] group-hover:scale-110 transition-transform" size={24} />
                      <h3 className="text-xl font-bold text-white font-mono">{item.degree}</h3>
                    </div>
                    
                    <h4 className="text-[var(--color-cyber-blue)] text-lg mb-2">{item.institution}</h4>
                    
                    <div className={`flex items-center gap-4 text-sm text-gray-400 ${index % 2 !== 0 && 'md:justify-end'}`}>
                      <span className="bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wider">{item.date}</span>
                      <span className="font-mono text-[var(--color-cyber-green)]">{item.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
