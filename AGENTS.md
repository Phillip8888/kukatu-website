# Kukatu Website — Codex Operating Guide

## Sources of truth

1. The checked-out branch and local preview are authoritative for website behavior.
2. GitHub Pages settings and the public custom domain are authoritative for deployed state.
3. The Bookclub/Kukatu app repository is authoritative for mobile deep-link and current store identifiers.
4. Live store listings are authoritative for download URLs and public version availability.

## Boundary and workspace

- Repository: `Phillip8888/kukatu-website`.
- Custom domain: `www.kukatu.co.uk`.
- This repository is a same-product secondary folder in the Kukatu Codex Project; it is not a backend or an unrelated portfolio app.
- Do not copy the website into the Flutter app repository. Change the canonical website source here, then update app references deliberately.
- The `main` default branch and the deployed `WIP2` source are currently different. Do not change Pages configuration, merge, or deploy without an explicitly authorized task.

## Verification

- Serve the site locally over HTTP.
- Check responsive home, terms/privacy, join, missing/invalid invite, offline/network failure, and store-link behavior.
- Validate `.well-known/apple-app-site-association` and `.well-known/assetlinks.json` against current app identifiers before release.
- Check `git diff --check` and preserve unrelated changes.

Never commit credentials, private invitation data, user information, store API keys, or signing material.
