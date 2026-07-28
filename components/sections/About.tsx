"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Panel, PanelRow } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { profile } from "@/mock/profileData";

interface AboutSectionProps {
  fadeInUp: object;
  id?: string;
}

export function AboutSection({ fadeInUp, id }: AboutSectionProps) {
  return (
    <section id={id} className="pt-28 lg:pt-36">
      {/* Hero / nameplate */}
      <div className="relative">
        <div
          className="bp-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start pb-20 lg:pb-28">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
              <StatusDot color="signal" />
              <span className="mono-caps text-xs text-muted">
                Dev Fullstack — Manaus, BR
              </span>
            </div>
            <h1 className="font-display font-black uppercase text-[13vw] sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight text-ink">
              Do problema
              <br />
              ao <span className="text-amber">produto</span>
              <br />
              em produção.
            </h1>
            <p className="mt-6 max-w-xl text-muted text-base lg:text-lg leading-relaxed">
              Fullstack pleno responsável pelo ciclo completo do software —
              arquitetura, implementação e manutenção. Crio sites, sistemas
              web e lojas virtuais sob medida para empresas e profissionais,
              além de atuar em vagas freelance e remotas.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-md bg-amber text-graphite font-mono text-sm font-semibold px-6 py-3.5 hover:bg-ink transition-colors"
              >
                <WhatsAppIcon size={16} /> Contratar / falar comigo
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-md border border-line2 text-ink font-mono text-sm px-6 py-3.5 hover:border-amber hover:text-amber transition-colors"
              >
                Ver projetos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Panel className="p-6">
              <p className="mono-caps text-[11px] text-faint mb-1">Ficha técnica</p>
              <div>
                <PanelRow label="Unidade" value={profile.name} />
                <PanelRow label="Função" value={profile.role} />
                <PanelRow label="Localização" value={profile.location} />
                <PanelRow
                  label="Status"
                  value={
                    <span className="inline-flex items-center gap-2 justify-end">
                      <StatusDot color="signal" /> Disponível
                    </span>
                  }
                />
                <PanelRow label="Stack core" value={profile.stackCore.join(" · ")} />
              </div>
            </Panel>
          </motion.div>
        </div>
      </div>

      {/* Resumo + serviços */}
      <SectionHeading index="01" eyebrow="Sobre" title="Resumo" description={profile.summary} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 lg:mb-32">
        {profile.services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Panel className="p-6 h-full">
              <span className="font-mono text-xs text-amber">
                0{i + 1}
              </span>
              <h3 className="font-display font-bold uppercase text-xl text-ink mt-3 mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </Panel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
