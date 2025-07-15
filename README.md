# E-commerce Micro Frontends Monorepo

## 🛒 Project Overview
This project is a modern e-commerce platform built as a monorepo using micro frontends architecture. It demonstrates scalable, maintainable, and modular front-end solutions using Next.js 15, TailwindCSS v4, and a shared module for code reuse. The system is fully dockerized and orchestrated with Nginx as a reverse proxy.

## 🏗️ Architecture
- **Micro Frontend 1:** Home, Search, and Product Page ([apps/ecommerce](apps/ecommerce))
- **Micro Frontend 2:** Checkout ([apps/checkout](apps/checkout))
- **Shared Module:** Reusable components, hooks, and styles ([apps/shared](apps/shared))
- **Core Module:** Centralized global configuration for all apps ([apps/core](apps/core))
- **Orchestration:** Docker Compose + Nginx reverse proxy for seamless routing between micro frontends

```
/apps
  /ecommerce   # Home, Search, Product
  /checkout    # Checkout
  /shared      # Shared components, hooks, styles
  /core        # Global configs (Tailwind, ESLint, Jest, TSConfig)
/nginx         # Nginx reverse proxy config
docker-compose.yml
pnpm-workspace.yaml
```

## 🚀 Tech Stack
- [Next.js 15](https://nextjs.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [tailwind-variants](https://tailwind-variants.org/) (all styling via slots)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [Rollup](https://rollupjs.org/) (shared module build)
- [Jest](https://jestjs.io/) (testing)
- [Docker & Docker Compose](https://docs.docker.com/compose/)
- [Nginx](https://www.nginx.com/) (reverse proxy)
- [Fake Store API](https://fakestoreapi.com/) (data source)

## ✨ Styling & Component Pattern
- **All styling is done exclusively with TailwindCSS utility classes.**
- **Every component uses [tailwind-variants](https://tailwind-variants.org/) with `slots` for all styled parts.**
- No Tailwind classes are allowed directly in JSX—always use slots from the variant file.
- Example:
  ```ts
  // card.variants.ts
  export const card = tv({
    slots: {
      base: '...',
      image: '...',
      title: '...',
      price: '...',
      button: '...',
    }
  });
  ```
  ```tsx
  // Card.tsx
  const S = card();
  <article className={S.base()}>
    <img className={S.image()} ... />
    <h2 className={S.title()} ... />
    <p className={S.price()} ... />
    <button className={S.button()} ... />
  </article>
  ```
- **Mobile-first and fully responsive layouts.**
- **Accessibility is a must:** use roles, aria-labels, keyboard navigation, etc.
- **All style variables and classes are centralized in the `component.variants.ts` file.**
- **No inline or external CSS.**

## 🚦 Recommended Development Workflow
1. Start shared in watch mode (in one terminal):
   ```sh
   pnpm --filter @ecommerce-mfe/shared... dev
   ```
2. In another terminal, start the desired app (ecommerce or checkout):
   ```sh
   pnpm --filter @ecommerce-mfe/ecommerce... dev
   # or
   pnpm --filter @ecommerce-mfe/checkout... dev
   ```
3. For production builds, use the `build` and `start` scripts for each app.
4. (Optional) Use a tool like `concurrently` to run multiple dev servers in one terminal.

## 🧪 Lint, Prettier & Tests
- Lint, Prettier, and tests run automatically on pre-commit via Husky + lint-staged.
- To run manually:
  - `pnpm lint` — Global lint.
  - `pnpm test:all` — Global tests.

## 🐳 Docker
- Use the root `docker:*` scripts to build, start, and stop containers.

## 📡 API Data (Fake Store API)
This project uses the [Fake Store API](https://fakestoreapi.com/) as its data source for all product-related features. See the API docs for endpoints and usage.

## ⚡ Getting Started
### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/) (for local development)

### Running with Docker Compose
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd ecommerce-mfe
   ```
2. Start all services:
   ```sh
   docker compose up --build
   ```
3. Access the app:
   - `http://localhost/` → Home, Search, Product (ecommerce)
   - `http://localhost/checkout` → Checkout

## 🧩 Development Workflow
- All code reuse must go through the shared module ([apps/shared](apps/shared)).
- **All styling must use Tailwind Variants with slots.**
- **No Tailwind classes in JSX.**
- Follow accessibility best practices (aria-labels, roles, etc).
- Use descriptive and semantic naming for all variables, functions, and components.
- Use `const` for handlers and functions, and prefer early returns.
- Keep code DRY, clean, and well-commented when necessary.
- See [docs/checklist.md](docs/checklist.md) for a full implementation checklist.

## 🧪 Testing
- Automated tests are required for all main flows (product listing, search, product details, checkout).
- Run tests with:
  ```sh
  pnpm test
  ```
- Prettier and ESLint are enforced via pre-commit hooks.

## 🤝 Contributing
- All new features and fixes must be developed in a separate branch.
- Submit a Pull Request with a clear description of the purpose and changes.
- All tests must pass before requesting a review.
- Do not merge directly into the main branch.
- See [rules](.cursor-rules.json) for full conventions and collaboration guidelines.

## 📜 Rules & Conventions
- See [.cursor-rules.json](.cursor-rules.json) for all project rules, conventions, and architecture.
- All contributors must follow these rules to ensure code quality and consistency.

## 📋 Challenge Requirements
- Micro frontends architecture (ecommerce & checkout as separate apps)
- Data from Fake Store API
- Componentization and code reuse
- Responsive and accessible design
- UI library (TailwindCSS + tailwind-variants)
- Smooth navigation between micro frontends (via Nginx)
- Automated tests for main flows
- Docker Compose for local development

## 📑 License
MIT 

## 🧩 Core Module: Global Configuration

The `core` module (`apps/core`) centralizes all global configuration files and base settings for the monorepo. This ensures consistency and DRY principles across all micro frontends and shared code. All apps extend or import these configs.

**What you find in `apps/core`:**

- `tailwind/` — Base Tailwind config (`tailwind.config.ts`), global styles (`globals.css`), and PostCSS config. All apps extend from here.
- `eslint/` — Base ESLint config (`index.js`). All apps extend this for linting rules and ignores.
- `jest/` — Base Jest config (`base.config.cjs`). Used for consistent test setup and coverage.
- `tsconfig/` — Base TypeScript config (`base.json`). All apps extend this for type safety and path aliases.
- `package.json` — Declares peer dependencies for config packages (Tailwind, PostCSS, etc).

**How to use:**
- Each app imports or extends the configs from `core` in its own config files (e.g., `tsconfig.json`, `eslint.config.js`, `tailwind.config.ts`, `jest.config.cjs`).
- To update global rules or styles, change them in `core` and re-build/restart the apps.

**Benefits:**
- Single source of truth for all global settings
- Consistent linting, typing, and styling across the monorepo
- Easier upgrades and maintenance 

## 🚀 Quick Start: Monorepo Commands

### Root Scripts

- `pnpm dev:ecommerce` — Start the ecommerce app (Next.js) in dev mode and shared in watch mode (Rollup).
- `pnpm dev:checkout` — Start the checkout app (Next.js) in dev mode and shared in watch mode (Rollup).
- `pnpm start:ecommerce` — Start the ecommerce app in production mode.
- `pnpm start:checkout` — Start the checkout app in production mode.
- `pnpm docker:build` — Build all Docker containers (docker-compose).
- `pnpm docker:up` — Start all Docker containers in the background.
- `pnpm docker:down` — Stop and remove all Docker containers.
- `pnpm docker:logs` — Show logs from Docker containers.
- `pnpm test:all` — Run all tests in the monorepo (Jest).
- `pnpm test:shared` — Run tests for the shared module only.
- `pnpm lint` — Run ESLint across the entire monorepo.

> All scripts listed above exist and are ready to use. Internal scripts like `barrel` are used by the shared module and do not need to be run manually.

### App Scripts

#### Ecommerce ([apps/ecommerce](apps/ecommerce))
- `pnpm --filter @ecommerce-mfe/ecommerce... dev` — Start Next.js in dev mode.
- `pnpm --filter @ecommerce-mfe/ecommerce... build` — Build for production.
- `pnpm --filter @ecommerce-mfe/ecommerce... start` — Start in production mode.
- `pnpm --filter @ecommerce-mfe/ecommerce... lint` — Run Next.js lint.
- `pnpm --filter @ecommerce-mfe/ecommerce... test` — Run app tests.

#### Checkout ([apps/checkout](apps/checkout))
- `pnpm --filter @ecommerce-mfe/checkout... dev` — Start Next.js in dev mode.
- `pnpm --filter @ecommerce-mfe/checkout... build` — Build for production.
- `pnpm --filter @ecommerce-mfe/checkout... start` — Start in production mode.
- `pnpm --filter @ecommerce-mfe/checkout... lint` — Run Next.js lint.
- `pnpm --filter @ecommerce-mfe/checkout... test` — Run app tests.

#### Shared ([apps/shared](apps/shared))
- `pnpm --filter @ecommerce-mfe/shared... dev` — Run Rollup in watch mode (rebuild on change).
- `pnpm --filter @ecommerce-mfe/shared... build` — Build shared (JS + types).
- `pnpm --filter @ecommerce-mfe/shared... test` — Run shared tests. 