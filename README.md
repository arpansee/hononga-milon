# Hononga Milon

Source for honongamilon.<domain>, a website built with Vite, React, TypeScript, Tailwind CSS and
Framer Motion, packaged as a container image and deployed to a Kubernetes cluster via Flux/Renovate
from the [homeops](https://github.com/arpansee/homeops) repository.

## How it works

- Every push to `main` builds a multi-arch image via [.github/workflows/publish.yml](.github/workflows/publish.yml) and publishes it to `ghcr.io/arpansee/hononga-milon`.
- The `Dockerfile` is a multi-stage build: Node installs dependencies and runs `npm run build`, then the static `dist/` output is copied into an unprivileged nginx image.
- Images are tagged with a calendar version (`YYYY.M.D.<run-number>`) plus `latest`.
- Renovate in the `homeops` repository watches the image tag and opens a PR to bump it whenever a new version is published; merging that PR (via Flux) redeploys the site.

## Local development

```sh
npm install
npm run dev
```

Build and preview the production bundle:

```sh
npm run build
npm run preview
```

Or build the container locally:

```sh
docker build -t hononga-milon .
docker run --rm -p 8080:8080 hononga-milon
```

