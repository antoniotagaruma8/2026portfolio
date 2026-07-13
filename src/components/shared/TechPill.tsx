import { cn } from "@/lib/utils";

interface TechPillProps {
  label: string;
  className?: string;
}

export function TechPill({ label, className }: TechPillProps) {
  return (
    <span className={cn("tech-pill", className)}>
      {label}
    </span>
  );
}
