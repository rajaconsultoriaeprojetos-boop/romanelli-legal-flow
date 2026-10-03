# Romanelli Abdalla Advocacia

Site institucional estático (Vite + React), sem dependência de Base44 nem de outras plataformas de vibe coding. O build gera arquivos em `dist/` e publica na Vercel como SPA.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Publicar na Vercel

1. Importe este repositório na Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

O arquivo `vercel.json` já faz o rewrite das rotas (`/politica-de-privacidade`, `/termos-de-uso`) para `index.html`.
