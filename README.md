# Hononga Milon

Source for honongamilon.<domain>, a static website built as a container image and deployed to a Kubernetes cluster via Flux/Renovate from the [homeops](https://github.com/arpansee/homeops) repository.

## How it works

- Every push to `main` builds a multi-arch image via [.github/workflows/publish.yml](.github/workflows/publish.yml) and publishes it to `ghcr.io/arpansee/hononga-milon`.
- Images are tagged with a calendar version (`YYYY.M.D.<run-number>`) plus `latest`.
- Renovate in the `homeops` repository watches the image tag and opens a PR to bump it whenever a new version is published; merging that PR (via Flux) redeploys the site.

## Local development

Edit files under `public/` and open `public/index.html` in a browser, or build the container locally:

```sh
docker build -t hononga-milon .
docker run --rm -p 8080:8080 hononga-milon
```
