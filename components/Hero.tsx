"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { profile } from "@/mock/profileData";
import { products } from "@/mock/productsData";
import { Bg } from "./Bg";
import { Parallax } from "./Motion";

const title = "Faço produtos inteiros, do banco de dados à tela.".split(" ");

export function Hero() {
  const h1 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(h1.current!.querySelectorAll("span > span"), {
      translateY: ["110%", "0%"],
      duration: 900,
      delay: stagger(70),
      ease: "outExpo",
    });
  }, []);

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-16 md:pt-48">
      <Bg variant="river" className="text-ink/[0.12]" />
      <div className="relative mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
        <Parallax distance={40}><h1
          ref={h1}
          aria-label={title.join(" ")}
          className="text-[clamp(3rem,9vw,8.25rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
        >
          {title.map((w, i) => (
            <span key={i} aria-hidden className="mr-[0.22em] -mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom">
              <span className="inline-block">{w}</span>
            </span>
          ))}
        </h1></Parallax>
        <Parallax distance={90} className="space-y-6">
          <p className="text-lg leading-snug">
            Sou {profile.name.split(" ")[0]}, dev fullstack. Desenho, construo e coloco no ar: da API ao
            pixel.
          </p>
          <p className="text-sm text-ink/60">{profile.availability}</p>
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            {products.map((p) => (
              <li key={p.name} className="flex items-center gap-2">
                <span className="size-3 rounded-full" style={{ background: p.bg }} />
                {p.name}
              </li>
            ))}
          </ul>
        </Parallax>
      </div>
    </section>
  );
}
