# E-commerce Micro Frontends Monorepo

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
- `pnpm lint` — Run ESLint across the entire monorepo.

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

---

## 🏗️ Architecture
- **Micro Frontend 1:** Home, Search, and Product Page ([apps/ecommerce](apps/ecommerce))
- **Micro Frontend 2:** Checkout ([apps/checkout](apps/checkout))
- **Shared Module:** Reusable components, hooks, and styles ([apps/shared](apps/shared))
- **Orchestration:** Docker Compose + Nginx reverse proxy for seamless routing between micro frontends

```
/apps
  /ecommerce   # Home, Search, Product
  /checkout    # Checkout
  /shared      # Shared components, hooks, styles
/nginx         # Nginx reverse proxy config
docker-compose.yml
pnpm-workspace.yaml
```

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

---

## 🛒 Project Overview
This project is a modern e-commerce platform built as a monorepo using micro frontends architecture. It was developed for a practical challenge to demonstrate scalable, maintainable, and modular front-end solutions using Next.js 15, TailwindCSS v4, and a shared module for code reuse. The system is fully dockerized and orchestrated with Nginx as a reverse proxy.

## 🚀 Tech Stack
- [Next.js 15](https://nextjs.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [Rollup](https://rollupjs.org/) (shared module build)
- [Jest](https://jestjs.io/) (testing)
- [Docker & Docker Compose](https://docs.docker.com/compose/)
- [Nginx](https://www.nginx.com/) (reverse proxy)
- [Fake Store API](https://fakestoreapi.com/) (data source)

## 📡 API Data (Fake Store API)
This project uses the [Fake Store API](https://fakestoreapi.com/) as its data source for all product-related features. Below are the main endpoints and their usage:

### Main Endpoints
- **List all products:**
  - `GET https://fakestoreapi.com/products`
  - _Used on Home and Search pages to display all products._
- **Get product details:**
  - `GET https://fakestoreapi.com/products/{id}`
  - _Used on the Product Detail page to show information about a specific product._
- **List all categories:**
  - `GET https://fakestoreapi.com/products/categories`
  - _Used for filtering/searching products by category._
- **List products by category:**
  - `GET https://fakestoreapi.com/products/category/{category}`
  - _Used on Search or Home to filter products by category._
- **Cart/Checkout (optional):**
  - `GET https://fakestoreapi.com/carts/user/{userId}`
  - _Can be used to simulate cart retrieval for the checkout flow._

### Example Data Structure
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": { "rate": 3.9, "count": 120 }
}
```

### Usage in Micro Frontends
- **Ecommerce (Home, Search, Product):**
  - Fetches product lists, product details, and categories for display and filtering.
- **Checkout:**
  - Can fetch cart data and display a summary of selected products (simulated, as the API is public and stateless).

For more details, see the [Fake Store API documentation](https://fakestoreapi.com/docs).

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
- Use TailwindCSS utility classes for all styling.
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

## �� Commit Messages

- All commits must be written in English.
- Use clear and descriptive messages to make the project history easy to understand.

## 📋 Challenge Requirements
- Micro frontends architecture (ecommerce & checkout as separate apps)
- Data from Fake Store API
- Componentization and code reuse
- Responsive and accessible design
- UI library (TailwindCSS)
- Smooth navigation between micro frontends (via Nginx)
- Automated tests for main flows
- Docker Compose for local development

## 📑 License
MIT 

## Component Pattern & Structure

- Each component must be in its own folder under `src/components` or `src/commons`.
- Minimum structure: `component.tsx`, `component.variants.ts`, `component.test.tsx`, `index.tsx` (barrel export).
- Always use TailwindCSS for styling, preferably via `tailwind-variants` for variants.
- Always export via the barrel (`index.tsx`).
- Components must be accessible: use roles, aria-labels, keyboard navigation, etc.
- Unit tests are required for rendering, accessibility, and main props.
- Style variables must be separated in `component.variants.ts`.
- Use centralized Link, Button, etc, in `commons`.
- Responsive and mobile-first layouts.
- Avoid unnecessary state logic in pure UI components.

## Main Libraries Used

- **TailwindCSS**: Utility-first CSS framework for all styling.
- **tailwind-variants**: Typed, reusable component variants.
- **@heroicons/react**: Modern, accessible SVG icons.
- **React Testing Library**: For unit testing components.
- **Jest**: Test runner and assertions.
- **Zod**: Schema validation and typing for data.
- **Next.js**: Main framework, using App Router (Next 13+).

## Best Practices

- Always prioritize accessibility and SEO.
- Components must be reusable and decoupled.
- Follow the folder structure and centralized exports.
- Use realistic mocks and examples in tests.
- Document props and usage examples when needed. 