# Component Pattern

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

# Main Libraries Used

- **TailwindCSS**: Used for all styling, with utility and responsive classes.
- **tailwind-variants**: For creating typed, reusable component variants.
- **@heroicons/react**: Modern, accessible SVG icons.
- **React Testing Library**: For unit testing components.
- **Jest**: Test runner and assertions.
- **Zod**: Schema validation and typing for data.
- **Next.js**: Main framework, using App Router (Next 13+).

# Best Practices

- Always prioritize accessibility and SEO.
- Components must be reusable and decoupled.
- Follow the folder structure and centralized exports.
- Use realistic mocks and examples in tests.
- Document props and usage examples when needed. 