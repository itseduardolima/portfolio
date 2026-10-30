const links = [
  ["Produtos", "#produtos"],
  ["Stack", "#stack"],
  ["Estudos", "#estudos"],
  ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-16">
        <a href="#" className="text-lg font-bold tracking-tight">
          Eduardo Lima
        </a>
        <ul className="flex gap-5 text-sm font-medium md:gap-8">
          {links.map(([label, href]) => (
            <li key={href} className={label === "Stack" || label === "Estudos" ? "hidden sm:block" : ""}>
              <a href={href} className="hover:underline underline-offset-4">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
