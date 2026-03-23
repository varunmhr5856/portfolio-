"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DRAGON_PATTERN = [
  "            ___           ",
  "           /   \\          ",
  "      ____/  (o) \\        ",
  "    /              \\      ",
  "   /   /------------'      ",
  "  /   /  _______           ",
  " (   (  /       \\          ",
  "  \\   \\/         \\         ",
  "   \\   \\          \\        ",
  "    \\   \\          \\____   ",
  "     \\   \\              \\  ",
  "      \\   \\_____________/  ",
  "       \\                  ",
  "        \\________________  "
];

// A much larger, more majestic dragon ASCII for the matrix masking
const DRAGON_ASCII = [
  "                                                                               ",
  "                                     _                                         ",
  "                                  -====-_-====___                              ",
  "                            _--^^^#####//      \\\\#####^^^--_                  ",
  "                         _-^##########// (    ) \\\\##########^-                ",
  "                        -############//  |\\^^/|  \\\\############-              ",
  "                      _/############//   (@::@)   \\\\############\\_            ",
  "                     /#############((     \\\\//     ))#############\\           ",
  "                    -###############\\\\    (oo)    //###############-          ",
  "                   -#################\\\\  / VV \\  //#################-         ",
  "                  -###################\\\\/      \\//###################-        ",
  "                  _#/|##########/\\######(   /\\   )######/\\##########|\\#_      ",
  "                  |/ |# /\\# /\\#|  |# /\\#  \\_|  |_/  # /\\#|  |# /\\# /\\# | \\     ",
  "                  `  |/  V  V  |  |/  V  |\\____/|  V  \\|  |/  V  V  |  '      ",
  "                     `         `  `      /      \\      '  '         '         ",
  "                                        (________)                              ",
  "                                                                               ",
  "             _                                                                 ",
  "            / \\      _-'                                                       ",
  "          _/|  \\-''- _ /                                                       ",
  "     __-' { |          \\                                                       ",
  "         /             \\                                                       ",
  "         /       \"o.  |o\"                                                      ",
  "         |            \\                                                        ",
  "         \\            /                                                        ",
  "          \\_    (_   /                                                         ",
  "            \"--__\\_\\_/                                                         "
];

export function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%&@#<>[]{}";
    
    // Dragon mask data
    const dragonWidth = DRAGON_ASCII[0].length;
    const dragonHeight = DRAGON_ASCII.length;
    const startX = Math.floor((columns - dragonWidth) / 2);
    const startY = Math.floor((Math.floor(canvas.height / fontSize) - dragonHeight) / 2);

    function draw() {
      if (!ctx || !canvas) return;
      
      // Semi-transparent background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Check if character is within the dragon shape
        const gridX = i - startX;
        const gridY = drops[i] - startY;
        
        let isDragon = false;
        if (gridY >= 0 && gridY < dragonHeight && gridX >= 0 && gridX < dragonWidth) {
          if (DRAGON_ASCII[gridY][gridX] !== " ") {
            isDragon = true;
          }
        }

        // Color logic
        if (isDragon) {
          ctx.fillStyle = "#00ff41"; // Strong cyber green for dragon
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00ff41";
        } else {
          ctx.fillStyle = "#003200"; // Darker green for background rain
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset drop to top if it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 100);

    // Auto-complete after 4.5 seconds
    const timer = setTimeout(() => {
      setComplete(true);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          
          {/* Subtle Scanning Line */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[rgba(0,255,65,0.03)] to-transparent h-40 animate-[scan_4s_linear_infinite]" style={{ top: '-20%' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
