# Furniture Restoration

Web application for furniture restoration management.

The project is built with **Next.js, React, TypeScript, PostgreSQL and Prisma**.

The project uses three completely separate databases:

* **Local** — PostgreSQL running in Docker
* **Dev** — PostgreSQL hosted in Neon
* **Prod** — PostgreSQL hosted in Neon

Database schema changes are managed through **Prisma Migrations**.

---

# Table of Contents

* [Architecture](#architecture)
* [Technology Stack](#technology-stack)
* [Environments](#environments)
* [Database Architecture](#database-architecture)
* [Git / GitHub / Vercel Flow](#git--github--vercel-flow)
* [Project Structure](#project-structure)
* [Environment Variables](#environment-variables)
* [Local Development](#local-development)
* [Selecting a Database Locally](#selecting-a-database-locally)
* [Prisma](#prisma)
* [Creating a Migration](#creating-a-migration)
* [How Migrations Work](#how-migrations-work)
* [Deploying Migrations](#deploying-migrations)
* [Database Data vs Database Schema](#database-data-vs-database-schema)
* [Working with Neon](#working-with-neon)
* [Working with Local Docker Database](#working-with-local-docker-database)
* [Testing Different Databases Locally](#testing-different-databases-locally)
* [Prisma Client](#prisma-client)
* [API Routes](#api-routes)
* [Git Workflow](#git-workflow)
* [Development Workflow](#development-workflow)
* [Important Rules](#important-rules)
* [Troubleshooting](#troubleshooting)
* [Useful Commands](#useful-commands)

---

# Architecture

The project has three independent database environments.

```text
                         GitHub
                           │
              ┌────────────┴────────────┐
              │                         │
           develop                      main
              │                         │
              ▼                         ▼
      Vercel Dev Project         Vercel Prod Project
              │                         │
              ▼                         ▼
         Neon Dev DB               Neon Prod DB
```

Local development is separate from Vercel:

```text
                    Local machine
                         │
                    npm run dev
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
            Local       Dev       Prod
              │          │          │
              ▼          ▼          ▼
           Docker     Neon Dev   Neon Prod
```

The developer chooses the database interactively when starting the application:

```text
$ npm run dev

? Which database do you want to use?
❯ Local
  Dev
  Prod

Connected to: LOCAL
```

The application itself always receives the selected database through the same variable:

```text
DATABASE_URL
```

The application does not need to know how the database was selected.

---

# Technology Stack

* Next.js
* React
* TypeScript
* PostgreSQL
* Prisma ORM
* Prisma Migrations
* Neon PostgreSQL
* Docker
* Vercel
* GitHub

Important packages include:

```text
next
react
react-dom
typescript
prisma
@prisma/client
@prisma/adapter-pg
pg
@inquirer/prompts
dotenv
```

---

# Environments

There are three database environments.

## 1. Local

Used for everyday development.

```text
Application
    │
    ▼
localhost:3000
    │
    ▼
Docker PostgreSQL
```

Database:

```text
furniture_restoration_local
```

Connection example:

```text
postgresql://postgres:postgres@localhost:5432/furniture_restoration_local
```

Local data is disposable and should not contain production data.

---

## 2. Dev

Used by the development deployment.

```text
GitHub develop
       │
       ▼
Vercel Dev Project
       │
       ▼
Neon Dev Database
```

This is the shared development environment.

The Dev database is separate from Local and Prod.

---

## 3. Prod

Used by the production deployment.

```text
GitHub main
       │
       ▼
Vercel Prod Project
       │
       ▼
Neon Prod Database
```

Production contains real production data.

Be extremely careful when connecting to this database locally.

---

# Database Architecture

The three databases are completely independent.

```text
┌───────────────────────────────────────┐
│             Local Database            │
│                                       │
│ Docker PostgreSQL                     │
│ furniture_restoration_local           │
│                                       │
│ Data: LOCAL                           │
└───────────────────────────────────────┘


┌───────────────────────────────────────┐
│              Dev Database             │
│                                       │
│ Neon PostgreSQL                       │
│                                       │
│ Data: DEV                             │
└───────────────────────────────────────┘


┌───────────────────────────────────────┐
│             Prod Database             │
│                                       │
│ Neon PostgreSQL                       │
│                                       │
│ Data: PROD                            │
└───────────────────────────────────────┘
```

Data is **not synchronized** between these databases.

For example:

```text
Local:
1 | first material for LOCAL
2 | second material for LOCAL
3 | third material for LOCAL


Dev:
1 | first material for DEV
2 | second material for DEV
3 | third material for DEV


Prod:
production data
```

The database schema, however, is synchronized through Prisma migrations.

---

# Git / GitHub / Vercel Flow

The project uses two main deployment branches.

```text
feature branch
      │
      ▼
Pull Request
      │
      ▼
develop
      │
      ▼
Vercel Dev
      │
      ▼
Neon Dev
```

Production:

```text
feature branch
      │
      ▼
Pull Request
      │
      ▼
main
      │
      ▼
Vercel Prod
      │
      ▼
Neon Prod
```

The important distinction is:

> Git contains the database schema changes, but Git does not contain the database data.

Prisma migration files are committed to Git.

Actual database records remain inside the corresponding database.

---

# Project Structure

The main project structure looks approximately like this:

```text
furniture-restoration/
│
├── app/
│   ├── api/
│   │   └── materials/
│   │       └── route.ts
│   │
│   ├── generated/
│   │   └── prisma/
│   │
│   ├── lib/
│   │   └── prisma.ts
│   │
│   ├── favicon.ico
│   ├── globals.css
│   └── page.tsx
│
├── prisma/
│   ├── migrations/
│   │   └── ...
│   │
│   ├── schema.prisma
│   └── ...
│
├── scripts/
│   └── dev.mjs
│
├── .env
├── .env.example
├── .env.local
├── .gitignore
├── package.json
├── prisma.config.ts
├── tsconfig.json
└── ...
```

---

# Important Files

## `prisma/schema.prisma`

Defines the application's database schema.

Example:

```prisma
model Material {
  id   Int    @id @default(autoincrement())
  name String @db.VarChar(255)

  @@map("materials")
}
```

This describes the `materials` table.

---

## `prisma/migrations/`

Contains the history of database schema changes.

Example:

```text
prisma/
└── migrations/
    ├── 20260808_create_materials/
    │   └── migration.sql
    │
    └── ...
```

Migration files are committed to Git.

---

## `prisma.config.ts`

Provides Prisma with configuration and the database connection.

```ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
```

The important part is:

```ts
url: process.env["DATABASE_URL"]
```

Prisma always works with the environment variable:

```text
DATABASE_URL
```

---

## `app/lib/prisma.ts`

Creates the Prisma client used by the application.

The important concept is:

```ts
process.env.DATABASE_URL
```

The application does not care whether this URL points to:

```text
Docker
Neon Dev
Neon Prod
```

The local development script decides which URL is passed as `DATABASE_URL`.

---

## `scripts/dev.mjs`

Provides interactive database selection.

```text
npm run dev
      │
      ▼
scripts/dev.mjs
      │
      ▼
┌──────────────────────┐
│ Local                │
│ Dev                  │
│ Prod                 │
└──────────────────────┘
      │
      ▼
DATABASE_URL
      │
      ▼
next dev
```

This script is only for local development.

It does not affect Vercel deployments.

---

# Environment Variables

## `.env.local`

Contains local development credentials.

Example:

```env
NEXT_PUBLIC_APP_ENV=LOCAL

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/furniture_restoration_local"

DATABASE_URL_LOCAL="postgresql://postgres:postgres@localhost:5432/furniture_restoration_local"

DATABASE_URL_DEV="postgresql://neondb_owner:XXXXX@ep-XXXXX.neon.tech/neondb?sslmode=require&channel_binding=require"

DATABASE_URL_PROD="postgresql://neondb_owner:XXXXX@ep-XXXXX.neon.tech/neondb?sslmode=require&channel_binding=require"
```

The three special variables are used only by `scripts/dev.mjs`:

```text
DATABASE_URL_LOCAL
DATABASE_URL_DEV
DATABASE_URL_PROD
```

After the user makes a selection, the script passes the selected value to the application as:

```text
DATABASE_URL
```

---

# Never Commit Secrets

The repository contains:

```gitignore
.env*
!.env.example
```

Therefore:

```text
.env
.env.local
```

must never be committed.

The repository should contain only safe examples such as:

```text
.env.example
```

Never put real Neon passwords, API keys or credentials into Git.

---

# Local Development

Start the application with:

```bash
npm run dev
```

You will see:

```text
? Which database do you want to use?
❯ Local
  Dev
  Prod
```

Use:

```text
↑ ↓
```

to select a database.

Press:

```text
Enter
```

to confirm.

The terminal will display:

```text
Connected to: LOCAL
```

or:

```text
Connected to: DEV
```

or:

```text
Connected to: PROD
```

Then Next.js starts normally.

---

# Selecting a Database Locally

## Local

Select:

```text
Local
```

Connection:

```text
Docker PostgreSQL
```

Use this for normal development.

---

## Dev

Select:

```text
Dev
```

Connection:

```text
Neon Dev
```

Use this when you need to test your local application against the actual shared development database.

---

## Prod

Select:

```text
Prod
```

Connection:

```text
Neon Prod
```

Use this only when absolutely necessary.

A local application connected to Prod has access to production data.

Avoid testing destructive operations against Prod.

---

# Prisma

Prisma has two important concepts:

## Prisma Schema

```text
prisma/schema.prisma
```

Defines what the database should look like.

## Prisma Migration

```text
prisma/migrations/
```

Defines how to transform an existing database schema into the new schema.

---

# Creating a Migration

Whenever the database structure needs to change, modify:

```text
prisma/schema.prisma
```

For example, adding a new field:

```prisma
model Material {
  id          Int    @id @default(autoincrement())
  name        String @db.VarChar(255)
  description String?
  
  @@map("materials")
}
```

Then create a migration:

```bash
npx prisma migrate dev --name add_material_description
```

The word `dev` means:

> Run this migration as a development migration against the database currently specified by `DATABASE_URL`.

It does **not** mean that the migration belongs only to the Dev environment.

The resulting migration is stored in:

```text
prisma/migrations/
```

and must be committed to Git.

---

# Typical Migration Workflow

The normal local workflow is:

```text
1. Change prisma/schema.prisma
             ↓
2. Run prisma migrate dev
             ↓
3. Prisma creates migration.sql
             ↓
4. Migration is applied to Local DB
             ↓
5. Test the application
             ↓
6. Commit migration files
             ↓
7. Create Pull Request
```

Commands:

```bash
npx prisma migrate dev --name create_materials
```

Then check:

```bash
npx prisma migrate status
```

---

# Do I Need `prisma generate` After Every Migration?

Normally, `prisma migrate dev` handles the necessary Prisma Client generation during development.

However, when Prisma schema changes and you need to explicitly regenerate the generated client, you can run:

```bash
npx prisma generate
```

The project also has:

```json
"postinstall": "prisma generate"
```

so the generated Prisma Client is created during installation.

Do not manually edit:

```text
app/generated/prisma/
```

This directory is generated code.

---

# How Migrations Work

Suppose we start with:

```text
Database:

materials
```

We add:

```text
categories
```

to `schema.prisma`.

Then:

```bash
npx prisma migrate dev --name create_categories
```

creates:

```text
prisma/
└── migrations/
    ├── ..._create_materials/
    │   └── migration.sql
    │
    └── ..._create_categories/
        └── migration.sql
```

These migration files become the project's database schema history.

---

# The Same Migration Is Used Everywhere

This is extremely important.

We do **not** create one migration for Local, another for Dev and another for Prod.

There is one migration:

```text
create_materials
```

and it is applied independently to each database.

```text
                 create_materials
                        │
             ┌──────────┼──────────┐
             ▼          ▼          ▼
           Local       Dev        Prod
             │          │          │
             ▼          ▼          ▼
          Docker     Neon Dev   Neon Prod
```

Each database maintains its own migration history.

---

# `migrate dev` vs `migrate deploy`

These commands have different purposes.

## Local development

Use:

```bash
npx prisma migrate dev --name migration_name
```

This is used when creating and testing a new migration during development.

---

## Dev / Production deployment

Use:

```bash
npx prisma migrate deploy
```

This applies existing migrations that have not yet been applied.

It does not create a new migration.

Conceptually:

```text
migrate dev
    ↓
create + apply migration
```

while:

```text
migrate deploy
    ↓
apply existing migrations
```

---

# Deployment Migration Flow

When a migration is committed to Git:

```text
prisma/migrations/
       │
       ▼
GitHub
       │
       ▼
Vercel deployment
       │
       ▼
prisma migrate deploy
       │
       ▼
Target Neon database
```

For Dev:

```text
develop
   ↓
Vercel Dev
   ↓
migrate deploy
   ↓
Neon Dev
```

For Prod:

```text
main
   ↓
Vercel Prod
   ↓
migrate deploy
   ↓
Neon Prod
```

The migration is the same.

Only the `DATABASE_URL` is different.

---

# Database Data vs Database Schema

Do not confuse migrations with data.

## Schema

Things such as:

```text
tables
columns
indexes
foreign keys
constraints
relations
```

are managed through Prisma migrations.

---

## Data

Things such as:

```text
materials
users
orders
customers
```

are actual database records.

For example:

```sql
INSERT INTO materials (name)
VALUES
  ('first material for LOCAL'),
  ('second material for LOCAL'),
  ('third material for LOCAL');
```

These records exist only in the database where the SQL was executed.

They are not automatically transferred to Dev or Prod.

---

# Example

The migration creates:

```text
materials
----------------
id
name
```

Then we manually insert data into Local:

```text
Local

1 | first material for LOCAL
2 | second material for LOCAL
3 | third material for LOCAL
```

The Dev database may contain:

```text
Dev

1 | first material for DEV
2 | second material for DEV
3 | third material for DEV
```

The schema is identical.

The data is independent.

---

# Working With Neon

There are two Neon databases:

```text
Neon Dev
Neon Prod
```

They must remain separate.

When working in the Neon dashboard, always verify which project/database you are currently viewing before executing SQL.

Especially before:

```sql
DELETE
DROP
TRUNCATE
UPDATE
```

---

# Working With Local Docker Database

The Local database is:

```text
furniture_restoration_local
```

and runs inside Docker.

Its connection string is:

```text
postgresql://postgres:postgres@localhost:5432/furniture_restoration_local
```

Local development should normally use this database.

If the Local database is reset, all Local data is lost.

This does not affect:

```text
Neon Dev
Neon Prod
```

---

# Testing Different Databases Locally

This is one of the main purposes of the interactive development script.

Run:

```bash
npm run dev
```

Select:

```text
Local
```

and the application uses:

```text
Docker Local
```

Stop the server:

```text
Ctrl + C
```

Run again:

```bash
npm run dev
```

Select:

```text
Dev
```

and the application uses:

```text
Neon Dev
```

Run again and select:

```text
Prod
```

and the application uses:

```text
Neon Prod
```

No source code changes are necessary.

---

# Prisma Client

The application uses Prisma Client to communicate with PostgreSQL.

The application receives:

```text
DATABASE_URL
```

and Prisma uses that connection.

The important principle is:

```text
Application
     │
     ▼
Prisma Client
     │
     ▼
DATABASE_URL
     │
     ▼
Selected PostgreSQL database
```

The application does not need separate code for Local, Dev or Prod.

---

# API Routes

For example:

```text
app/api/materials/route.ts
```

can query Prisma:

```ts
const materials = await prisma.material.findMany({
  orderBy: {
    id: "asc",
  },
});
```

The same API route works against all three databases.

The only difference is the value of:

```text
DATABASE_URL
```

---

# Git Workflow

A typical feature workflow:

```text
1. Create feature branch
        ↓
2. Change code/schema
        ↓
3. Create Prisma migration if necessary
        ↓
4. Test locally
        ↓
5. Commit changes
        ↓
6. Push branch
        ↓
7. Create Pull Request
        ↓
8. Merge into develop
```

After merging into `develop`:

```text
GitHub develop
      ↓
Vercel Dev
      ↓
Neon Dev
```

After the feature is ready for production:

```text
develop
   ↓
Pull Request
   ↓
main
   ↓
Vercel Prod
   ↓
Neon Prod
```

---

# Development Workflow

## Normal code change

```bash
npm run dev
```

Select:

```text
Local
```

Develop and test locally.

---

## Database schema change

Modify:

```text
prisma/schema.prisma
```

Then:

```bash
npx prisma migrate dev --name describe_change
```

Check:

```bash
npx prisma migrate status
```

Test the application.

Commit:

```text
prisma/schema.prisma
prisma/migrations/...
```

Push and create a Pull Request.

---

# Migration Checklist

Whenever you change the database schema:

```text
[ ] Change prisma/schema.prisma

[ ] Run:
    npx prisma migrate dev --name <name>

[ ] Check migration status:
    npx prisma migrate status

[ ] Test Local database

[ ] Check generated Prisma Client if needed

[ ] Review migration.sql

[ ] Commit migration files

[ ] Push branch

[ ] Create Pull Request

[ ] Merge into develop

[ ] Verify Neon Dev migration

[ ] Later merge into main

[ ] Verify Neon Prod migration
```

---

# Important Rules

## 1. Never manually modify an existing migration

Once a migration has been committed and potentially applied to another environment, do not rewrite it.

Create a new migration instead.

Bad:

```text
edit old migration.sql
```

Good:

```bash
npx prisma migrate dev --name fix_materials
```

---

## 2. Do not delete migrations just because a database is empty

Migrations are the project's database history.

Keep them in Git.

---

## 3. Never commit `.env.local`

It contains credentials.

---

## 4. Never expose `DATABASE_URL`

Do not print the full URL to the browser or logs.

It may contain database credentials.

The development script intentionally prints only:

```text
Connected to: DEV
```

instead of the actual URL.

---

## 5. Be careful with Prod

When using:

```text
npm run dev → Prod
```

your local application is connected directly to the production database.

Do not run destructive SQL or test destructive application operations against Prod.

---

## 6. Do not use `migrate reset` on Dev or Prod

This command is destructive:

```bash
npx prisma migrate reset
```

It drops the database/schema and recreates it.

It is intended for local development.

Never casually run it against Neon Dev or especially Neon Prod.

---

# Troubleshooting

## Check migration status

```bash
npx prisma migrate status
```

This shows whether the database is synchronized with the migration history.

---

## Inspect database schema

```bash
npx prisma db pull
```

This introspects the currently selected database.

Be careful: `db pull` modifies:

```text
prisma/schema.prisma
```

based on the database.

It is primarily useful when the database already contains a schema that needs to be inspected.

It is not the normal workflow for creating application schema changes.

---

## Generate Prisma Client

```bash
npx prisma generate
```

Use this when Prisma Client needs to be regenerated.

---

## Check Prisma version

```bash
npx prisma -v
```

---

## Check current database

When running locally:

```bash
npm run dev
```

the script prints:

```text
Connected to: LOCAL
```

or:

```text
Connected to: DEV
```

or:

```text
Connected to: PROD
```

This tells you which database the current Next.js process is using.

---

# Useful Commands

## Start development server

```bash
npm run dev
```

---

## Create migration

```bash
npx prisma migrate dev --name <migration_name>
```

Example:

```bash
npx prisma migrate dev --name create_materials
```

---

## Check migrations

```bash
npx prisma migrate status
```

---

## Apply existing migrations

```bash
npx prisma migrate deploy
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Inspect database

```bash
npx prisma db pull
```

---

## Open Prisma Studio

```bash
npx prisma studio
```

Be careful which `DATABASE_URL` is active when using Prisma Studio.

---

# The Most Important Concept

The project intentionally separates:

```text
DATABASE SCHEMA
```

from:

```text
DATABASE DATA
```

and:

```text
APPLICATION CODE
```

The relationship is:

```text
                  Git
                   │
                   │
          prisma/schema.prisma
                   │
                   ▼
            Prisma Migration
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
        Local     Dev      Prod
       Docker    Neon     Neon
          │        │        │
          ▼        ▼        ▼
        Local     Dev      Prod
         Data     Data     Data
```

The schema is shared.

The data is independent.

---

# Final Environment Overview

## Local Development

```text
npm run dev
      │
      ▼
Interactive selection
      │
      ├── Local → Docker
      │
      ├── Dev   → Neon Dev
      │
      └── Prod  → Neon Prod
```

---

## Development Deployment

```text
GitHub
  │
  └── develop
        │
        ▼
     Vercel Dev
        │
        ▼
    DATABASE_URL
        │
        ▼
     Neon Dev
```

---

## Production Deployment

```text
GitHub
  │
  └── main
        │
        ▼
    Vercel Prod
        │
        ▼
    DATABASE_URL
        │
        ▼
     Neon Prod
```

---

# Quick Start

For a new developer joining the project:

```bash
git clone <repository>
cd furniture-restoration
npm install
```

Make sure the local Docker PostgreSQL database is running.

Create/configure:

```text
.env.local
```

with the required Local, Dev and Prod database URLs.

Then:

```bash
npm run dev
```

Select:

```text
❯ Local
  Dev
  Prod
```

For normal development, use:

```text
Local
```

When you need to test against the shared development database:

```text
Dev
```

Avoid using:

```text
Prod
```

unless you specifically need to inspect/test production data.

---

# Summary

The project follows one central principle:

> **One codebase, one migration history, three independent databases.**

```text
                    ONE CODEBASE
                         │
                  ONE MIGRATION HISTORY
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       LOCAL            DEV            PROD
      Docker           Neon           Neon
          │              │              │
          ▼              ▼              ▼
     Local data      Dev data      Production data
```

Local development provides an interactive database selector:

```text
npm run dev

? Which database do you want to use?
❯ Local
  Dev
  Prod
```

Database schema changes are created locally with:

```bash
npx prisma migrate dev --name <migration_name>
```

and committed to Git.

Deployments apply existing migrations automatically using:

```bash
npx prisma migrate deploy
```

The Dev and Prod environments use their own Vercel projects and their own Neon databases.

This keeps development, testing and production data completely isolated while allowing the same application code and migration history to be used across all environments.
