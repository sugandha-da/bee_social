# Implementation Plan - BeeSocial Agency Bot

**Goal:** Build a scalable, production-ready Next.js application for "BeeSocial" - an AI Social Media Agency Bot.

## User Review Required
> [!IMPORTANT]
> **Database Credentials:** I will set up the code to use **Supabase** (PostgreSQL). You will need to provide the `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in a `.env.local` file later. For now, I will create the structure and mock the env vars.

## Proposed Structure (Industry Standard)
We will use a **Feature-First Architecture** combined with Next.js App Router.

```text
/src
  /app          (Routes & Pages)
  /components
    /ui         (Shadcn Atomic Components)
    /features   (Business Logic Components e.g., /dashboard, /onboarding)
  /lib          (Utilities, DB Clients, AI Clients)
  /server       (Server Actions)
  /types        (TypeScript Intefaces)
```

## Phase 1: Foundation Setup (Current Task)

### 1. Initialize Next.js Project
- Setup Next.js 14+ (App Router, TypeScript, Tailwind CSS, ESLint).
- **Tooling:** Install `lucide-react` (Icons), `clsx`, `tailwind-merge`.

### 2. Design System (Shadcn UI)
- Initialize Shadcn UI.
- Install core components: `Button`, `Input`, `Card`, `Form`, `Dialog`, `DropdownMenu`.
- Configure `globals.css` with a "Premium/Agency" theme (Inter Font, clean whites, vibrant purples/blues for action).

### 3. Database Schema Migration Setup
- Create a `db/schema.sql` file to track our Postgres schema.
- **Initial Tables:** `users`, `brand_profiles`, `posts`, `content_plans`.

### 4. Project Scaffolding
- Create folder structure (`src/components/features`, `src/server/actions`).
- Create empty Placeholder Pages:
    - `/` (Landing/Login)
    - `/dashboard` (Main App)
    - `/onboarding` (Brand Setup)

## Verification Plan

### Automated
1.  Run `npm run build` to ensure type safety and build validity.
2.  Run `npm run lint` to enforce coding standards.

### Manual Verification
1.  Launch dev server (`npm run dev`).
2.  Verify the Home page loads with the correct styling/font.
3.  Check that Shadcn components render correctly.
