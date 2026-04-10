# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Next.js 15 + Payload CMS 3.0** full-stack application using TypeScript, MongoDB, and Tailwind CSS. The project combines a headless CMS (Payload) with a custom Next.js frontend, featuring a dual-route architecture that separates admin and public-facing pages.

## Development Commands

### Essential Commands
- `pnpm dev` - Start the development server on http://localhost:3000
- `pnpm devsafe` - Clean `.next` directory and start dev server (use when facing cache issues)
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

### Payload-Specific Commands
- `pnpm payload` - Access Payload CLI commands
- `pnpm generate:types` - Generate TypeScript types from Payload collections (creates `src/payload-types.ts`)
- `pnpm generate:importmap` - Generate import map for Payload admin UI

### Testing Commands
- `pnpm test` - Run all tests (integration + e2e)
- `pnpm test:int` - Run integration tests with Vitest (tests in `tests/int/`)
- `pnpm test:e2e` - Run end-to-end tests with Playwright (tests in `tests/e2e/`)

To run a single test file:
- Integration: `pnpm exec vitest run tests/int/specific-test.int.spec.ts`
- E2E: `pnpm exec playwright test tests/e2e/specific-test.e2e.spec.ts`

### Docker Commands
- `docker-compose up` - Start MongoDB and app in containers
- `docker-compose up -d` - Start containers in background
- `docker-compose down` - Stop and remove containers

## Architecture

### Dual Route Structure
The app uses Next.js route groups to separate concerns:

1. **`(payload)` Route Group** - Admin/CMS routes
   - `/admin/*` - Payload admin panel (auto-generated)
   - `/api/*` - Payload REST API endpoints
   - `/api/graphql` - Payload GraphQL endpoint
   - `/api/graphql-playground` - GraphQL playground

2. **`(app)` Route Group** - Public-facing application
   - `/` - Homepage and custom application routes
   - Custom UI components and pages

This architecture allows the CMS admin panel and frontend to coexist in the same Next.js app while maintaining separation.

### Key Directories
- `src/collections/` - Payload CMS collection schemas (Users, Media)
- `src/components/ui/` - shadcn/ui components (Radix UI + Tailwind)
- `src/components/` - Custom React components
- `src/app/(payload)/` - Payload admin and API routes
- `src/app/(app)/` - Frontend application routes
- `src/lib/` - Utility functions (e.g., `cn()` for class merging)
- `src/hooks/` - Custom React hooks
- `tests/int/` - Integration tests (Vitest)
- `tests/e2e/` - End-to-end tests (Playwright)

### TypeScript Configuration
- Path aliases: `@/*` maps to `src/*`
- Special alias: `@payload-config` maps to `src/payload.config.ts`
- Payload auto-generates types in `src/payload-types.ts` - do not edit manually

### Payload Collections
Collections are defined in `src/collections/` and registered in `src/payload.config.ts`. The project includes:
- **Users** - Auth-enabled collection for admin access
- **Media** - Upload-enabled collection for images/files with alt text

When creating new collections, always:
1. Define the collection in `src/collections/YourCollection.ts`
2. Add it to the collections array in `src/payload.config.ts`
3. Run `pnpm generate:types` to update TypeScript types

## Environment Setup

Required environment variables (see `.env.example`):
- `DATABASE_URI` - MongoDB connection string
  - Local: `mongodb://127.0.0.1/your-database-name`
  - Docker: `mongodb://mongo/your-database-name`
- `PAYLOAD_SECRET` - Secret key for Payload (generate a random string)

## Styling and Components

This project uses **shadcn/ui** with the "new-york" style variant:
- Component library: Radix UI primitives
- Styling: Tailwind CSS v4 with CSS variables
- Theme: Zinc color scheme with CSS variables for theming
- Icon library: lucide-react

To add new shadcn/ui components: Install manually or via shadcn CLI (config in `components.json`)

## Testing Strategy

### Integration Tests (Vitest)
- Test Payload API and backend logic
- Use the Payload instance directly
- Located in `tests/int/` with `*.int.spec.ts` naming

### E2E Tests (Playwright)
- Test frontend user interactions
- Run against local dev server (auto-started by Playwright config)
- Located in `tests/e2e/` with `*.e2e.spec.ts` naming

## Code Quality

### ESLint Rules
The project uses custom ESLint rules (see `eslint.config.mjs`):
- TypeScript warnings for `any`, `@ts-ignore`, empty object types
- Unused variables allowed if prefixed with `_`
- Caught errors ignored if prefixed with `_` or named `ignore`

### Node Version
- Required: Node.js ^18.20.2 || >=20.9.0
- Package manager: pnpm ^9 || ^10 (required, not npm or yarn)

## Common Patterns

### Utility Function for Classes
Use the `cn()` utility from `@/lib/utils` for conditional class merging:
```typescript
import { cn } from '@/lib/utils'
<div className={cn("base-classes", condition && "conditional-classes")} />
```

### Accessing Payload in API Routes
```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const items = await payload.find({ collection: 'collection-name' })
```

## Important Notes

- **Do not edit auto-generated files**: Files marked with "THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD" should not be manually edited
- **Run type generation**: After modifying Payload collections, always run `pnpm generate:types`
- **Use pnpm**: This project requires pnpm as the package manager (configured in package.json)
- **Media directory**: The `/media` directory is gitignored for uploaded files
