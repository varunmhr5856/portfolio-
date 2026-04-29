"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Phone, Github, Linkedin, Send, TerminalSquare, CheckCircle, AlertCircle, Loader, ChevronDown } from "lucide-react";

// Replace YOUR_FORM_ID with the ID from https://formspree.io/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeerknno";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-12 relative bg-[rgba(0,0,0,0.5)] border-t border-[rgba(255,255,255,0.05)]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Establish Connection
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-blue)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-blue)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white font-mono flex items-center gap-2 mb-4">
                <TerminalSquare className="text-[var(--color-cyber-blue)]" /> Contact Information
              </h3>
              <p className="text-gray-400">
                Interested in collaborating on a security research project, or have an opportunity to discuss? Establish a secure connection via the following channels.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:varunmhr8872@gmail.com" className="group flex items-center gap-4 p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-cyber-blue)] hover:bg-[rgba(8,247,254,0.05)] transition-all">
                <div className="w-12 h-12 rounded-full bg-[rgba(10,10,10,0.5)] flex items-center justify-center text-[var(--color-cyber-blue)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(8,247,254,0.5)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono uppercase">Email</p>
                  <p className="text-white group-hover:text-[var(--color-cyber-blue)] transition-colors">varunmhr8872@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919839600900" className="group flex items-center gap-4 p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-cyber-blue)] hover:bg-[rgba(8,247,254,0.05)] transition-all">
                <div className="w-12 h-12 rounded-full bg-[rgba(10,10,10,0.5)] flex items-center justify-center text-[var(--color-cyber-blue)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(8,247,254,0.5)] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono uppercase">Phone</p>
                  <p className="text-white group-hover:text-[var(--color-cyber-blue)] transition-colors">+91 9839600900</p>
                </div>
              </a>
            </div>

            <div className="pt-8 flex gap-6">
              <a href="https://github.com/varunmhr5856" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-cyber-blue)] hover:scale-110 transition-all">
                <Github size={28} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/varun-mehrotra-0bb829284/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-cyber-blue)] hover:scale-110 transition-all">
                <Linkedin size={28} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Secure Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 blur-sm group-hover:opacity-30 group-hover:blur-none transition-all duration-700 text-[var(--color-cyber-blue)] pointer-events-none">
                <TerminalSquare size={120} />
              </div>

              <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                Send Encrypted Payload
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="text-[var(--color-cyber-blue)]">{">"}</span> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:shadow-[0_0_10px_rgba(8,247,254,0.2)] transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="text-[var(--color-cyber-blue)]">{">"}</span> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:shadow-[0_0_10px_rgba(8,247,254,0.2)] transition-all font-mono text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="purpose" className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="text-[var(--color-cyber-blue)]">{">"}</span> Purpose
                  </label>
                  <div className="relative">
                    <select
                      id="purpose"
                      name="purpose"
                      required
                      defaultValue=""
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:shadow-[0_0_10px_rgba(8,247,254,0.2)] transition-all font-mono text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-gray-500">Select Purpose...</option>
                      <option value="Internship" className="bg-[#0a0a0a]">Internship</option>
                      <option value="Freelancing Work" className="bg-[#0a0a0a]">Freelancing Work</option>
                      <option value="Project Collaboration" className="bg-[#0a0a0a]">Project Collaboration</option>
                      <option value="Job Opportunity" className="bg-[#0a0a0a]">Job Opportunity</option>
                      <option value="Other" className="bg-[#0a0a0a]">Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="text-[var(--color-cyber-blue)]">{">"}</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:shadow-[0_0_10px_rgba(8,247,254,0.2)] transition-all font-mono text-sm resize-none"
                    placeholder="Enter payload data..."
                  />
                </div>

                {status === "success" ? (
                  <div className="flex items-center gap-2 justify-center text-[var(--color-cyber-green)] font-mono py-3">
                    <CheckCircle size={18} /> Message sent! I will get back to you soon.
                  </div>
                ) : status === "error" ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center text-red-400 font-mono text-sm py-2">
                      <AlertCircle size={18} /> Something went wrong. Please try again.
                    </div>
                    <NeonButton type="submit" color="blue" variant="outline" className="w-full">
                      <Send size={18} className="mr-2" /> Retry
                    </NeonButton>
                  </div>
                ) : (
                  <NeonButton type="submit" color="blue" variant="outline" className="w-full" disabled={["loading"].includes(status)}>
                    {status === "loading" ? (
                      <><Loader size={18} className="mr-2 animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} className="mr-2" /> Transmit Message</>
                    )}
                  </NeonButton>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
