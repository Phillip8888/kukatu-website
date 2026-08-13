# Kukatu website

Canonical static website source for <https://www.kukatu.co.uk/>, including the
marketing page, terms/privacy page, private club invitation landing page, and
Apple/Android app-link association files.

## Repository state

- GitHub repository: `Phillip8888/kukatu-website`
- Canonical local checkout: `/Users/sky/Documents/GitHub/kukatu-website` on the owner's current Mac
- GitHub Pages source verified 2026-08-13: branch `WIP2`, repository root
- Custom domain: `www.kukatu.co.uk`
- HTTPS enforcement: enabled
- Default branch: `main`, currently only a placeholder and not the deployed source

The default branch and Pages source should be reconciled in a focused pull
request before future website development. Do not switch the live Pages source
or deploy from a new branch as an incidental documentation change.

## Local preview

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080/> and verify the home, terms, join, invalid-invite,
offline, and app-link files before deploying.

## Codex workspace

This is part of the Kukatu product, not a separate app. Keep the Bookclub app
checkout as the primary folder of the Kukatu Codex Project and attach this
repository only as a same-product secondary folder when website work is in
scope. Keep all unrelated apps in their own Codex Projects.
