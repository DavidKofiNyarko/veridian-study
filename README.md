# Veretas Lumina

<p align="center">
  <img src="public/veretas-lumina-logo.png" alt="Veretas Lumina Logo" width="220" />
</p>

Veretas Lumina is a modern reading and study platform built for believers who want to go deeper in their faith. It combines an immersive Christian book library with interactive Bible references, audio narration, study groups, and community discussions into one beautifully crafted experience.

## Features

- **Immersive Reading** — Distraction-free reading with adjustable fonts, themes, and layouts
- **Tap Bible Refs** — Interactive Bible references that open instantly in context
- **Highlights & Notes** — Color-coded highlights and personal notes that sync across devices
- **Audio Narration** — Professionally narrated audiobooks with synced progress
- **Study Groups** — Join or create groups to read and discuss together
- **Community Discussions** — Thoughtful chapter-by-chapter conversations with fellow believers

## Tech Stack

- **Bundler:** Vite 5
- **UI:** React 18, TypeScript 5
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
- **Components:** shadcn/ui, Radix UI, Lucide React
- **State & Data:** TanStack Query, React Hook Form, Zod
- **Routing:** React Router DOM 6
- **Notifications:** Sonner, Toast
- **Charts:** Recharts
- **Carousel:** Embla Carousel
- **Testing:** Vitest, React Testing Library, Playwright
- **Linting:** ESLint 9
- **Tooling:** Lovable Tagger

## Prerequisites

- Node.js >= 18.17
- npm (or your preferred package manager)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the app.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
  main.tsx              # Application entry point
  App.tsx               # Root component with routing and providers
  index.css             # Global styles, theme variables, and custom utilities
  assets/               # Images and static assets
  components/
    ui/                 # shadcn/ui primitives and shared UI components
    Navbar.tsx          # Top navigation with mobile menu
    Footer.tsx          # Site footer
    HeroSection.tsx     # Landing hero
    FeaturedBooks.tsx   # Book library showcase
    FeaturesSection.tsx # Platform capabilities grid
    CommunitySection.tsx# Community engagement
    AudioSection.tsx    # Audiobook player mockup
    Testimonials.tsx    # User testimonials
    CTASection.tsx      # Call-to-action block
  pages/
    Index.tsx           # Homepage
    NotFound.tsx        # 404 fallback
  hooks/
    use-toast.ts        # Toast notification hook
    use-mobile.tsx      # Mobile breakpoint hook
  lib/
    utils.ts            # Shared utility helpers
  test/
    setup.ts            # Test environment setup
    example.test.ts     # Sample test file
public/
  veretas-lumina-logo.png
  veretas-lumina-logo.jpg
  favicon.ico
  robots.txt
  placeholder.svg
```

## Routing

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, books, features, community, audio, testimonials, and CTA |
| `*` | 404 Not Found page |

## Testing

- **Unit & Integration:** Vitest + React Testing Library
- **End-to-End:** Playwright

Run tests with `npm run test` or `npm run test:watch`.

## Deployment

Build the project with `npm run build` and deploy the output `dist/` directory to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

## Environment Variables

Sensitive configuration is managed via `.env` files. These files are gitignored by default.
