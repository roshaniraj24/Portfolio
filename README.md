# Roshani Portfolio

Personal portfolio website for Roshani Kumari, a Full Stack Developer and DevOps enthusiast. The site presents her professional experience, education, technical skills, selected projects, and contact links through a playful, editorial-inspired interface.

Live repository: [github.com/roshaniraj24/Portfolio](https://github.com/roshaniraj24/Portfolio)

## Overview

This project is a responsive single-page portfolio built with React and Vite. It combines a bold visual style with subtle motion, custom doodle elements, smooth scrolling, and project links that point to Roshani's GitHub repositories.

The frontend can run independently for a static portfolio experience. The repository also includes a FastAPI server for API routes, authentication, database initialization, and optional platform services. In production, the server can serve the compiled frontend and API from one process.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Hero section with portrait, GitHub link, and project navigation
- Experience, education, skills, projects, about, and footer sections
- Project cards linked to individual GitHub repositories
- Animated page transitions and staggered section reveals with Motion
- Smooth scrolling powered by Lenis
- Custom cursor, corner marks, doodles, scribbles, dividers, and decorative accents
- Accessible external links with safe `noopener noreferrer` handling
- Vite development server with `/api` proxy support
- Optional FastAPI backend with a health endpoint and SPA fallback
- Production build that can be served by the backend

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 with the Vite plugin
- Motion for React animations
- GSAP and `@use-gesture/react` for interactive motion utilities
- Lenis for smooth scrolling
- Lucide React for icons

### Backend

- Python 3
- FastAPI
- Uvicorn
- Pydantic Settings
- Multipart form support

## Project Structure

```text
.
├── public/
│   ├── img/                 Static images, including the profile portrait
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   └── robots.txt
├── server/
│   ├── main.py              FastAPI entrypoint and production SPA serving
│   ├── auth.py              Authentication routes
│   ├── crud.py              Data routes
│   ├── db.py                Database setup
│   ├── seed.py              Demo data seeding
│   ├── orvis.py             Environment and service helpers
│   ├── services/             Optional AI, email, image, OAuth, payment, and upload services
│   └── requirements.txt      Python dependencies
├── src/
│   ├── components/           Reusable visual and interaction components
│   ├── lib/                  Client utilities and API/store helpers
│   ├── sections/              Main portfolio sections
│   ├── App.tsx                Application composition and page layout
│   ├── index.css              Global styles and design tokens
│   └── main.tsx               React entrypoint
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.ts
```

## Requirements

- Node.js 18 or newer
- pnpm 9 or newer
- Python 3.10 or newer for the backend

## Getting Started

Clone the repository and install the frontend dependencies:

```bash
git clone https://github.com/roshaniraj24/Portfolio.git
cd Portfolio
pnpm install
```

### Frontend only

Run the portfolio in development mode:

```bash
pnpm dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in a browser.

### Frontend and backend

Create a Python virtual environment and install the backend dependencies:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Activate it on macOS or Linux:

```bash
source .venv/bin/activate
```

Install the server requirements:

```bash
pip install -r server/requirements.txt
```

Start both services from the project root:

```bash
pnpm dev:all
```

The frontend runs on port `5173` and the API runs on port `8000`. Vite proxies requests from `/api` to the backend, so the browser can use the same origin during development.

You can also start them separately:

```bash
pnpm dev
pnpm dev:server
```

Check that the backend is running:

```text
http://127.0.0.1:8000/api/health
```

Expected response:

```json
{"status":"ok"}
```

## Available Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite frontend development server |
| `pnpm dev:server` | Start the FastAPI server with auto-reload |
| `pnpm dev:all` | Start the frontend and backend together |
| `pnpm build` | Type-check the project and create the production frontend build |
| `pnpm preview` | Preview the production frontend build locally |
| `pnpm start` | Serve the built frontend and API with FastAPI |

## Production Build

Build the frontend first:

```bash
pnpm build
```

Then start the FastAPI process:

```bash
pnpm start
```

The backend serves the compiled `dist/` frontend, handles `/api/*` routes, and falls back to `dist/index.html` for client-side routes.

## Configuration

The development ports can be changed with environment variables:

```powershell
$env:WEB_PORT="5174"
$env:BACKEND_PORT="8001"
pnpm dev:all
```

On macOS or Linux:

```bash
WEB_PORT=5174 BACKEND_PORT=8001 pnpm dev:all
```

Backend-specific secrets and service configuration belong in local environment files. Do not commit `.env` files, API keys, passwords, tokens, database files, or generated build output.

## Updating Portfolio Content

- Edit the main page composition in `src/App.tsx`.
- Edit section content in `src/sections/`.
- Update colors, typography, and global layout rules in `src/index.css`.
- Update reusable decorative elements in `src/components/Doodles.tsx`.
- Update project names, descriptions, technologies, dates, and repository links in `src/sections/Projects.tsx`.
- Replace the profile image at `public/img/roshani.jpg` when updating the portrait.

## Deployment Notes

The project can be deployed as a static Vite site after running `pnpm build`. If API functionality is required, deploy the Python server with the built `dist/` directory and run `pnpm start` or the equivalent Uvicorn command.

For a static deployment, configure the host to serve `index.html` for unknown routes. The current portfolio uses hash-free client-side sections and does not require a database for the frontend-only experience.

## License

No license has been specified yet. Contact the repository owner before reusing the design, code, images, or portfolio content in another project.