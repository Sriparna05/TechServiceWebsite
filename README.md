# Ementora Tech Service Website

A modern, responsive web application for Ementora's IT and digital services, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡ Fast Vite + React + TypeScript setup
- 🎨 Beautiful, mobile-friendly UI with Tailwind CSS
- 🧩 Modular component structure
- 🔥 Animated testimonial slider
- 📄 Pages: Home, About, Services, Contact, NotFound
- 📦 Path aliasing for clean imports (`@/`)
- 🛠️ Dev tools: ESLint, PostCSS, SWC, and more

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components (Home, About, etc.)
│   ├── data/            # Shared data (contact info, etc.)
│   └── main.tsx         # App entry point
├── public/              # Static assets
├── index.html           # Main HTML file
├── tailwind.config.ts   # Tailwind CSS config
├── vite.config.ts       # Vite config
└── ...
```

## Deployment

- Supports deployment on Vercel, Netlify, Render, and other static hosts.
- Preview host allowed: `techservicewebsite.onrender.com`
