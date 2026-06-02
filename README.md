# Karol Stróż — Personal Portfolio

A modern, performant personal portfolio website built with Next.js 16 and React 19. The site showcases my skills, projects, and work process as a Fullstack Developer.

**Live site:** [karolstroz.vercel.app](https://karolstroz.vercel.app) *(update with your actual URL)*

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Root page — composes all sections
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── globals.css       # Global styles & design tokens
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MagneticButton.tsx
│   ├── Icons.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProcessSection.tsx
│       ├── ProjectsSection.tsx
│       ├── TestimonialsSection.tsx
│       └── ContactSection.tsx
└── lib/
    ├── data.ts           # All portfolio content (single source of truth)
    ├── animations.ts     # Reusable Framer Motion variants
    └── utils.ts          # Utility helpers
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Customizing Content

All portfolio content lives in [src/lib/data.ts](src/lib/data.ts). Edit the `portfolioData` object to update your name, bio, skills, projects, testimonials, and contact links — no need to touch any component files.

## Contact

- Email: karolstroz34@gmail.com
- GitHub: [github.com/lorak12](https://github.com/lorak12)
- LinkedIn: [linkedin.com/in/karolstroz](https://linkedin.com/in/karolstroz)
