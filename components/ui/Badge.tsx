import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "lime" | "blue" | "coral";
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span className={cn("badge", `badge-${tone}`, className)} {...props} />
  );
}
