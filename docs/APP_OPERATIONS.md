# Kukatu Website Operations

- Repository: `Phillip8888/kukatu-website`
- Local checkout: `/Users/sky/Documents/GitHub/kukatu-website` on the owner's current Mac
- Codex Project: Kukatu
- Codex role: same-product secondary folder; Bookclub app checkout remains primary
- Public domain: <https://www.kukatu.co.uk/>
- GitHub Pages source verified 2026-08-13: `WIP2` at `/`
- HTTPS enforcement: enabled
- Default branch: `main` (placeholder; requires deliberate reconciliation)

## Public app listings

Both mobile apps are publicly launched. Live store listings remain authoritative for
download URLs and available versions; the values below are the ones the website links to.

| Platform | Identifier | Store URL |
| --- | --- | --- |
| iOS | `6745967029` (bundle `com.kuku.kukubookclub`, team `YY6K936V5B`) | <https://apps.apple.com/gb/app/kukatu/id6745967029> |
| Android | `com.kuku.kukubookclub` | <https://play.google.com/store/apps/details?id=com.kuku.kukubookclub> |

Verified 2026-09-18: iOS listing live (minimum iOS 16.0, free); Google Play listing live.
Do not hard-code app version numbers in website copy — they go stale between releases.

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
