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
- Contact form posts via createServerFn (src/lib/contact.functions.ts) into an insert-only table with honeypot + timing antispam; no public reads.
- public/sitemap.xml is static: add new public routes to it.
