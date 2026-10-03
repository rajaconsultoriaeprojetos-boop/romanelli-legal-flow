# AGENTS.md

Site institucional estático da Romanelli Abdalla Advocacia.

## Stack

- Vite + React 18 + React Router
- Tailwind CSS
- Deploy estático na Vercel (`dist/`)

Não reintroduzir SDKs de plataformas de vibe coding (Base44, Lovable, v0 runtime, etc.). Conteúdo e imagens ficam neste repositório (`public/images`).

## Comandos

- `npm run dev` — desenvolvimento local
- `npm run build` — build estático
- `npm run lint` — ESLint

## Estrutura

- `src/pages/` — Home, política de privacidade e termos
- `src/components/ra/` — seções do site
- `src/components/legal/` — páginas e banner de cookies
- `public/images/` — logomarca e fotos
