"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ShieldAlert } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;
      
      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-[var(--color-cyber-green)] bg-[rgba(0,255,65,0.05)] group-hover:border-[var(--color-cyber-blue)] group-hover:bg-[rgba(8,247,254,0.05)] transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] group-hover:shadow-[0_0_15px_rgba(8,247,254,0.4)]">
            <span className="font-mono font-bold text-xl tracking-tighter text-white group-hover:text-white transition-colors">
              V<span className="text-[var(--color-cyber-green)] group-hover:text-[var(--color-cyber-blue)] transition-colors">.</span>M
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "font-mono text-sm tracking-wide transition-all hover:text-[var(--color-cyber-green)] relative",
                active === link.href.replace("#", "") ? "text-[var(--color-cyber-green)]" : "text-gray-400"
              )}
            >
              {link.name}
              {active === link.href.replace("#", "") && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-cyber-green)] shadow-[0_0_8px_var(--color-cyber-green)]"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 glass-panel border-t border-[rgba(255,255,255,0.05)] py-4 flex flex-col md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "font-mono px-6 py-3 text-sm tracking-wide transition-all border-l-2",
                active === link.href.replace("#", "") 
                  ? "border-[var(--color-cyber-green)] bg-[rgba(0,255,65,0.05)] text-[var(--color-cyber-green)]" 
                  : "border-transparent text-gray-400 hover:text-[var(--color-cyber-green)] hover:bg-[rgba(0,255,65,0.02)]"
              )}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
