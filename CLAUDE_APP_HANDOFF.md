# 🚀 Claude App - TeddyFix Website Handoff

**From:** Claude Code CLI (Setup Phase)
**To:** Claude App (Development Phase)
**Status:** ✅ READY FOR BUILD

---

## What You're Receiving

A fully initialized, production-ready Next.js 16 project with:

- ✅ **All Latest Dependencies** installed and verified
- ✅ **Configuration Complete** (next.config, tailwind, TypeScript, etc.)
- ✅ **Directory Structure Ready** (components, lib, public, .claude)
- ✅ **App Builds Successfully** (no errors, zero vulnerabilities)
- ✅ **Git Initialized** (3 commits, ready for push)
- ✅ **Comprehensive Documentation** (README, SETUP_COMPLETE, STATUS)

---

## 🎯 What to Do Next

### 1. Start Development Server
```bash
cd /Users/artyomx/projects/teddyfix-website
npm run dev
```
Opens at http://localhost:3000

### 2. Build Infrastructure (First Priority)

#### Copy SEO Framework
```bash
# Copy lib/seo/ folder from TeddyKids
cp -r /Users/artyomx/projects/teddykids-website/lib/seo/* ./lib/seo/
```

**Files to customize for TeddyFix:**
- `metadata.ts` - Update PAGE_METADATA for TeddyFix pages
- `schemas.ts` - Adapt Organization, LocalBusiness, Service schemas
- `faq-content.ts` - Write TeddyFix-specific Q&A
- `content-strategy.ts` - Define TeddyFix content pillars
- `alt-text.ts` - Image alt-text helpers

#### Create AI Optimization
```bash
# Create public/.well-known/gpt-site-prompt.txt
# Reference: /Users/artyomx/projects/koaplinchik-website/public/.well-known/gpt-site-prompt.txt
```

### 3. Setup Agents & Commands (Second Priority)

Copy to `.claude/agents/`:
- ✅ `local-seo-dominator.md` (TeddyKids)
- ✅ `performance-optimizer.md` (TeddyKids)
- ✅ `seo-watcher.md` (TeddyKids)
- ✅ `site-health-guardian.md` (TeddyKids)
- ✅ `translation-guardian.md` (TeddyKids)
- ✅ `vercel-specialist.md` (TISAverse - adapt from Vite to Next.js)

Copy to `.claude/commands/`:
- ✅ `performance-audit.md` (TISAverse)
- ✅ `security-audit.md` (TISAverse)
- ✅ `vercel-deploy-optimize.md` (TISAverse)

Create `.claude/settings.local.json`:
```json
{
  "agents": {
    "local-seo-dominator": { "enabled": true, "model": "sonnet" },
    "performance-optimizer": { "enabled": true, "model": "sonnet" },
    "seo-watcher": { "enabled": true, "model": "sonnet" },
    "site-health-guardian": { "enabled": true, "model": "sonnet" },
    "translation-guardian": { "enabled": true, "model": "sonnet" },
    "vercel-specialist": { "enabled": true, "model": "sonnet" }
  }
}
```

### 4. Build Components (Third Priority)

Pre-build atomic components:
- **HeaderSticky** - Sticky nav with mobile toggle
- **HeroSection** - Hero with image, H1, subtitle, CTA
- **ServiceCard** - Icon + label + description
- **FleetTable** - Fleet pricing/bundles table
- **TestimonialCard** - Quote + avatar + name
- **GalleryBlock** - Image grid (before/after, workshop)
- **ContactForm** - Name, phone, message + WhatsApp CTA
- **Footer** - Nav links, contact, socials

**Requirements:**
- Use semantic class names (`button-primary`, NOT `ml-32`)
- Implement Framer Motion animations (400-1200ms easing)
- Mobile-first responsive design
- Full TypeScript typing (strict mode)
- Accessibility built-in (ARIA labels, semantic HTML)

### 5. Build Pages (Fourth Priority)

Create in `app/` directory:

1. **Home (`/`)**
   - Hero section with CTA
   - Services overview
   - Quick testimonials
   - Contact CTA

2. **Services (`/services`)**
   - List of all services
   - Sub-pages:
     - `/services/maintenance`
     - `/services/diagnostics`
     - `/services/bodywork-detailing`
     - `/services/fleet-taxi-service`

3. **Fleet/Taxi (`/fleet-taxi`)**
   - Bulk servicing benefits
   - Priority appointments
   - 24/7 service options
   - Pickup/drop-off
   - Contract packages

4. **About (`/about`)**
   - TeddyFix story (Teddy Kids connection)
   - Team bios
   - Certifications
   - Philosophy: Speed, respect, clean work

5. **Testimonials (`/testimonials`)**
   - Taxi driver testimonials
   - Teddy Kids family feedback
   - Before/after photos
   - Ratings/reviews

6. **Gallery (`/gallery`)**
   - Workshop photos
   - Cars being serviced
   - Before/after (paint, detailing)
   - Friendly staff photos

7. **Contact (`/contact`)**
   - Contact form
   - WhatsApp CTA
   - Map embed
   - Opening hours
   - Address

8. **FAQ (`/faq`)** - Optional
   - Common questions
   - Q&A pairs from faq-content.ts

### 6. Implement SEO (Fifth Priority)

- Add metadata to each page using `generateMetadata()`
- Implement global Organization schema in `app/layout.tsx`
- Add page-specific schemas (LocalBusiness, Service, FAQPage)
- Create `public/robots.txt`
- Generate `public/sitemap.xml`
- Verify with Google Rich Results Test

### 7. Lighthouse Optimization (Sixth Priority)

Performance checklist:
- [ ] Hero images use `priority` attribute
- [ ] Below-fold images use `loading="lazy"`
- [ ] All images WebP/AVIF only
- [ ] JS bundle < 200KB
- [ ] CSS < 50KB
- [ ] Fonts optimized with `next/font`
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

---

## 📐 Design Guidelines

### Colors
- Primary Black: `#000000`
- Teddy Pink: `#FF5C5C` (accent)
- Wood Tone: `#8B6F47`
- Concrete: `#9E9E9E`

### Typography
- Font: Inter, DM Sans
- Warm, trustworthy, professional tone

### Animations
- Tool: Framer Motion
- Timing: Smooth fades/slides (400-1200ms)
- Trigger: Scroll-based reveals
- Optional: Three.js hero (pink Tesla) - desktop only, lazy-loaded

### Buttons
- Style: Rounded 4px, soft shadows
- Primary: Black bg, white text
- Secondary: Transparent bg, black border

---

## 🎯 TeddyFix Business Context

**Business Type:** Premium auto repair garage
**Location:** Leiden, Netherlands
**Specialization:** Taxi fleet maintenance, ceramic coating, premium services
**Target Audience:** Taxi companies, Teddy Kids families, local clients

**Brand Voice:**
- Professional but approachable
- Speed + reliability + respect
- Premium quality
- Local expertise

**Key Pages:**
- Service pages (maintenance, diagnostics, bodywork, fleet)
- Fleet-specific page (taxi companies)
- Trust signals (testimonials, about, gallery)
- Easy booking (contact form, WhatsApp)

---

## 📊 Performance Targets

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Lighthouse Performance | 90+ | 95+ |
| Lighthouse SEO | 100 | 100 |
| Lighthouse A11y | 98+ | 98+ |
| Lighthouse Best Practices | 95+ | 95+ |
| LCP | <2.5s | <2.5s |
| FID | <100ms | <100ms |
| CLS | <0.1 | <0.1 |

---

## ⚠️ Important Constraints

1. **All dependencies are LATEST** - Don't install older versions
2. **TypeScript strict mode** - All code must pass `strict: true`
3. **Tailwind v4 syntax** - Use `@import "tailwindcss"`, not @tailwind directives
4. **No webpack config** - Use Turbopack (Next.js 16 default)
5. **Semantic classes** - Use `button-primary`, NOT `ml-32`
6. **Component isolation** - Each section wrapped in `.section-wrapper`

---

## ✅ Verification Steps

Before each phase, run:
```bash
npm run build          # Verify build succeeds
npm run lint           # Check code style
npm run type-check     # Verify TypeScript
npm run dev            # Check dev server starts
```

---

## 🚀 Deployment

### Push to GitHub
```bash
git add .
git commit -m "Your message"
git push origin main
```

### Auto-Deploy to Vercel
Once pushed to GitHub, Vercel auto-deploys (already configured)

### Manual Build Commands
```bash
npm run build    # Production build
npm run start    # Test production build locally
```

---

## 📚 Reference Files

**From TeddyKids:**
- SEO infrastructure: `/Users/artyomx/projects/teddykids-website/lib/seo/`
- Agents: `/Users/artyomx/projects/teddykids-website/.claude/agents/`
- Documentation: `/Users/artyomx/projects/teddykids-website/*.md`

**From Koaplinchik:**
- GEO prompt: `/Users/artyomx/projects/koaplinchik-website/public/.well-known/gpt-site-prompt.txt`
- Design philosophy: `/Users/artyomx/projects/koaplinchik-website/FEELINGS_FIRST.md`

**From TISAverse:**
- Tools: `/Users/artyomx/projects/TISAverse/.claude/`

**Local Plan:**
- `/Users/artyomx/.claude/plans/delegated-forging-wave.md`

---

## 💬 Questions?

Refer to:
1. `README.md` - Project overview
2. `SETUP_COMPLETE.md` - Setup checklist
3. `STATUS.md` - Current status
4. Plan file - Detailed requirements
5. Source projects - Reference implementations

---

## 🎬 Ready to Build!

Everything is set up. You have:
- ✅ Clean codebase
- ✅ All latest dependencies
- ✅ Production-ready config
- ✅ Clear documentation
- ✅ Reference implementations
- ✅ Comprehensive requirements

**Let's build TeddyFix! 🔥**

---

*Handoff from Claude Code CLI Setup Phase - November 29, 2025*
*Ready for Claude App Development Phase*
