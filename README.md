# vialive

Privacy policies and support pages for my apps, served at <https://vialive.app>.
Built with [Astro Starlight](https://starlight.astro.build).

| URL | Source file |
| --- | --- |
| `/` | `src/content/docs/index.mdx` (home, lists every app) |
| `/currency-converter/` | `src/content/docs/currency-converter/index.mdx` |
| `/currency-converter/policy/` | `src/content/docs/currency-converter/policy.md` |
| `/currency-converter/support/` | `src/content/docs/currency-converter/support.md` |
| `/ko/...` | `src/content/docs/ko/...` — Korean translation of every page above |
| `/app-ads.txt` | `public/app-ads.txt` — AdMob verification, do not move or rename |
| — | `public/CNAME` — custom domain, keep in sync with `site` in `astro.config.mjs` |

The folder layout under `src/content/docs/` *is* the URL structure.

## Adding a new app

1. Create `src/content/docs/<app-slug>/index.mdx` (the app's overview page) and its pages,
   e.g. `policy.md` and `support.md`:

   ```yaml
   ---
   title: My App Privacy Policy   # the <h1> and browser tab title
   description: One line for search engines and link previews.
   sidebar:
     label: Privacy Policy        # the link text in the sidebar
     order: 1                     # link order in the sidebar
   lastUpdated: 2026-09-22        # shows "Last updated" at the bottom of the page
   ---
   ```

2. Add a sidebar group in `astro.config.mjs`:

   ```js
   { label: 'My App', items: [{ autogenerate: { directory: '<app-slug>' } }] },
   ```

3. Add a `LinkCard` for the app to the home page, `src/content/docs/index.mdx`.

4. Add the Korean versions at the same paths under `src/content/docs/ko/`, with links
   pointing to `/ko/...`. A page without a Korean version falls back to the English one.

## Languages

English is the default and lives at the root; Korean lives under `/ko/`. Locales are set in
`locales` in `astro.config.mjs`, and Starlight adds the language picker to the header.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build the site to `./dist/` |
| `pnpm preview` | Preview the build locally |

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup:

1. Repository **Settings → Pages → Source**: *GitHub Actions*.
2. **Settings → Pages → Custom domain**: `vialive.app`, then turn on *Enforce HTTPS* once the certificate is issued.
3. At the domain registrar, point the apex domain at GitHub Pages:
   `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and optionally `AAAA` records `2606:50c0:8000::153` … `2606:50c0:8003::153`).
