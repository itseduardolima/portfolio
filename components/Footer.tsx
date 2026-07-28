"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Send, Mail, MapPin, FileDown } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { profile } from "@/mock/profileData";

interface FooterProps {
  id?: string;
}

export function Footer({ id }: FooterProps) {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );

      toast.success("Mensagem transmitida com sucesso.");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Falha na transmissão. Tente novamente ou use o WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id={id} className="border-t border-line mt-28 lg:mt-40">
      <div className="max-w-rail mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          index="05"
          eyebrow="Contato"
          title="Vamos construir algo."
          description="Aberto para projetos freelance, consultorias e vagas remotas. Resposta em até 1 dia útil."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Panel className="p-6 lg:p-8">
              <p className="mono-caps text-[11px] text-faint mb-6">
                Formulário de contato
              </p>
              <form className="space-y-5" onSubmit={sendEmail}>
                <label className="block">
                  <span className="mono-caps text-[11px] text-muted">
                    <span className="text-amber">&gt;</span> nome
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full bg-transparent border-b border-line2 py-2 text-ink placeholder-faint focus:border-amber outline-none transition-colors font-body"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="block">
                  <span className="mono-caps text-[11px] text-muted">
                    <span className="text-amber">&gt;</span> email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full bg-transparent border-b border-line2 py-2 text-ink placeholder-faint focus:border-amber outline-none transition-colors font-body"
                    placeholder="voce@empresa.com"
                  />
                </label>
                <label className="block">
                  <span className="mono-caps text-[11px] text-muted">
                    <span className="text-amber">&gt;</span> mensagem
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-line2 py-2 text-ink placeholder-faint focus:border-amber outline-none transition-colors resize-none font-body"
                    placeholder="Conte sobre o projeto..."
                  />
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-md w-full mt-2 inline-flex items-center justify-center gap-2 bg-amber text-graphite font-mono text-sm font-semibold py-3.5 hover:bg-ink transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    "Transmitindo..."
                  ) : (
                    <>
                      Transmitir mensagem <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </Panel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <a
              href={`https://wa.me/${profile.phoneIntl}?text=${encodeURIComponent(
                "Olá Eduardo, vim pelo seu portfólio e quero conversar sobre um projeto."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="panel p-6 flex items-center justify-between group hover:border-amber transition-colors"
            >
              <div>
                <p className="mono-caps text-[11px] text-faint mb-1">Canal direto</p>
                <p className="font-display font-bold uppercase text-2xl text-ink">
                  Chamar no WhatsApp
                </p>
              </div>
              <span className="shrink-0 group-hover:scale-110 transition-transform">
                <WhatsAppIcon size={44} />
              </span>
            </a>

            <Panel className="p-6 flex-1">
              <p className="mono-caps text-[11px] text-faint mb-4">Coordenadas</p>
              <div className="space-y-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 py-2.5 border-b border-line text-sm text-ink hover:text-amber transition-colors"
                >
                  <Mail className="h-4 w-4 text-faint shrink-0" />
                  <span className="font-mono">{profile.email}</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 border-b border-line text-sm text-ink hover:text-amber transition-colors"
                >
                  <Github className="h-4 w-4 text-faint shrink-0" />
                  <span className="font-mono">{profile.githubHandle}</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 border-b border-line text-sm text-ink hover:text-amber transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-faint shrink-0" />
                  <span className="font-mono">{profile.linkedinHandle}</span>
                </a>
                <div className="flex items-center gap-3 py-2.5 border-b border-line text-sm text-ink">
                  <MapPin className="h-4 w-4 text-faint shrink-0" />
                  <span className="font-mono">{profile.location}</span>
                </div>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-3 py-2.5 text-sm text-ink hover:text-amber transition-colors"
                >
                  <FileDown className="h-4 w-4 text-faint shrink-0" />
                  <span className="font-mono">Baixar currículo (PDF)</span>
                </a>
              </div>
            </Panel>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-line">
          <p className="mono-caps text-[11px] text-faint">
            &copy; {new Date().getFullYear()} Eduardo Lima Castro · CNPJ {profile.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
