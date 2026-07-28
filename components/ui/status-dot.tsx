import { cn } from "@/lib/utils";

export function StatusDot({
  color = "signal",
  className,
}: {
  color?: "signal" | "amber";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block h-[7px] w-[7px] rounded-full",
        color === "signal"
          ? "bg-signal status-pulse"
          : "bg-amber status-pulse-amber",
        className
      )}
      aria-hidden="true"
    />
  );
}
