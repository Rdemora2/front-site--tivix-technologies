# Tivix Technologies

Site institucional da Tivix Technologies, construído com Next.js 14, React, TypeScript e Tailwind CSS.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Gates de entrega:

```bash
npm run type-check
npm run format:check
npm run build
```

## Configuração

- `NEXT_PUBLIC_SITE_URL`: URL pública usada em canonical, sitemap, robots e dados estruturados. O fallback é `https://tivix.com.br`.
- Dados institucionais e canais de contato ficam centralizados em [`lib/site-config.ts`](lib/site-config.ts).
- O Microsoft Clarity só é carregado após consentimento explícito do visitante.

## Conteúdo e cases

Os cases de Grupo Bandeirantes e Hospital Sírio-Libanês são apresentados como experiência da liderança técnica. Essa atribuição deve ser preservada para não sugerir que projetos anteriores à Tivix foram contratados diretamente com a empresa.
