import { professionalProjectsData } from "@/mock/professionalProjectsData";
import { skillsData } from "@/mock/skillsData";
import { educationData } from "@/mock/educationData";
import { Bg } from "./Bg";
import { CountUp, Reveal } from "./Motion";

const wrap = "relative mx-auto max-w-[1312px]";
const sec = "relative overflow-hidden px-5 py-20 md:px-16 md:py-28";
const h2 = "text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-none tracking-[-0.04em]";

export function Private() {
  return (
    <section className={sec}>
      <Bg variant="redact" />
      <div className={wrap}>
        <Reveal><h2 className={h2}>Também construí, sob NDA.</h2></Reveal>
        <p className="mt-4 max-w-xl text-ink/70">
          Projetos privados, sem imagens. O que posso mostrar é o que fazem e com o que foram feitos.
        </p>
        <ul className="mt-12 divide-y divide-hair border-y border-hair">
          {professionalProjectsData.map((p, n) => (
            <Reveal as="li" delay={n * 0.06} key={p.title} className="grid gap-3 py-6 md:grid-cols-[3rem_1fr_1fr]">
              <span className="tabular-nums text-ink/50">{String(n + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 max-w-md text-sm text-ink/70">{p.summary}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2 text-xs font-medium">
                {p.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-hair px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className={sec}>
      <Bg variant="layers" />
      <div className={wrap}>
        <Reveal><h2 className={h2}>O que eu uso.</h2></Reveal>
        <dl className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {Object.entries(skillsData).map(([cat, items], n) => (
            <Reveal key={cat} delay={(n % 2) * 0.1}>
              <dt className="mb-3 flex items-baseline gap-2 text-sm font-semibold text-ink/50">{cat} <CountUp to={items.length} className="tabular-nums text-ink" /></dt>
              <dd className="text-lg leading-snug">{items.join(" · ")}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Studies() {
  return (
    <section id="estudos" className={sec}>
      <Bg variant="steps" />
      <div className={wrap}>
        <Reveal><h2 className={h2}>O que estudei.</h2></Reveal>
        <ul className="mt-12 divide-y divide-hair border-y border-hair">
          {educationData.map((e, n) => (
            <Reveal as="li" delay={n * 0.08} key={e.course} className="grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
              <div>
                <h3 className="text-xl font-semibold">{e.course}</h3>
                <p className="text-sm text-ink/70">{e.institution}</p>
              </div>
              <span className="text-sm text-ink/60">{e.period}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
