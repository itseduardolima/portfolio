import { profile } from "@/mock/profileData";
import { Bg } from "./Bg";

const cols = [
  {
    title: "Contato",
    links: [
      [profile.email, `mailto:${profile.email}`],
      [profile.phone, `https://wa.me/${profile.phoneIntl}`],
    ],
  },
  {
    title: "Perfis",
    links: [
      ["GitHub", profile.github],
      ["LinkedIn", profile.linkedin],
    ],
  },
  { title: "Documentos", links: [["Currículo (PDF)", profile.resumeUrl]] },
];

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-ink px-5 py-20 text-plaster md:px-16">
      <Bg variant="river" className="text-plaster/10" />
      <div className="relative mx-auto grid max-w-[1312px] gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-3 max-w-xs text-sm text-plaster/60">
            {profile.role} em {profile.location}. {profile.availability}.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="mb-4 text-sm text-plaster/50">{c.title}</h3>
            <ul className="space-y-2 text-sm">
              {c.links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="relative mx-auto mt-16 max-w-[1312px] border-t border-plaster/15 pt-6 text-xs text-plaster/50">
        © {new Date().getFullYear()} {profile.legalName} · CNPJ {profile.cnpj}
      </p>
    </footer>
  );
}
