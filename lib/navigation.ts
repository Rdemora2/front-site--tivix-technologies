export type NavigationHref = "/servicos" | "/cases" | "/sobre";

export type NavigationItem = Readonly<{
  href: NavigationHref;
  label: string;
}>;

export const navigationItems = [
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
] as const satisfies readonly NavigationItem[];
