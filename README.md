# TeddyFix Website 🚀

**Premium Auto Repair & Fleet Services Website**

A high-performance, SEO-optimized website for TeddyFix - a garage specializing in taxi fleet maintenance, ceramic coating, and premium vehicle services in Leiden, Netherlands.

## Tech Stack (All Latest)

- **Framework:** Next.js 16.0.5 (with Turbopack)
- **React:** 19.2.0
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS 4.1.17 + @tailwindcss/postcss
- **Animation:** Framer Motion 12.23.24
- **Hosting:** Vercel (Amsterdam region - arn1)
- **Analytics:** Vercel Analytics & Speed Insights

## Project Structure

```
teddyfix-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles (Tailwind)
├── components/            # Reusable components
│   ├── ui/               # Atomic UI components
│   └── sections/         # Page sections
├── lib/                   # Utilities
│   └── seo/              # SEO infrastructure (coming)
├── public/               # Static assets
│   ├── images/           # Optimized images
│   └── .well-known/      # AI optimization files
├── docs/                 # Documentation
├── .claude/              # Claude Code agents & commands
│   ├── agents/           # Specialized AI agents (coming)
│   └── commands/         # Slash commands (coming)
└── [config files]        # next.config.ts, tailwind.config.ts, etc.
```

## Target Performance Scores

- **Lighthouse Performance:** 95+ (desktop), 90+ (mobile)
- **SEO:** 100/100
- **Accessibility:** 98+/100
- **Best Practices:** 95+/100

## Design Guidelines

### Color Palette
- **Primary Black:** #000000
- **Teddy Pink:** #FF5C5C (accent)
- **Wood Tone:** #8B6F47
- **Concrete:** #9E9E9E

### Typography
- **Font Family:** Inter / DM Sans
- **Approach:** Warm, trustworthy, professional

### Class Naming Conventions
Use semantic names, NOT numeric utilities:
- ✅ `button-primary`, `hero-section`, `card-service`
- ❌ `ml-32`, `w-1440`, `h-120`

### Button Styles
- Rounded 4px
- Soft shadows (no borders)
- Primary: black bg, white text
- Secondary: transparent bg, black border

### Animation
- **Tool:** Framer Motion
- **Timing:** Smooth transitions (400-1200ms easing)
- **Strategy:** Scroll-triggered fades and slides
- **Optional:** Three.js hero (pink Tesla) - lazy-loaded desktop only

## Core Pages (TeddyFix)

- **Home (`/`)** - Hero + quick intro + CTA
- **Services (`/services`)** - Main services, with sub-pages:
  - `/services/maintenance`
  - `/services/diagnostics`
  - `/services/bodywork-detailing`
  - `/services/fleet-taxi-service`
- **Fleet/Taxi (`/fleet-taxi`)** - Dedicated to taxi companies
- **About (`/about`)** - Team, credentials, Teddy Kids connection
- **Testimonials (`/testimonials`)** - Client feedback + before/after
- **Gallery (`/gallery`)** - Workshop, cars, staff photos
- **Contact (`/contact`)** - Form, map, WhatsApp CTA
- **FAQ (`/faq`)** (optional) - Common questions

## SEO Strategy (Coming)

- **Keywords:** "auto repair Leiden", "taxi maintenance", "ceramic coating"
- **Schemas:** Organization, LocalBusiness, Service, FAQPage
- **Metadata:** Unique titles & descriptions per page
- **Hreflang:** Bilingual support (EN + NL planned)
- **AI Optimization:** `.well-known/gpt-site-prompt.txt`

## Development Scripts

```bash
npm run dev              # Start dev server with Turbopack
npm run build            # Production build
npm run start            # Run production server
npm run lint             # ESLint check
npm run lint:fix         # Auto-fix lint issues
npm run type-check       # TypeScript check
```

## Environment Setup

### Required Environment Variables
None currently (add as needed for Resend email, analytics, etc.)

### Install Dependencies
```bash
npm install
```

### Start Development
```bash
npm run dev
# Open http://localhost:3000
```

## Agents & Commands (Setup Complete)

Ready to add when Claude App starts:
- **8 AI Agents** (in `.claude/agents/`)
  - Local SEO Dominator
  - Performance Optimizer
  - SEO Watcher
  - Site Health Guardian
  - Translation Guardian (bilingual QA)
  - Vercel Specialist
  - + TISAverse performance & security agents

- **3 Slash Commands** (in `.claude/commands/`)
  - `/performance-audit`
  - `/security-audit`
  - `/vercel-deploy-optimize`

## Next Steps (For Claude App)

1. **Copy SEO Infrastructure**
   - `lib/seo/` folder from TeddyKids
   - `.well-known/gpt-site-prompt.txt`

2. **Copy Agents & Commands**
   - 8 agents from TeddyKids + TISAverse
   - 3 slash commands

3. **Build Core Components**
   - HeaderSticky, HeroSection, ServiceCard
   - FleetTable, TestimonialCard, GalleryBlock
   - ContactForm, Footer

4. **Create Pages**
   - Home, Services (with sub-pages)
   - Fleet/Taxi, About, Testimonials
   - Gallery, Contact, FAQ

5. **Implement SEO**
   - Metadata per page
   - Global + page-specific schemas
   - XML sitemap, robots.txt

6. **Quality Checks**
   - Lighthouse CI on all pages
   - Accessibility testing
   - Security audit

7. **Deploy to Vercel**
   - GitHub linked
   - Vercel connected (ready to push)

## Building & Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
Push to GitHub - Vercel auto-deploys:
```bash
git push origin main
```

## Performance Checklist

- [ ] Hero images use `priority` attribute
- [ ] Below-fold images use `loading="lazy"`
- [ ] All images in WebP/AVIF format
- [ ] JS bundle < 200KB
- [ ] CSS < 50KB
- [ ] Fonts optimized with `next/font`
- [ ] LCP < 2.5s, FID < 100ms, CLS < 0.1

## Key Files Reference

**Configuration:**
- `next.config.ts` - Next.js optimization
- `tsconfig.json` - TypeScript config (strict mode)
- `tailwind.config.ts` - Design system
- `vercel.json` - Vercel deployment

**Styles:**
- `app/globals.css` - Global Tailwind setup
- Component-level CSS via Tailwind classes

**Docs:**
- `DEVELOPMENT_GUIDE.md` (coming)
- `SEO_GEO_IMPLEMENTATION.md` (coming)
- `QUICK_CHECKLIST.md` (coming)

## License

Private project for TeddyFix

---

**Status:** ✅ Foundation complete. Ready for Claude App to build pages and components.

**Last Updated:** November 29, 2025

**Ready for:** Page creation, component building, SEO implementation, full app development
