## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## UI requirements

- **Mobile responsive is required.** Most visitors arrive from the iPhone app. Check every changed page at 320px and 375px wide: no horizontal scroll, and nothing hidden on mobile without another way to reach it (the doc sidebar moves into a `Sheet` menu).
- Build UI from shadcn components (`src/components/ui/`, add more with `pnpm dlx shadcn@latest add <name>`).
- When styling a link as a button, wrap the classes in `cn`: `cn(buttonVariants({ variant: "outline" }))`. Without it, the base `border-transparent` wins and outline buttons lose their border.
- Every page exists in English (root) and Korean (`/ko/`); hreflang assumes both.

## Apple trademarks

The App Store badge and the footer credit lines must follow Apple's [marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/) and [trademark guidelines](https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html), which can change. When working on either, check them against the current guidelines and update them if needed.

- Credit lines, in both languages: `legal` in `src/i18n/ui.ts`, shown in the footer of `src/layouts/main.astro`. List every Apple trademark the site uses.
- Badge artwork URLs and size: `appStoreBadge` in `src/i18n/ui.ts`. Never modify the artwork.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
