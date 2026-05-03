# Sunny Yadav Portfolio

This repository powers `https://itssunnyyadav.github.io` as a static `Next.js` portfolio and resume site.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The site is configured with `output: "export"` so GitHub Pages can serve the generated static files from the `out/` directory.

## Deployment

Push to `main` and the workflow in `.github/workflows/deploy.yml` will build and deploy the site to GitHub Pages.
