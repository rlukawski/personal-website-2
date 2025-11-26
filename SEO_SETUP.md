# SEO Setup for Multilingual Site

## What Was Implemented

### 1. Dynamic Metadata with `hreflang` Tags
Updated `src/app/[locale]/layout.tsx` to use `generateMetadata()` which automatically adds:
- `<link rel="alternate" hreflang="en" href="https://yourdomain.com/en" />`
- `<link rel="alternate" hreflang="pl" href="https://yourdomain.com/pl" />`
- `<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/en" />`
- `<link rel="canonical" href="https://yourdomain.com/{locale}" />`
- Open Graph tags for social media with proper locale settings

### 2. Sitemap with Language Alternatives
Created `src/app/sitemap.ts` that generates `/sitemap.xml` with:
- Both language versions (`/en` and `/pl`)
- Language alternatives for each page
- Proper change frequency and priority settings

### 3. Robots.txt
Created `src/app/robots.ts` that generates `/robots.txt` with:
- Allow all user agents to crawl the site
- Reference to the sitemap

### 4. Environment Variable
You need to manually create `.env.local` file with your base URL.

## Required Action

### Create `.env.local` file in the project root:

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**For production deployment** (e.g., Vercel), set this environment variable to your actual domain:
```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## How to Verify

### 1. Check Generated Tags
Visit your site and view page source (Ctrl+U):
- Look for `<link rel="alternate" hreflang="...">`tags in the `<head>` section
- Look for `<link rel="canonical">` tag
- Look for `<meta property="og:locale">` tags

### 2. Check Sitemap
Visit: `http://localhost:3000/sitemap.xml`
You should see XML with both `/en` and `/pl` entries with language alternatives.

### 3. Check Robots.txt
Visit: `http://localhost:3000/robots.txt`
You should see rules and sitemap reference.

### 4. Test with Tools
- **Google Search Console**: Submit your sitemap and check the internationalization report
- **Ahrefs Hreflang Checker**: https://ahrefs.com/hreflang-tag-checker
- **Merkle Hreflang Tag Testing Tool**: https://technicalseo.com/tools/hreflang/

## What Search Engines Will See

### For `/` (root):
- 301 redirect to `/en` (handled by middleware)
- Search engines follow the redirect

### For `/en`:
```html
<html lang="en">
  <head>
    <link rel="canonical" href="https://yourdomain.com/en" />
    <link rel="alternate" hreflang="en" href="https://yourdomain.com/en" />
    <link rel="alternate" hreflang="pl" href="https://yourdomain.com/pl" />
    <link rel="alternate" hreflang="x-default" href="https://yourdomain.com/en" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="pl_PL" />
    ...
  </head>
</html>
```

### For `/pl`:
```html
<html lang="pl">
  <head>
    <link rel="canonical" href="https://yourdomain.com/pl" />
    <link rel="alternate" hreflang="en" href="https://yourdomain.com/en" />
    <link rel="alternate" hreflang="pl" href="https://yourdomain.com/pl" />
    <link rel="alternate" hreflang="x-default" href="https://yourdomain.com/en" />
    <meta property="og:locale" content="pl_PL" />
    <meta property="og:locale:alternate" content="en_US" />
    ...
  </head>
</html>
```

## Benefits

1. **Google understands your language structure** - Shows correct version to users based on their language/location
2. **No duplicate content penalties** - Canonical tags tell search engines which is the primary version
3. **Better international SEO** - `hreflang` tags help with rankings in different regions
4. **Social media sharing** - Open Graph tags ensure proper preview in different languages
5. **Easy crawling** - Sitemap and robots.txt help search engines discover and index all pages

## Next Steps for Production

1. Create `.env.local` with `NEXT_PUBLIC_BASE_URL=http://localhost:3000`
2. Test locally to verify all tags are present
3. Before deploying to production:
   - Set `NEXT_PUBLIC_BASE_URL` environment variable in your hosting platform
   - Submit sitemap to Google Search Console
   - Submit sitemap to Bing Webmaster Tools
   - Monitor internationalization reports in search console

## References

- [Google: Multilingual and multi-regional sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Google: hreflang tag guidelines](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Next.js: Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

