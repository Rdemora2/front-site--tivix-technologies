export type HomeSection = "servicos" | "cases" | "processo" | "sobre";
export type HomeSectionHref = `/#${HomeSection}`;

type NavigationItem = Readonly<{
  href: HomeSectionHref;
  label: string;
}>;

export const navigationItems = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#cases", label: "Cases" },
  { href: "/#processo", label: "Processo" },
  { href: "/#sobre", label: "Sobre" },
] as const satisfies readonly NavigationItem[];
