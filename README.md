# Fiona She — Portfolio Preview

Preview: https://mnmnsyf.github.io/portfolio-preview/

This repository hosts the work-in-progress portfolio separately from the production site at https://mnmnsyf.github.io/.
Pushing to this repository's `main` branch tests, builds, and deploys the preview only.
The production repository and its deployment settings are independent.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

To reproduce the GitHub Pages subdirectory build in PowerShell:

```powershell
$env:VITE_BASE_PATH='/portfolio-preview/'
npm test
npm run build
npm run preview
```

Open `/portfolio-preview/` when previewing the subdirectory build. Without this environment variable, local development uses `/`.

## Content and navigation

Content lives in `src/data/`. Entry, Projects, Research, Experience, Updates, Education, Awards, and Skills are independent hash routes. Older project anchors remain supported.
`src/assetUrl.ts` prefixes local media and resource links with the configured build base.
The preview includes the latest typography, full biography with USC and ICLR submission information, prioritized Digital Sky project, and Steam screenshot carousel.

All images, code, experience descriptions, and publication links retain their source attribution. The preview requests `noindex` to avoid competing with the production website in search results.
