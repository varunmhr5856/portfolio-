"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Github, Wifi, Keyboard, ShieldCheck, X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  details: string;
  tech: string[];
  icon: React.ElementType;
  github: string;
  color: "green" | "blue";
};

const projects: Project[] = [
  {
    title: "Active Directory Monitoring with Splunk",
    description: "Built a lab to monitor Active Directory using Splunk. Configured data inputs, created dashboards for AD logon events, analyzed security events, set up anomaly alerts, and generated activity reports using key Windows Event IDs.",
    details: "This project involved setting up a full SIEM lab environment integrating Active Directory with Splunk Enterprise. Key exercises included:\n\n• Configuring data inputs and Universal Forwarder to stream AD logs into Splunk\n• Building real-time dashboards visualizing logon success/failure events\n• Analyzing Windows Security Event IDs (4624, 4625, 4768, 4776, 4720) to detect anomalies\n• Setting up automated alerts for brute-force attempts and privilege escalation\n• Generating scheduled reports on user activity and access patterns\n\nThis hands-on lab strengthened understanding of SIEM deployment, log analysis, and proactive threat detection in enterprise environments.",
    tech: ["Splunk", "Active Directory", "Windows Server", "SIEM", "PowerShell"],
    icon: ShieldCheck,
    github: "https://github.com/varunmhr5856/active-directory-monitoring-splunk",
    color: "green",
  },
  {
    title: "Wi-Fi Attack System",
    description: "Simulated real-world Wi-Fi attack scenarios such as Evil Twin and deauthentication attacks to analyze wireless vulnerabilities.",
    details: "A comprehensive wireless security research project that simulated common Wi-Fi attack vectors:\n\n• Implemented Evil Twin attacks to intercept network traffic and analyze vulnerabilities\n• Performed deauthentication attacks using custom Scapy scripts to study 802.11 protocol weaknesses\n• Used ESP8266 microcontroller to conduct beacon flooding and probe sniffing\n• Documented network behavior changes and defensive countermeasures\n\nThis research project enhanced understanding of wireless protocol security and helped develop skills in network packet analysis and wireless penetration testing.",
    tech: ["Kali Linux", "Scapy", "ESP8266", "Python", "Wireshark"],
    icon: Wifi,
    github: "https://github.com/varunmhr5856/Wifi-Attack-System",
    color: "blue",
  },
  {
    title: "Python Keylogger",
    description: "Developed a Python keylogger for cybersecurity research to capture keystrokes and log them securely. Focuses on stealth and data persistence.",
    details: "A cybersecurity research tool built in Python to understand keylogging techniques used by malware:\n\n• Captured keystrokes silently in the background using the Pynput library\n• Implemented log file management with timestamped entries for each session\n• Added email-based exfiltration simulation to understand C2 communication patterns\n• Studied stealth techniques including process hiding and startup persistence\n• Used exclusively in controlled environments for educational and defensive research purposes\n\nThis project provided deep insight into how keyloggers work, enabling better understanding of how to detect and defend against them.",
    tech: ["Python", "Pynput", "SMTP", "Threading"],
    icon: Keyboard,
    github: "#",
    color: "green",
  }
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-green)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-green)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlassCard
                interactive
                glowColor={project.color}
                className="h-full flex flex-col group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none ${project.color === 'green' ? 'bg-[var(--color-cyber-green)]' : 'bg-[var(--color-cyber-blue)]'}`} />

                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${project.color === 'green' ? 'border-[var(--color-cyber-green)] bg-[rgba(0,255,65,0.1)] text-[var(--color-cyber-green)]' : 'border-[var(--color-cyber-blue)] bg-[rgba(8,247,254,0.1)] text-[var(--color-cyber-blue)]'}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white font-mono mb-3 group-hover:text-[var(--color-cyber-green)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <NeonButton
                      color={project.color}
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelected(project)}
                    >
                      View Project Details
                    </NeonButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative rounded-2xl border p-8 bg-[rgba(10,10,10,0.97)] backdrop-blur-xl shadow-2xl ${selected.color === 'green' ? 'border-[var(--color-cyber-green)] shadow-[0_0_40px_rgba(0,255,65,0.15)]' : 'border-[var(--color-cyber-blue)] shadow-[0_0_40px_rgba(8,247,254,0.15)]'}`}>

                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={24} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${selected.color === 'green' ? 'border-[var(--color-cyber-green)] bg-[rgba(0,255,65,0.1)] text-[var(--color-cyber-green)]' : 'border-[var(--color-cyber-blue)] bg-[rgba(8,247,254,0.1)] text-[var(--color-cyber-blue)]'}`}>
                    <selected.icon size={28} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold font-mono ${selected.color === 'green' ? 'text-[var(--color-cyber-green)]' : 'text-[var(--color-cyber-blue)]'}`}>
                      {selected.title}
                    </h3>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 text-xs font-mono rounded border ${selected.color === 'green' ? 'bg-[rgba(0,255,65,0.08)] text-[var(--color-cyber-green)] border-[rgba(0,255,65,0.3)]' : 'bg-[rgba(8,247,254,0.08)] text-[var(--color-cyber-blue)] border-[rgba(8,247,254,0.3)]'}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="text-gray-300 leading-relaxed text-sm whitespace-pre-line mb-8">
                  {selected.details}
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 flex-wrap">
                  {selected.github !== "#" && (
                    <a href={selected.github} target="_blank" rel="noopener noreferrer">
                      <NeonButton color={selected.color} variant="solid">
                        <Github size={16} className="mr-2" /> View on GitHub
                      </NeonButton>
                    </a>
                  )}
                  <NeonButton color="blue" variant="outline" onClick={() => setSelected(null)}>
                    Close
                  </NeonButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
