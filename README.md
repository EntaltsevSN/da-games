# Unity Landing (Rsbuild + React + TypeScript)

Static landing page with a dedicated Unity WebGL play screen. No backend required.

## Stack

- `rsbuild` + `react` + `typescript`
- `react-router-dom` for `/` and `/play`
- `react-unity-webgl` for WebGL player integration
- `react-helmet-async` for SEO/OG tags

## Setup

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Unity build files

Put your Unity WebGL output in `public/Build/`.

Default filenames expected by `src/config/unityBuild.ts`:

- `build.loader.js`
- `build.data`
- `build.framework.js`
- `build.wasm`

If your Unity export uses different names, edit `src/config/unityBuild.ts`.

## Analytics

Client-side tracking helper is in `src/lib/analytics.ts`.

- If `window.plausible` exists, events go to Plausible.
- Else if `window.gtag` exists, events go to GA4.

Tracked events:

- `PlayClick` from landing CTA
- `SessionStart` when Unity reports loaded state

## SEO

Meta tags are set per page with `react-helmet-async`:

- Landing: title, description, OG tags, OG image (`/og-image.svg`)
- Play page: dedicated title/description

## Hosting notes

The frontend build is hosting-agnostic. Add the provider config without app code changes:

- `vercel.json` for Vercel rewrites and caching headers
- `netlify.toml` for Netlify redirects and caching headers
- `public/_headers` and `public/_redirects` for Cloudflare Pages / Netlify static rules

For S3 + CloudFront, apply equivalent behavior:

- Rewrite unknown routes to `index.html`
- Long cache for `/Build/*`
- Short cache for `index.html`
