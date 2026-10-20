# GEOCELL Website

Professional English product website for Geocell (Honeycomb Confinement System / PCA Geocell).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Vercel (static export)

## Brand Design Tokens

- **Primary**: Slate Rock Grey `#37474F`
- **Accent**: Eco Forest Green `#2E7D32`
- **Surface**: Pearl Grey `#F5F7F8`
- **Border Radius**: Max 4px (engineering-grade feel)

## Project Structure

```
geocell-website/
├── public/
│   ├── downloads/                 # PDF, DWG files
│   └── images/                    # Case study images
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── sitemap.ts            # SEO sitemap
│   │   ├── robots.ts             # SEO robots
│   │   ├── products/geocell/     # Product detail page
│   │   ├── cases/                # Engineering cases
│   │   ├── support/              # Tech support + FAQ
│   │   ├── about/                # About us
│   │   └── contact/              # Contact + quote form
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── ui/                   # Button, Card, SpecTable, Tag, Section
│   │   └── sections/             # Homepage sections
│   └── data/                     # Product & case data
├── next.config.js
└── tailwind.config.js
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

- **Platform**: Vercel
- **Production branch**: `master`
- **Production domain**: https://www.sylvageo.com
- Approved changes reaching `master` trigger the production deployment through the Vercel-connected repository.
- GitHub Pages is not used for production.
