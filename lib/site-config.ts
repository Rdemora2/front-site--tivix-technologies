const defaultSiteUrl = "https://tivix.com.br";

type SiteConfig = Readonly<{
  name: string;
  shortName: string;
  url: string;
  description: string;
  contact: Readonly<{
    email: string;
    whatsappNumber: string;
    whatsappLabel: string;
  }>;
  founder: Readonly<{
    name: string;
    portfolio: string;
    linkedin: string;
    github: string;
  }>;
}>;

function resolveSiteUrl(): string {
  const configuredUrl = process.env["NEXT_PUBLIC_SITE_URL"]?.trim();
  if (!configuredUrl) return defaultSiteUrl;

  try {
    const parsedUrl = new URL(configuredUrl);
    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:")
      return defaultSiteUrl;
    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return defaultSiteUrl;
  }
}

export const siteConfig = {
  name: "Tivix Technologies",
  shortName: "Tivix",
  url: resolveSiteUrl(),
  description:
    "Produtos digitais, sistemas, automações e inteligência artificial aplicada com engenharia sênior do diagnóstico à operação.",
  contact: {
    email: "robertomoraeszar@gmail.com",
    whatsappNumber: "5511973874345",
    whatsappLabel: "+55 11 97387-4345",
  },
  founder: {
    name: "Roberto Moraes",
    portfolio: "https://robertomoraes.vercel.app",
    linkedin: "https://www.linkedin.com/in/robertomoraes/",
    github: "https://github.com/Rdemora2",
  },
} as const satisfies SiteConfig;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
