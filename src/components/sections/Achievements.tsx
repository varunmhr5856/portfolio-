"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Trophy, Medal, Hexagon, Star } from "lucide-react";

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setValue(Math.round(v));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={ref}>{value}</span>;
}

const achievements = [
  {
    title: " Day TryHackMe Streak",
    countTo: 50,
    platform: "TryHackMe",
    icon: Hexagon,
    color: "green" as const,
  },
  {
    title: "HackerRank Silver Badge",
    platform: "HackerRank",
    icon: Star,
    color: "blue" as const,
  },
  {
    title: "Patent: Intelligent Wearable for Real-Time Teacher Performance Assessment (ID: 31093)",
    platform: "Published Patent",
    icon: Medal,
    color: "green" as const,
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[rgba(10,10,10,0.5)]">
      {/* Abstract Background Shapes */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-cyber-blue)] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-cyber-green)] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-[var(--color-cyber-green)] mx-auto rounded-full shadow-[0_0_10px_var(--color-cyber-green)]" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 min-w-[300px] max-w-md perspective-1000"
            >
              <GlassCard 
                interactive 
                glowColor={item.color}
                className="relative overflow-hidden group flex items-center p-8 border-t-2 transform-style-3d hover:rotate-y-12 transition-all duration-500"
                style={{ borderTopColor: `var(--color-cyber-${item.color})` }}
              >
                {/* Badge Reflection Effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]" />

                <div className="relative z-10 flex items-center gap-6">
                  <div className={`relative flex items-center justify-center w-20 h-20 rounded-xl ${item.color === 'green' ? 'bg-[rgba(0,255,65,0.15)] text-[var(--color-cyber-green)]' : 'bg-[rgba(8,247,254,0.15)] text-[var(--color-cyber-blue)]'} shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-[var(--color-cyber-${item.color})] transition-colors`}>
                    <item.icon size={40} className="filter drop-shadow-[0_0_8px_currentColor]" />
                    {/* Corner accents */}
                    <div className="absolute top-1 left-1 w-1 h-1 bg-current rounded-full" />
                    <div className="absolute top-1 right-1 w-1 h-1 bg-current rounded-full" />
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-current rounded-full" />
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-current rounded-full" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-cyber-${item.color})] transition-colors font-mono">
                      {item.countTo ? (
                        <>
                          <AnimatedCounter from={0} to={item.countTo} />
                          {item.title}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                      <Trophy size={14} className={`text-[var(--color-cyber-${item.color})]`} />
                      {item.platform}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
