import Image from "next/image";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/assets/icons/whatsappIcon.svg"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
    />
  );
}
