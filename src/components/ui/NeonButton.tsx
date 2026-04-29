import { cn } from "@/lib/utils";
import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "green" | "blue";
  variant?: "solid" | "outline";
}

export function NeonButton({ children, className, color = "green", variant = "outline", ...props }: NeonButtonProps) {
  const isGreen = color === "green";

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 font-mono text-sm font-medium transition-all duration-300 rounded-md overflow-hidden group",
        variant === "outline" ? "border-2 bg-transparent" : "",
        variant === "solid" ? "text-cyber-dark" : "",

        // Green Variant
        isGreen && variant === "outline" ? "border-[var(--color-cyber-green)] text-[var(--color-cyber-green)] hover:bg-[var(--color-cyber-green)] hover:text-black hover:shadow-[0_0_20px_var(--color-cyber-green)]" : "",
        isGreen && variant === "solid" ? "bg-[var(--color-cyber-green)] border-2 border-[var(--color-cyber-green)] hover:bg-transparent hover:text-[var(--color-cyber-green)] hover:shadow-[0_0_20px_var(--color-cyber-green)]" : "",

        // Blue Variant
        !isGreen && variant === "outline" ? "border-[var(--color-cyber-blue)] text-[var(--color-cyber-blue)] hover:bg-[var(--color-cyber-blue)] hover:text-black hover:shadow-[0_0_20px_var(--color-cyber-blue)]" : "",
        !isGreen && variant === "solid" ? "bg-[var(--color-cyber-blue)] border-2 border-[var(--color-cyber-blue)] hover:bg-transparent hover:text-[var(--color-cyber-blue)] hover:shadow-[0_0_20px_var(--color-cyber-blue)]" : "",

        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
