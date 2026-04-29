"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    icon: ShieldCheck,
    color: "green" as const,
    link: "https://drive.google.com/file/d/1bbTb0yorZmMn3TXJopTi2EnyJa2BGbyE/view",
  },
  {
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    icon: ShieldCheck,
    color: "green" as const,
    link: "https://drive.google.com/file/d/1Ko9FidpYfOLiT6csaLCvJs8faTnfGuX_/view",
  },
  {
    title: "Cyber Security Training",
    issuer: "Lovely Professional University",
    icon: Award,
    color: "blue" as const,
    link: "https://drive.google.com/file/d/1rayWgsO9uqv6ieA8mvJ2Vw0ZDDtmqHHE/view",
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
    color: "blue" as const,
    link: "https://drive.google.com/file/d/18eiAx8rntisEksYZlxbsKHyyNSDtpX-o/view",
  },
  {
    title: "Splunk Search Expert Specialization",
    issuer: "Splunk Inc.",
    icon: Award,
    color: "green" as const,
    link: "https://drive.google.com/file/d/1Fp0c2Eq86DMmF6XcSDSHnORW_n4dbVEG/view",
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-12 relative bg-[rgba(0,0,0,0.3)] border-y border-[rgba(255,255,255,0.02)]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-blue)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-blue)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
                <GlassCard
                  interactive
                  glowColor={cert.color}
                  className="h-full flex flex-col items-center text-center p-8 group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[0_0_20px_inherit] transition-all duration-300 ${cert.color === 'green' ? 'bg-[rgba(0,255,65,0.1)] text-[var(--color-cyber-green)]' : 'bg-[rgba(8,247,254,0.1)] text-[var(--color-cyber-blue)]'}`}>
                    <cert.icon size={32} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-glow transition-all">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-auto">
                    {cert.issuer}
                  </p>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
