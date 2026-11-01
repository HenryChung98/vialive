# vialive

Privacy policies and support pages for my apps, served at <https://vialive.app>.
Built with [Astro](https://astro.build) and [shadcn/ui](https://ui.shadcn.com).

| URL | Source |
| --- | --- |
| `/` | `src/pages/[...locale]/index.astro` — home, one card per app |
| `/<app>/` | `src/pages/[...locale]/[app]/index.astro` — App Store, policy and support buttons |
| `/<app>/policy/`, `/<app>/support/` | `src/content/docs/<app>/*.md`, rendered with `src/layouts/doc.astro` (search, sidebar, on-this-page card) |
| `/ko/...` | Korean version of every page above; docs live in `src/content/docs/ko/` |
| `/app-ads.txt` | `public/app-ads.txt` — AdMob verification, do not move or rename |
| — | `public/CNAME` — custom domain, keep in sync with `site` in `astro.config.mjs` |

App names, descriptions, App Store links and UI text live in `src/i18n/ui.ts`.

## Adding a new app

1. Add the app to `apps` for both locales in `src/i18n/ui.ts`, and put its App Store icon at `src/assets/apps/<app>-icon.png` (or `.webp`): the square 1024px original, not pre-rounded. Its home card and overview page appear automatically, with the icon clipped to the App Store shape.
2. Add its docs, e.g. `src/content/docs/<app>/policy.md` and `support.md`, and the Korean versions under `src/content/docs/ko/<app>/`:

   ```yaml
   ---
   title: My App Privacy Policy   # the <h1> and browser tab title
   description: One line for search engines and link previews.
   order: 2                       # position in the sidebar (support is 1, policy is 2)
   label: Privacy Policy          # sidebar link text (defaults to title)
   ---
   ```

The sidebar, search index, sitemap and hreflang links pick up new pages on their own.

`support.md` is special: it gets a contact card on top, and each `### question` becomes an accordion item. Keep the questions as the last section of the page.

## Languages

English is the default and lives at the root; Korean lives under `/ko/`. Locales are set in
`i18n` in `astro.config.mjs` and in `src/i18n/ui.ts`.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build the site to `./dist/` and index it for search with Pagefind |
| `pnpm preview` | Preview the build locally (search only works here, not in `pnpm dev`) |

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup:

1. Repository **Settings → Pages → Source**: *GitHub Actions*.
2. **Settings → Pages → Custom domain**: `vialive.app`, then turn on *Enforce HTTPS* once the certificate is issued.
3. At the domain registrar, point the apex domain at GitHub Pages:
   `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and optionally `AAAA` records `2606:50c0:8000::153` … `2606:50c0:8003::153`).
