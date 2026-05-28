# 🌿 Plantation Dashboard

A modern, responsive plantation management dashboard built with **React 19**, **Vite**, and **Tailwind CSS**. Features interactive charts, smooth animations, and a clean UI for monitoring plantation data.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^19.2.6 | UI framework |
| Vite | ^8.0.12 | Build tool & dev server |
| Tailwind CSS | ^4.3.0 | Utility-first styling |
| Framer Motion | ^12.40.0 | Animations |
| Recharts | ^3.8.1 | Charts & data visualization |
| React Router DOM | ^7.15.1 | Client-side routing |
| Lucide React | ^1.17.0 | Icons |
| React Icons | ^5.6.0 | Extended icon library |

---

## 📋 Prerequisites

Make sure you have the following installed before getting started:

- **Node.js** `v18.0.0` or higher → [Download](https://nodejs.org/)
- **npm** `v9+` (comes with Node.js) or **yarn** / **pnpm**

Check your versions:
```bash
node -v
npm -v
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/rushi0712/plantation-dashboard.git
cd plantation-dashboard
```

### 2. Install dependencies
```bash
npm install
```
> This will install all packages listed in `package.json` automatically.

---

## 🖥️ Running the App

### Start development server
```bash
npm run dev
```
Open your browser at **http://localhost:5173**

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Run linter
```bash
npm run lint
```

---

## 📦 Full Dependency List

### Dependencies (installed in production)

```
@tailwindcss/vite     ^4.3.0    — Tailwind CSS Vite plugin
framer-motion         ^12.40.0  — Animation library
lucide-react          ^1.17.0   — Icon pack
react                 ^19.2.6   — Core React library
react-dom             ^19.2.6   — React DOM renderer
react-icons           ^5.6.0    — Popular icon sets
react-router-dom      ^7.15.1   — Routing
recharts              ^3.8.1    — Chart components
tailwindcss           ^4.3.0    — CSS utility framework
```

### Dev Dependencies (used only during development)

```
@eslint/js                  ^10.0.1   — ESLint JS config
@types/react                ^19.2.14  — React TypeScript types
@types/react-dom            ^19.2.3   — React DOM TypeScript types
@vitejs/plugin-react        ^6.0.1    — Vite plugin for React
eslint                      ^10.3.0   — Linter
eslint-plugin-react-hooks   ^7.1.1    — React hooks linting rules
eslint-plugin-react-refresh ^0.5.2    — Fast refresh linting
globals                     ^17.6.0   — Global variables config
vite                        ^8.0.12   — Build tool
```

---

## 📁 Project Structure

```
plantation-dashboard/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── App.jsx         # Root component & routes
│   └── main.jsx        # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Troubleshooting

**`npm install` fails?**
- Make sure Node.js is v18 or above.
- Try clearing cache: `npm cache clean --force` then `npm install` again.

**Port already in use?**
- Vite defaults to port `5173`. Run on a different port:
  ```bash
  npm run dev -- --port 3000
  ```

**Styles not loading?**
- Tailwind CSS v4 requires the `@tailwindcss/vite` plugin. Make sure `vite.config.js` includes it.

---
