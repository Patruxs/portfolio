# Lai Thuan Phat - Portfolio

Personal portfolio website of Lai Thuan Phat, a software engineering student at Saigon Technology University focused on backend development with Java, Spring Boot, and PostgreSQL.

**Live site:** [patruxs.github.io/portfolio](https://patruxs.github.io/portfolio/)

## Features

- Single-page portfolio with home, work and education, projects, and contact sections
- Light and dark mode with system preference detection
- Fully responsive layout for desktop, tablet, and mobile
- Downloadable CV
- Static export deployed automatically to GitHub Pages

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building

Create a production build (static export to the `out/` directory):

```bash
npm run build
```

To build with the GitHub Pages base path, as the deployment does:

```bash
BASE_PATH=/portfolio npm run build
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the static export with `BASE_PATH=/portfolio` and publishes it to GitHub Pages.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, metadata, footer
    page.tsx            # Home page composing all sections
    globals.css         # Tailwind theme and fonts
    fonts/              # Bundled display font
  components/
    Navbar.tsx          # Navigation with theme toggle
    WorkAndEducation.tsx# Work experience and education tabs
    ProjectHome.tsx     # Project showcase
    Contact.tsx         # Contact details
public/
  files/                # Downloadable CV
  images/               # Profile photo
```

## Contact

- Email: laithuanphat.work@gmail.com
- GitHub: [@Patruxs](https://github.com/Patruxs)
- LinkedIn: [patruxs](https://www.linkedin.com/in/patruxs/)
