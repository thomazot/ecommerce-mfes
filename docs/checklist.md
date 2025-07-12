# 📝 Project Implementation Checklist

## 1. Monorepo & Workspace Setup
- [ ] Initialize a new monorepo with pnpm workspaces
- [ ] Create the following folder structure:
  - [ ] /apps/ecommerce
  - [ ] /apps/checkout
  - [ ] /apps/shared
  - [ ] /nginx
  - [ ] /docker-compose.yml
  - [ ] /pnpm-workspace.yaml
- [ ] Configure `pnpm-workspace.yaml` to include all apps

---

## 2. Shared Module (apps/shared)
- [ ] Initialize a TypeScript package for shared components, hooks, and styles
- [ ] Set up Rollup for building the shared module (TypeScript and CSS)
- [ ] Configure TailwindCSS v4 for the shared module
- [ ] Add example components (e.g., Button), hooks, and a global style file
- [ ] Document how to build and consume the shared module

---

## 3. Ecommerce Micro Frontend (apps/ecommerce)
- [ ] Scaffold a Next.js 15 app
- [ ] Configure TailwindCSS v4
- [ ] Set up TypeScript and basic linting
- [ ] Integrate the shared module (import components/styles)
- [ ] Implement:
  - [ ] Home page (list products from Fake Store API)
  - [ ] Search page (filter products)
  - [ ] Product detail page
- [ ] Ensure all pages are responsive and accessible
- [ ] Add navigation between Home, Search, and Product pages

---

## 4. Checkout Micro Frontend (apps/checkout)
- [ ] Scaffold a Next.js 15 app
- [ ] Configure TailwindCSS v4
- [ ] Set up TypeScript and basic linting
- [ ] Integrate the shared module
- [ ] Implement:
  - [ ] Checkout page (cart summary, form, confirmation)
- [ ] Ensure the page is responsive and accessible

---

## 5. Micro Frontends Integration
- [ ] Ensure both apps are fully independent (no direct imports between them)
- [ ] Use only the shared module for code reuse
- [ ] Prepare both apps for Docker build

---

## 6. Docker & Nginx Setup
- [ ] Create Dockerfiles for each app
- [ ] Create a Dockerfile for the shared module (if needed for build)
- [ ] Write a `docker-compose.yml` to orchestrate all services
- [ ] Configure Nginx as a reverse proxy:
  - [ ] Route `/` and `/product*` to ecommerce
  - [ ] Route `/search*` to ecommerce
  - [ ] Route `/checkout*` to checkout
- [ ] Test local development with `docker compose up --build`

---

## 7. Testing & Quality
- [ ] Set up Jest for unit and integration tests in all packages
- [ ] Write tests for main flows (product listing, search, product details, checkout)
- [ ] Configure Prettier and ESLint for code style and linting
- [ ] Set up pre-commit hooks (lint, prettier)

---

## 8. Documentation
- [ ] Write a complete `README.md` with:
  - [ ] Project overview and architecture
  - [ ] How to run locally (Docker)
  - [ ] How to build and test
  - [ ] How to contribute
- [ ] Document the shared module usage and build process
- [ ] Add `.cursor-rules.json` and reference it in the docs

---

## 9. Final Review & Delivery
- [ ] Validate all requirements from the challenge
- [ ] Ensure the project is public on GitHub
- [ ] Check that all scripts, builds, and tests work via Docker Compose
- [ ] Submit the repository link for evaluation 