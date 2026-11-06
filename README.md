# LiquiNext Design System

A design lab for building LiquiNext's own UI components and brand identity.

## Docs

- [docs/DESIGN.md](docs/DESIGN.md): the design-system spec (colors, typography, spacing, motion, theming, accessibility).
- [docs/PROJECT.md](docs/PROJECT.md): project details (stack, structure, components, conventions, gotchas).

## Getting started

This project uses [pnpm](https://pnpm.io) (not npm or yarn).

```bash
pnpm install   # install dependencies
pnpm dev       # start the dev server
```

The dev server runs at http://localhost:5173. If that port is busy, Vite picks the next free one.

## Scripts

| Command                                       | What it does                                                           |
| --------------------------------------------- | ---------------------------------------------------------------------- |
| `pnpm dev`                                    | Starts the Vite dev server with hot reload.                            |
| `pnpm build`                                  | Type-checks with `tsc -b`, then creates a production build in `dist/`. |
| `pnpm preview`                                | Serves the production build locally to check it.                       |
| `pnpm lint`                                   | Lints the code with oxlint.                                            |
| `pnpm format`                                 | Formats all files with Prettier (writes changes).                      |
| `pnpm format:check`                           | Checks formatting without changing files (useful for CI).              |
| `pnpm exec tsc -p tsconfig.app.json --noEmit` | Fast type check only, no build output.                                 |
