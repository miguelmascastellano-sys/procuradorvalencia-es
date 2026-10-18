<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site config/SEO helper lives in src/lib/site.ts (seo() per route gives canonical + OG); keep every route using it so metadata stays unique.
- Contact uses the shared SITE mailto destination and subject; no web submission component or server function, so contact cannot silently collect visitor data.
- Historical contact records are retained separately from the retired submission flow; do not recreate a public collection endpoint.
- Typography is self-hosted through Fontsource packages to avoid third-party font requests.
- Cookie controls share a versioned local preference record and expose only actual installed optional services; platform-injected scripts require provider verification, not claims of application-side blocking.
- Shared editorial PageHeader, Section, Numbered and LegalPage compositions plus semantic CSS tokens style all public pages; preserve each route’s content and metadata so redesigns remain consistent without duplicating layouts.
- Canonical and Open Graph URLs target the current published origin until a custom domain is connected; the professional domain remains a separate identity fact.
- public/sitemap.xml is static: add new public routes to it.
