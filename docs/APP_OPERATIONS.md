# Kukatu Website Operations

- Repository: `Phillip8888/kukatu-website`
- Local checkout: `/Users/sky/Documents/GitHub/kukatu-website` on the owner's current Mac
- Codex Project: Kukatu
- Codex role: same-product secondary folder; Bookclub app checkout remains primary
- Public domain: <https://www.kukatu.co.uk/>
- GitHub Pages source verified 2026-08-13: `WIP2` at `/`
- HTTPS enforcement: enabled
- Default branch: `main` (placeholder; requires deliberate reconciliation)

## Release states

Treat committed/pushed website source, merged default-branch source, GitHub Pages build, custom-domain availability, and updated deep-link behavior as separate facts.

## Safe deployment checklist

1. Confirm current Pages source and custom domain.
2. Verify links and association files against the public mobile identifiers.
3. Preview phone and desktop layouts locally.
4. Check join-page behavior for valid, invalid, expired, offline, and app-not-installed states without exposing private invite data.
5. Merge only the intended website branch.
6. Wait for Pages build and verify the public domain over HTTPS.
7. Record the deployed commit and public verification time.
