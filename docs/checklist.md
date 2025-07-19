# 📝 Project Implementation Checklist

## 1. Monorepo & Workspace Setup

- [x] Initialize a new monorepo with pnpm workspaces
- [x] Create the following folder structure:
  - [x] /apps/ecommerce
  - [x] /apps/checkout
  - [x] /apps/shared
  - [x] /nginx
  - [x] /docker-compose.yml
  - [x] /pnpm-workspace.yaml
- [x] Configure `pnpm-workspace.yaml` to include all apps

---

## 2. Shared Module (apps/shared)

- [ ] Initialize a TypeScript package for shared components, hooks, and styles
- [ ] Set up Rollup for building the shared module (TypeScript and CSS)
- [x] Configure TailwindCSS v4 for the shared module
- [x] Add example components (e.g., Button), hooks, and a global style file
- [x] Document how to build and consume the shared module

---

## 3. Ecommerce Micro Frontend (apps/ecommerce)

- [x] Scaffold a Next.js 15 app
- [x] Configure TailwindCSS v4
- [x] Set up TypeScript and basic linting
- [x] Integrate the shared module (import components/styles)
- [ ] Implement:
  - [ ] Home page (list products from Fake Store API)
  - [ ] Search page (filter products)
  - [ ] Product detail page
- [ ] Ensure all pages are responsive and accessible
- [ ] Add navigation between Home, Search, and Product pages

---

## 4. Checkout Micro Frontend (apps/checkout)

- [x] Scaffold a Next.js 15 app
- [x] Configure TailwindCSS v4
- [x] Set up TypeScript and basic linting
- [x] Integrate the shared module
- [ ] Implement:
  - [ ] Checkout page (cart summary, form, confirmation)
- [ ] Ensure the page is responsive and accessible

---

## 5. Micro Frontends Integration

- [x] Ensure both apps are fully independent (no direct imports between them)
- [x] Use only the shared module for code reuse
- [x] Prepare both apps for Docker build

---

## 6. Docker & Nginx Setup

- [x] Create Dockerfiles for each app
- [x] Create a Dockerfile for the shared module (if needed for build)
- [x] Write a `docker-compose.yml` to orchestrate all services
- [x] Configure Nginx as a reverse proxy:
  - [ ] Route `/` and `/product*` to ecommerce
  - [ ] Route `/search*` to ecommerce
  - [x] Route `/checkout*` to checkout
- [ ] Test local development with `docker compose up --build`

---

## 7. Testing & Quality

- [ ] Set up Jest for unit and integration tests in all packages
- [ ] Write tests for main flows (product listing, search, product details, checkout)
- [ ] Configure Prettier and ESLint for code style and linting
- [ ] Set up pre-commit hooks (lint, prettier)

---

## 8. Documentation

- [x] Write a complete `README.md` with:
  - [x] Project overview and architecture
  - [ ] How to run locally (Docker)
  - [ ] How to build and test
  - [ ] How to contribute
- [ ] Document the shared module usage and build process
- [x] Add `.cursor-rules.json` and reference it in the docs

---

## 9. Final Review & Delivery

- [ ] Validate all requirements from the challenge
- [ ] Ensure the project is public on GitHub
- [ ] Check that all scripts, builds, and tests work via Docker Compose
- [ ] Submit the repository link for evaluation
