"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { animate, stagger, svg } from "animejs";

type Variant = "river" | "arcs" | "circles" | "barcode" | "redact" | "layers" | "steps";

const W = 1440;
const H = 800;

const river = Array.from({ length: 7 }, (_, i) => {
  const y = 120 + i * 90;
  return `M-20 ${y} C 280 ${y - 90}, 520 ${y + 90}, 780 ${y} S 1240 ${y - 80}, 1460 ${y + 20}`;
});

const shapes: Record<Variant, JSX.Element> = {
  river: <>{river.map((d) => <path key={d} d={d} data-draw />)}</>,
  arcs: (
    <>
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={i} cx={1240} cy={420} r={110 + i * 85} data-draw />
      ))}
    </>
  ),
  circles: (
    <>
      {[[1150, 360, 260], [1020, 470, 170], [1290, 520, 120], [880, 250, 80]].map(([x, y, r]) => (
        <circle key={x} cx={x} cy={y} r={r} data-draw />
      ))}
    </>
  ),
  barcode: (
    <>
      {Array.from({ length: 34 }, (_, i) => (
        <rect key={i} x={760 + i * 20} y={140} width={4 + ((i * 7) % 5) * 3} height={520} data-fade />
      ))}
    </>
  ),
  redact: (
    <>
      {[420, 300, 360, 220, 340, 260].map((w, i) => (
        <rect key={i} x={W - w - 60} y={90 + i * 48} width={w} height={22} rx={3} data-fade />
      ))}
    </>
  ),
  layers: (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <rect key={i} x={860 + i * 36} y={80 + i * 44} width={420} height={260} rx={22} data-draw />
      ))}
    </>
  ),
  steps: <path d="M0 720 H220 V620 H440 V520 H660 V420 H880 V320 H1100 V220 H1320 V120 H1460" data-draw />,
};

export function Bg({ variant, className = "text-ink/10" }: { variant: Variant; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const inView = useInView(box, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({ target: box, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const still = useReducedMotion();

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = box.current!;
    const lines = root.querySelectorAll("[data-draw]");
    const fills = root.querySelectorAll("[data-fade]");
    if (lines.length) {
      animate(svg.createDrawable(lines as unknown as string), {
        draw: ["0 0", "0 1"],
        duration: 1800,
        delay: stagger(120),
        ease: "inOutQuad",
      });
    }
    if (fills.length) {
      animate(fills as unknown as string, { opacity: [0, 1], duration: 900, delay: stagger(25) });
    }
  }, [inView]);

  return (
    <div ref={box} aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.svg
        style={{ y }}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill={variant === "barcode" || variant === "redact" ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={variant === "barcode" || variant === "redact" ? 0 : 1.5}
      >
        <motion.g
          animate={still ? undefined : { x: [0, 10, 0], y: [0, -14, 0] }}
          transition={{ duration: 10 + (variant.length % 4) * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {shapes[variant]}
        </motion.g>
      </motion.svg>
    </div>
  );
}
