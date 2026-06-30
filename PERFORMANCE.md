# Performance Optimization Guide — OneGrasp Webinar

## What Was Done

### 1. Image Optimization (Biggest Win: ~8 MB → ~487 KB)

All speaker and hero images converted from PNG to **WebP** at quality 82:

| Image | Before | After | Saved |
|---|---|---|---|
| hero poster | 1,292 KB | 117 KB | **90.9%** |
| Speaker1 | 1,855 KB | 75 KB | **95.9%** |
| speaker2 | 2,301 KB | 168 KB | **92.7%** |
| speaker3 | 2,071 KB | 123 KB | **94.1%** |
| speaker4 | 1,982 KB | 78 KB | **96.1%** |

- Each image uses `<picture>` with `<source type="image/webp">` and a PNG fallback for older browsers.
- Hero poster has `fetchPriority="high"` — it's the Largest Contentful Paint (LCP) element.
- Speaker images use `loading="lazy"` + `decoding="async"`.

Original `.bak` files are kept in `/public/images/` for rollback.

---

### 2. Vite Bundle Splitting

Chunks are now split into separately-cacheable files:

| Chunk | Contents |
|---|---|
| `react-core` | react + react-dom |
| `framer-motion` | framer-motion library |
| `lucide` | lucide-react icons |
| `supabase` | @supabase/supabase-js |
| `vendor` | other node_modules |
| `index` | application code |

When you update app code, only the `index` chunk changes — users re-download
~5–20 KB instead of the whole bundle.

---

### 3. Gzip + Brotli Compression

`vite-plugin-compression` generates `.gz` and `.br` pre-compressed files in `dist/assets/`.

**How to verify:**
1. Open Chrome DevTools → Network tab
2. Find a `.js` file in the assets folder
3. Check the **Response Headers** — `Content-Encoding: br` means Brotli is active

---

### 4. HTML Resource Hints

Added to `index.html`:
- `<link rel="preload">` for the hero poster WebP (speeds up LCP)
- `<link rel="preconnect">` for Razorpay, Pexels, OneGrasp
- Razorpay `<script>` moved to `defer` (was blocking HTML parsing)

---

### 5. React Lazy Loading

Below-fold components (Countdown, Speakers, Highlights, Agenda, etc.) are loaded
via `React.lazy()`. Their JS bundles are only downloaded when the user scrolls.

Navbar and Hero are eagerly loaded (above the fold).

---

### 6. Browser Caching Headers

#### Netlify / Cloudflare Pages
The file `public/_headers` is automatically picked up at deploy:
- Hashed assets (`/assets/*`): `max-age=31536000, immutable` — **1 year**
- Images (`/images/*`): `max-age=2592000` — **30 days**
- HTML: `max-age=0, must-revalidate` — always fresh

#### Vercel
The file `vercel.json` applies the same rules via Vercel's header config.

---

## CDN Setup (Recommended Next Step)

All three platforms below provide a **free global CDN automatically** — no extra config needed:

| Platform | CDN | Free Tier |
|---|---|---|
| **Vercel** | Cloudflare + own edge | 100 GB/month |
| **Netlify** | Fastly | 100 GB/month |
| **Cloudflare Pages** | Cloudflare edge (best) | Unlimited |

### Deploy to Cloudflare Pages (Recommended)
```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy from dist/
wrangler pages deploy dist --project-name onegrasp-webinar
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## Re-running Image Optimization

If you add new speaker images:
```bash
node scripts/optimize-images.mjs
```

Then update the `photo`/`photoWebp` paths in `src/components/Speakers.tsx`.

---

## Expected Performance After These Changes

| Metric | Before | After (Estimated) |
|---|---|---|
| Page Size | 2.9 MB | ~400–600 KB |
| LCP (hero poster) | ~1.3s | ~300–500ms |
| Lighthouse Score | 77 (C) | 90–95+ (A) |
| Repeat Visit Load | ~1.3s | <100ms (cache) |
