import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "green" | "blue";
  interactive?: boolean;
}

export function GlassCard({ children, className, glowColor, interactive = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-300",
        interactive && "cursor-pointer hover:-translate-y-2",
        interactive && glowColor === "green" && "hover-glow",
        interactive && glowColor === "blue" && "hover-glow-blue",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
