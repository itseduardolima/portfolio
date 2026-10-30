"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { products, type Product } from "@/mock/productsData";
import { Bg } from "./Bg";
import { Float } from "./Motion";

const N = products.length;
const bgVariant = ["arcs", "circles", "barcode"] as const;
const bgTone = ["text-white/10", "text-[#9DE86B]/15", "text-[#3A1A2A]/15"];
const pad = (n: number) => String(n).padStart(2, "0");

// Each slide holds still for a quarter of its scroll range, then slides over the middle half.
const inputs = [0];
const outputs = ["0%"];
for (let t = 0; t < N - 1; t++) {
  inputs.push((t + 0.25) / (N - 1), (t + 0.75) / (N - 1));
  outputs.push(`${(-t / N) * 100}%`, `${(-(t + 1) / N) * 100}%`);
}
inputs.push(1);
outputs.push(`${(-(N - 1) / N) * 100}%`);

export function Products() {
  const wrap = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, inputs, outputs);
  useMotionValueEvent(scrollYProgress, "change", (v) => setI(Math.round(v * (N - 1))));

  const goTo = useCallback((to: number) => {
    const el = wrap.current;
    if (!el) return;
    const k = Math.min(Math.max(to, 0), N - 1);
    const top = el.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + (k / (N - 1)) * (el.offsetHeight - innerHeight), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const r = wrap.current?.getBoundingClientRect();
      if (!r || r.top > 0 || r.bottom < innerHeight) return;
      if (e.key === "ArrowRight") goTo(i + 1);
      if (e.key === "ArrowLeft") goTo(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, goTo]);

  return (
    <section id="produtos" aria-roledescription="carrossel">
      <div ref={wrap} style={{ height: `${N * 100}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-plaster">
          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-2 px-5 py-4 md:px-16">
            <div role="tablist" className="flex gap-5 text-sm font-medium md:gap-10">
              {products.map((p, n) => (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={n === i}
                  onClick={() => goTo(n)}
                  className={n === i ? "border-b-2 border-ink pb-1" : "pb-1 text-ink/50 hover:text-ink"}
                >
                  {pad(n + 1)} {p.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="tabular-nums text-ink/60">
                {pad(i + 1)} / {pad(N)}
              </span>
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  onClick={() => goTo(i + d)}
                  aria-label={d < 0 ? "Anterior" : "Próximo"}
                  className="grid size-10 place-items-center rounded-full border border-ink/30 hover:bg-ink hover:text-plaster"
                >
                  {d < 0 ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </button>
              ))}
            </div>
          </div>

          <motion.div style={{ x, width: `${N * 100}%` }} className="flex min-h-0 flex-1">
            {products.map((p, n) => (
              <Slide key={p.name} p={p} n={n} />
            ))}
          </motion.div>

          <div className="h-1 bg-ink/10">
            <motion.div className="h-full origin-left bg-ink" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide({ p, n }: { p: Product; n: number }) {
  return (
    <article
      className="relative flex h-full items-center overflow-hidden px-5 md:px-16"
      style={{ width: `${100 / N}%`, background: p.bg, color: p.fg }}
    >
      <Bg variant={bgVariant[n]} className={bgTone[n]} />
      <div className="relative mx-auto grid w-full max-w-[1312px] items-center gap-6 lg:grid-cols-[4fr_8fr] lg:gap-12">
        <div>
          <p className="mb-2 text-sm font-medium md:mb-4" style={{ color: p.accent }}>
            {p.tag}
          </p>
          <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.04em]">
            {p.name}
          </h2>
          <p className="mt-4 max-w-md text-base leading-snug md:mt-6 md:text-lg">{p.summary}</p>
          <p className="mt-3 text-sm opacity-70">{p.status}</p>
          {p.stack && (
            <ul className="mt-5 hidden flex-wrap gap-2 text-xs font-medium md:flex">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border px-3 py-1" style={{ borderColor: `${p.fg}55` }}>
                  {s}
                </li>
              ))}
            </ul>
          )}
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4 md:mt-8"
            >
              Ver no GitHub <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <Shots p={p} />
      </div>
    </article>
  );
}

function Shots({ p }: { p: Product }) {
  const alt = (n: number) => `Tela ${n + 1} do ${p.name}`;
  if (p.kind === "mobile") {
    return (
      <div className="flex h-[42vh] items-center justify-center gap-2 lg:h-[72vh]">
        {p.shots.map((src, n) => (
          <Float key={src} delay={n * 0.8} className="h-[82%]">
            <Image src={src} alt={alt(n)} width={1179} height={2556} draggable={false} sizes="25vw" className="h-full w-auto rounded-[1.6rem] shadow-2xl" />
          </Float>
        ))}
      </div>
    );
  }
  return (
    <div className="relative flex h-[42vh] items-center lg:h-[72vh]">
      {p.shots.map((src, n) => (
        <Float key={src} delay={n * 1.2} className={n === 0 ? "w-[92%]" : "absolute bottom-0 right-0 w-[72%]"}>
          <Image src={src} alt={alt(n)} width={1752} height={1000} draggable={false} sizes="(min-width:1024px) 55vw, 100vw" className="w-full rounded-xl shadow-2xl" />
        </Float>
      ))}
    </div>
  );
}
