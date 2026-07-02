<div align="center">

# Angularity

**A professional Angular 22 reference project exploring the core pillars of the Angular platform.**

[![Angular](https://img.shields.io/badge/Angular-22.0.0-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Angular CLI](https://img.shields.io/badge/Angular_CLI-22.0.4-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev/tools/cli)

</div>

---

## Table of Contents

<details open>
<summary><b>Navigate the Documentation</b></summary>

```
Angularity/
│
├── 01 · Platform Overview
│   ├── ❯ What is Angular?
│   └── ❯ Key Pillars of the Platform
│
├── 02 · Architecture
│   └── ❯ How Angular Platforms Work Under the Hood
│
├── 03 · Tech Stack
│   └── ❯ Dependencies & Tooling
│
├── 04 · Project Initialization — CLI Deep Dive
│   ├── ❯ Command Anatomy
│   ├── ❯ What is npx?
│   ├── ❯ Angular CLI — ng new
│   ├── ❯ The --no-standalone Flag
│   ├── ❯ Module vs Standalone Architecture
│   └── ❯ ng new Flag Reference
│
├── 05 · Getting Started
│   ├── ❯ Prerequisites
│   ├── ❯ Installation
│   └── ❯ Running the Development Server
│
├── 06 · Developer Workflow
│   ├── ❯ Available Scripts
│   ├── ❯ Code Scaffolding with Angular CLI
│   └── ❯ Project Structure
│
├── 07 · Workspace Configuration
│   ├── ❯ angular.json — Structure Overview
│   ├── ❯ Top-Level Properties
│   ├── ❯ projects — Per-App Configuration
│   ├── ❯ schematics — Code Generation Defaults
│   ├── ❯ architect — Build Targets
│   ├── ❯ configurations — Environment Overrides
│   └── ❯ Budget Thresholds
│
├── 08 · Build & Quality
│   ├── ❯ Building for Production
│   └── ❯ Testing
│
└── 09 · Community
    ├── ❯ Learn More
    ├── ❯ Contributing
    └── ❯ License
```

| # | Section | Description |
|:---:|---|---|
| 01 | [What is Angular?](#what-is-angular) | Platform overview and philosophy |
| 02 | [Key Pillars](#key-pillars-of-the-platform) | Component architecture, ecosystem, CLI |
| 03 | [Under the Hood](#how-angular-platforms-work-under-the-hood) | PlatformBrowser vs PlatformServer |
| 04 | [Tech Stack](#tech-stack) | All dependencies with versions |
| **05** | [**CLI Deep Dive — npx ng new**](#project-initialization--cli-deep-dive) | **Command anatomy, npx, flags & architecture modes** |
| 06 | [Getting Started](#getting-started) | Clone, install & run in 3 steps |
| 07 | [Available Scripts](#available-scripts) | npm & ng command reference |
| 08 | [Code Scaffolding](#code-scaffolding-with-angular-cli) | Generate components, services & more |
| 09 | [Project Structure](#project-structure) | Folder layout explained |
| **10** | [**angular.json — Workspace Configuration**](#angularjson--workspace-configuration) | **Central config file, build targets & environments** |
| 11 | [Production Build](#building-for-production) | AOT, tree-shaking & bundling |
| 12 | [Testing](#testing) | Unit tests with Vitest & e2e options |
| 13 | [Learn More](#learn-more) | Official docs, playground & blog |
| 14 | [Contributing](#contributing) | How to contribute |
| 15 | [License](#license) | MIT License |

</details>

---

## What is Angular?

**Angular** is an open-source, TypeScript-based development platform maintained by **Google**, used for building scalable, single-page web and mobile applications. It unifies a component-based framework with a vast suite of well-integrated libraries (routing, forms, HTTP, and more) and a powerful set of developer tools — all in one cohesive ecosystem.

Unlike minimalist UI libraries, Angular is a **complete platform**: it provides everything needed to build, test, and ship production-ready applications without stitching together third-party solutions.

---

## Key Pillars of the Platform

| Pillar | Description |
|---|---|
| **Component-Based Architecture** | Applications are built with modular, reusable components, making Angular ideal for large-scale and enterprise-level projects. |
| **Integrated Ecosystem** | Built-in tools for HTTP communication (`HttpClient`), navigation (`@angular/router`), and robust form management (`@angular/forms`) — no extra dependencies needed. |
| **Cross-Platform Compatibility** | Compiles templates to highly optimized JavaScript, enabling apps to run in the **browser**, on a **Node.js server** (SSR), or on **native mobile devices**. |
| **Angular CLI** | Streamlines your workflow: generate components, run tests, lint code, and build apps directly from the terminal. |

---

## How Angular Platforms Work Under the Hood

In Angular architecture, a **"platform"** acts as the entry point that initializes the application and manages page-wide services. Angular provides different execution environments abstracted through these platforms:

```
┌──────────────────────────────────────────────────────────────┐
│                        Angular App                           │
│                                                              │
│   ┌─────────────────────┐   ┌──────────────────────────┐    │
│   │   PlatformBrowser   │   │     PlatformServer       │    │
│   │                     │   │                          │    │
│   │  Standard platform  │   │  Node.js-based SSR for   │    │
│   │  for bootstrapping  │   │  SEO & faster initial    │    │
│   │  apps in browsers   │   │  load times              │    │
│   └─────────────────────┘   └──────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

| Platform | Module | Use Case |
|---|---|---|
| `PlatformBrowser` | `@angular/platform-browser` | Standard web browser execution |
| `PlatformServer` | `@angular/platform-server` | Server-Side Rendering (SSR) for SEO & performance |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Angular](https://angular.dev) | `^22.0.0` | Core framework |
| [TypeScript](https://www.typescriptlang.org) | `~6.0.2` | Language |
| [RxJS](https://rxjs.dev) | `~7.8.0` | Reactive programming |
| [Angular Router](https://angular.dev/guide/routing) | `^22.0.0` | Client-side navigation |
| [Angular Forms](https://angular.dev/guide/forms) | `^22.0.0` | Reactive & template-driven forms |
| [Vitest](https://vitest.dev) | `^4.0.8` | Unit testing |
| [Angular CLI](https://angular.dev/tools/cli) | `^22.0.4` | Project tooling |

---

## Project Initialization — CLI Deep Dive

> The single command that created this project — dissected layer by layer.

---

### Command Anatomy

```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║   $ npx  ng  new  Angularity  --no-standalone                        ║
║     ───  ──  ───  ──────────  ──────────────                         ║
║      │    │   │       │              │                                ║
║      │    │   │       │              └─ Flag: use NgModule            ║
║      │    │   │       │                 architecture instead of       ║
║      │    │   │       │                 standalone components         ║
║      │    │   │       │                                               ║
║      │    │   │       └─ Project name → folder name → app title       ║
║      │    │   │                                                       ║
║      │    │   └─ Angular CLI command: scaffold a new workspace        ║
║      │    │                                                           ║
║      │    └─ Angular CLI binary (installed or fetched on demand)      ║
║      │                                                                ║
║      └─ Node Package eXecute — run a package without global install   ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

### What is `npx`?

**`npx`** is the **Node Package eXecute** tool that ships with npm (v5.2+). It lets you run executables from npm packages **without installing them globally** on your system.

```
Without npx                         With npx
──────────────────────────────────  ──────────────────────────────────
$ npm install -g @angular/cli       $ npx ng new MyApp
$ ng new MyApp                        └─ fetches @angular/cli on demand
  └─ uses globally installed cli         └─ executes ng
     (version may be outdated)               └─ discards after use
```

| Behavior | Description |
|---|---|
| **No global install required** | Fetches the package temporarily from the npm registry |
| **Always up-to-date** | Each run pulls the latest version unless a version is pinned |
| **Version pinning** | `npx ng@15 new App` — runs a specific CLI version |
| **Local first** | If `ng` exists in `./node_modules/.bin`, npx uses it instead |
| **Zero pollution** | Nothing is left behind in your global `node_modules` |

```
┌─────────────────────────────────────────────────────────────┐
│                    npx Resolution Order                     │
│                                                             │
│  1. ./node_modules/.bin/ng        ← local project binary   │
│  2. ~/.npm/_npx/<hash>/ng         ← cached npx download    │
│  3. registry.npmjs.org/@angular/cli  ← fresh download      │
└─────────────────────────────────────────────────────────────┘
```

> **Best practice:** Use `npx ng` inside an existing Angular project to always align the CLI version with the project's `@angular/cli` in `package.json`, avoiding version mismatches.

---

### Angular CLI — `ng new`

The `ng new` command is the **workspace scaffold generator**. It creates a fully configured Angular project with zero manual setup — routing, testing, TypeScript config, and build tooling included.

```bash
ng new <project-name> [options]
```

**What `ng new` generates:**

```
<project-name>/
│
├── src/
│   ├── app/
│   │   ├── app.module.ts          ← root NgModule  (--no-standalone)
│   │   ├── app.component.ts       ← root component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.component.spec.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
├── angular.json                   ← workspace + build config
├── package.json                   ← dependencies
├── tsconfig.json                  ← TypeScript base config
└── .gitignore
```

**What happens internally:**

```
ng new Angularity --no-standalone
│
├── [1] Resolves schema & validates flags
├── [2] Creates directory → Angularity/
├── [3] Generates workspace files (angular.json, tsconfig.json …)
├── [4] Generates app scaffold (NgModule-based, no standalone APIs)
├── [5] Runs npm install  ← installs all dependencies
└── [6] Initializes git repository  ← git init + initial commit
```

---

### The `--no-standalone` Flag

> This flag is the architectural decision at the heart of this project.

Starting in **Angular v17**, the CLI generates **Standalone Components** by default — components that declare their own dependencies without belonging to an `NgModule`. The `--no-standalone` flag **opts out** of this default, reverting to the classic **NgModule architecture**.

```
--standalone   (default since Angular 17)
--no-standalone  (explicit opt-in to NgModule pattern)
```

**Why does this flag exist?**

Angular introduced standalone components as a simpler, more lightweight API. However, NgModule architecture remains:
- The dominant pattern in existing enterprise codebases
- Required knowledge for Angular developers maintaining legacy projects
- A deliberate, explicit architectural choice for teams that prefer module boundaries

---

### Module vs Standalone Architecture

<table>
<thead>
<tr>
<th width="50%">NgModule Architecture<br><code>--no-standalone</code></th>
<th width="50%">Standalone Architecture<br><code>--standalone</code> (default)</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```typescript
// app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

</td>
<td>

```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

</td>
</tr>
<tr>
<td>

```typescript
// main.ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.error);
```

</td>
<td>

```typescript
// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ],
});
```

</td>
</tr>
</tbody>
</table>

| Dimension | NgModule (`--no-standalone`) | Standalone (`--standalone`) |
|---|:---:|:---:|
| Introduced | Angular 2 (2016) | Angular 14 (2022), default v17 |
| `declarations` array in module | Required | Not needed |
| `imports` in module | Module-level | Per-component |
| Bootstrap entry point | `bootstrapModule()` | `bootstrapApplication()` |
| Learning curve for newcomers | Higher | Lower |
| Legacy codebase compatibility | Native | Requires migration |
| Tree-shaking granularity | Module-level | Component-level |
| Recommended for new projects | Only if required | Yes |

---

### `ng new` — Full Flag Reference

```bash
npx ng new <name> [flags]
```

<details>
<summary><b>Project Configuration Flags</b></summary>

| Flag | Type | Default | Description |
|---|:---:|:---:|---|
| `--standalone` | boolean | `true` | Generate standalone components (no NgModule) |
| `--no-standalone` | boolean | — | Alias: use NgModule architecture |
| `--routing` | boolean | `true` | Generate a root routing module / routes file |
| `--style` | string | `css` | Default stylesheet format: `css` `scss` `sass` `less` |
| `--prefix` | string | `app` | Default component selector prefix (e.g. `app-header`) |
| `--skip-tests` | boolean | `false` | Skip generation of `.spec.ts` test files |

</details>

<details>
<summary><b>Workspace & Install Flags</b></summary>

| Flag | Type | Default | Description |
|---|:---:|:---:|---|
| `--directory` | string | `<name>` | Output directory name (if different from project name) |
| `--skip-install` | boolean | `false` | Skip `npm install` after scaffolding |
| `--skip-git` | boolean | `false` | Skip `git init` and initial commit |
| `--commit` | boolean | `true` | Create an initial git commit |
| `--inline-style` | boolean | `false` | Include styles inline in the component file |
| `--inline-template` | boolean | `false` | Include templates inline in the component file |

</details>

<details>
<summary><b>Build & Compatibility Flags</b></summary>

| Flag | Type | Default | Description |
|---|:---:|:---:|---|
| `--ssr` | boolean | `false` | Enable Server-Side Rendering (SSR) setup |
| `--view-encapsulation` | string | — | Set default view encapsulation: `None` `Emulated` `ShadowDom` |
| `--strict` | boolean | `true` | Enable strict TypeScript and template type-checking |
| `--minimal` | boolean | `false` | Generate a minimal project (no test files, no routing) |
| `--dry-run` | boolean | `false` | Preview what files would be generated without writing them |
| `--force` | boolean | `false` | Overwrite existing files without prompting |
| `--verbose` | boolean | `false` | Log all internal operations to the console |

</details>

**Common flag combinations used in real projects:**

```bash
# Classic enterprise setup — NgModule, SCSS, strict mode
npx ng new MyApp --no-standalone --style=scss --strict

# Minimal prototype — no tests, no git, fastest possible setup
npx ng new MyApp --minimal --skip-git --skip-tests

# Full production setup — SSR, SCSS, strict, NgModule
npx ng new MyApp --no-standalone --style=scss --ssr --strict

# Preview only — see what would be created without touching disk
npx ng new MyApp --no-standalone --dry-run

# Custom prefix — avoids selector collision in multi-team monorepos
npx ng new MyApp --no-standalone --prefix=acme --style=scss
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 20.x
- [npm](https://www.npmjs.com) >= 11.x

### Installation

```bash
# Clone the repository
git clone https://github.com/CristianSifuentes/Angularity.git
cd Angularity

# Install dependencies
npm install
```

### Running the Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app hot-reloads automatically on file changes.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Vitest |
| `ng e2e` | Run end-to-end tests (requires an e2e framework) |

---

## Code Scaffolding with Angular CLI

The Angular CLI provides powerful code generation tools:

```bash
# Generate a new component
ng generate component components/my-component

# Generate a service
ng generate service services/my-service

# Generate a module, pipe, directive, guard, and more
ng generate --help
```

---

## Project Structure

```
Angularity/
├── src/
│   ├── app/               # Root application module and components
│   ├── assets/            # Static assets (images, fonts, etc.)
│   └── main.ts            # Application entry point
├── public/                # Public static files
├── angular.json           # Angular workspace configuration
├── tsconfig.json          # TypeScript base configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.spec.json     # Test-specific TypeScript config
└── package.json           # Dependencies and scripts
```

---

## `angular.json` — Workspace Configuration

> The single source of truth for your entire Angular workspace — every build, every environment, every tool target lives here.

---

### Structure Overview

```
╔══════════════════════════════════════════════════════════════════════════╗
║                         angular.json                                     ║
║                   Workspace Configuration File                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  {                                                                       ║
║    "$schema"        ──── Enables editor validation & autocomplete        ║
║    "version"        ──── Config schema version (always 1)                ║
║    "cli"            ──── Workspace-wide CLI preferences                  ║
║    "newProjectRoot" ──── Where ng generate lib / app puts new projects   ║
║    "projects"       ──── Per-project configuration registry              ║
║       │                                                                  ║
║       └── "<ProjectName>"                                                ║
║              │                                                           ║
║              ├── projectType   ── "application" | "library"             ║
║              ├── root          ── path to project root                   ║
║              ├── sourceRoot    ── path to source files (src/)            ║
║              ├── prefix        ── component selector prefix (app-)       ║
║              ├── schematics    ── code-gen defaults                      ║
║              └── architect     ── CLI target definitions                 ║
║                     │                                                    ║
║                     ├── build   ── ng build                              ║
║                     ├── serve   ── ng serve                              ║
║                     └── test    ── ng test                               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

### Top-Level Properties

This project's `angular.json` top-level shape:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm"
  },
  "newProjectRoot": "projects",
  "projects": { ... }
}
```

| Property | Value in this project | Purpose |
|---|---|---|
| `$schema` | `./node_modules/@angular/cli/lib/config/schema.json` | Links to Angular's JSON schema — enables VS Code IntelliSense and real-time validation |
| `version` | `1` | Internal schema version; always `1` for all Angular CLI workspaces |
| `cli.packageManager` | `npm` | Tells the CLI which package manager to invoke for installs |
| `newProjectRoot` | `"projects"` | Directory where `ng generate application` / `ng generate library` scaffolds new sub-projects |

---

### `projects` — Per-App Configuration

Each key inside `projects` is an independent application or library. This workspace contains one project: **Angularity**.

```json
"projects": {
  "Angularity": {
    "projectType": "application",
    "root": "",
    "sourceRoot": "src",
    "prefix": "app",
    "schematics": { ... },
    "architect": { ... }
  }
}
```

| Property | Value | Meaning |
|---|---|---|
| `projectType` | `"application"` | Produces a deployable browser app; contrast with `"library"` which produces a reusable npm package |
| `root` | `""` | The project lives at the workspace root (single-project workspace) |
| `sourceRoot` | `"src"` | All TypeScript, templates, and styles live under `src/` |
| `prefix` | `"app"` | `ng generate component header` → selector becomes `<app-header>` |

---

### `schematics` — Code Generation Defaults

Schematics define the **default options applied every time `ng generate` runs**, so you don't have to pass flags manually on each command.

```json
"schematics": {
  "@schematics/angular:component": {
    "style": "scss",
    "standalone": false
  },
  "@schematics/angular:directive": {
    "standalone": false
  },
  "@schematics/angular:pipe": {
    "standalone": false
  }
}
```

```
ng generate component header
         │
         ▼  applies schematics defaults automatically
         │
         ├── style: "scss"        → generates header.component.scss
         └── standalone: false    → omits standalone: true, adds to NgModule
```

| Schematic | Option | Value | Effect |
|---|---|---|---|
| `@schematics/angular:component` | `style` | `"scss"` | All generated components use `.scss` instead of `.css` |
| `@schematics/angular:component` | `standalone` | `false` | Components belong to a `NgModule` (consistent with `--no-standalone`) |
| `@schematics/angular:directive` | `standalone` | `false` | Directives are module-declared, not self-contained |
| `@schematics/angular:pipe` | `standalone` | `false` | Pipes are module-declared, not self-contained |

> **Why this matters:** Without these schematics defaults, every `ng generate` would create standalone components — inconsistent with the NgModule architecture chosen at project creation. These defaults enforce architectural consistency automatically.

---

### `architect` — Build Targets

The `architect` object maps CLI commands to **builders** (plugins that execute the actual work). Each target has a `builder`, base `options`, named `configurations`, and a `defaultConfiguration`.

```
ng <command>  →  architect.<target>  →  builder  →  executes
──────────────────────────────────────────────────────────────
ng build      →  architect.build     →  @angular/build:application
ng serve      →  architect.serve     →  @angular/build:dev-server
ng test       →  architect.test      →  @angular/build:unit-test
```

<details>
<summary><b>Target: build — <code>@angular/build:application</code></b></summary>

```json
"build": {
  "builder": "@angular/build:application",
  "options": {
    "browser": "src/main.ts",
    "tsConfig": "tsconfig.app.json",
    "inlineStyleLanguage": "scss",
    "assets": [
      { "glob": "**/*", "input": "public" }
    ],
    "styles": [
      "src/styles.scss"
    ]
  },
  "configurations": {
    "production": { ... },
    "development": { ... }
  },
  "defaultConfiguration": "production"
}
```

| Option | Value | Description |
|---|---|---|
| `builder` | `@angular/build:application` | The modern esbuild-based builder (replaces `@angular-devkit/build-angular:browser`) |
| `browser` | `src/main.ts` | Application entry point — Angular bootstraps from here |
| `tsConfig` | `tsconfig.app.json` | TypeScript config scoped to the app (excludes test files) |
| `inlineStyleLanguage` | `"scss"` | Styles written inside `@Component({ styles: [] })` are treated as SCSS |
| `assets` | `[{ glob: "**/*", input: "public" }]` | Copies everything in `public/` to the output root unchanged |
| `styles` | `["src/styles.scss"]` | Global stylesheet, injected into every page |
| `defaultConfiguration` | `"production"` | `ng build` without a flag runs the production config |

</details>

<details>
<summary><b>Target: serve — <code>@angular/build:dev-server</code></b></summary>

```json
"serve": {
  "builder": "@angular/build:dev-server",
  "configurations": {
    "production": {
      "buildTarget": "Angularity:build:production"
    },
    "development": {
      "buildTarget": "Angularity:build:development"
    }
  },
  "defaultConfiguration": "development"
}
```

| Option | Value | Description |
|---|---|---|
| `builder` | `@angular/build:dev-server` | Starts a local Vite/esbuild dev server with HMR |
| `buildTarget` | `Angularity:build:<env>` | Pointer syntax: `<project>:<target>:<configuration>` |
| `defaultConfiguration` | `"development"` | `ng serve` defaults to dev mode (source maps on, no minification) |

The `buildTarget` pointer format is:

```
Angularity  :  build  :  development
    │              │           │
    │              │           └─ configuration name
    │              └─ architect target name
    └─ project name (key in "projects")
```

</details>

<details>
<summary><b>Target: test — <code>@angular/build:unit-test</code></b></summary>

```json
"test": {
  "builder": "@angular/build:unit-test"
}
```

| Option | Value | Description |
|---|---|---|
| `builder` | `@angular/build:unit-test` | Delegates to the configured test runner (Vitest in this project) |

No additional options are set here — Vitest is configured directly via the Angular build plugin and `tsconfig.spec.json`.

</details>

---

### `configurations` — Environment Overrides

Configurations let you **override any base option** for a specific environment. They are merged on top of `options` at build time.

```
ng build                       → uses "production" configuration (default)
ng build --configuration=development  → uses "development" configuration
ng serve                       → uses "development" configuration (default)
ng serve --configuration=production   → uses "production" configuration
```

**Production configuration:**

```json
"production": {
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kB",
      "maximumError": "1MB"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "4kB",
      "maximumError": "8kB"
    }
  ],
  "outputHashing": "all"
}
```

**Development configuration:**

```json
"development": {
  "optimization": false,
  "extractLicenses": false,
  "sourceMap": true
}
```

| Option | Production | Development | Purpose |
|---|:---:|:---:|---|
| `optimization` | `true` (implicit) | `false` | Minification, tree-shaking, dead-code removal |
| `sourceMap` | `false` (implicit) | `true` | Generates `.map` files for browser DevTools debugging |
| `extractLicenses` | `true` (implicit) | `false` | Extracts third-party licenses to a separate file |
| `outputHashing` | `"all"` | — | Appends content hash to filenames for cache busting |

---

### Budget Thresholds

Budgets enforce **performance contracts** at build time — the CLI will warn or error if your bundles exceed these limits, preventing accidental regressions.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Budget Configuration                           │
│                                                                     │
│  type: "initial"              ← total initial download size         │
│  ┌─────────────────────────────────────────────────────────┐        │
│  │  0 ──────────────── 500kB ──────────────── 1MB ──────→  │        │
│  │  OK              ⚠ WARNING            ✖ ERROR  BUILD FAILS│       │
│  └─────────────────────────────────────────────────────────┘        │
│                                                                     │
│  type: "anyComponentStyle"    ← per-component stylesheet size       │
│  ┌─────────────────────────────────────────────────────────┐        │
│  │  0 ──────────────────── 4kB ────────────── 8kB ──────→  │        │
│  │  OK                 ⚠ WARNING          ✖ ERROR          │        │
│  └─────────────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────────────┘
```

| Budget Type | Warning At | Error At | What It Measures |
|---|:---:|:---:|---|
| `initial` | `500kB` | `1MB` | Total size of all bundles loaded on first page visit |
| `anyComponentStyle` | `4kB` | `8kB` | Size of any single component's scoped stylesheet |

> **Forward-looking note:** As the app grows, budgets can be tuned by environment. A `lazy` bundle budget can also be added to enforce limits on lazy-loaded route chunks independently of the initial load.

---

## Building for Production

```bash
ng build
```

Build artifacts are stored in the `dist/` directory. The production build applies:

- **Ahead-of-Time (AOT) compilation** for faster rendering
- **Tree-shaking** to eliminate unused code
- **Minification & bundling** for optimal performance

---

## Testing

### Unit Tests

```bash
ng test
```

Unit tests are powered by [Vitest](https://vitest.dev/) — a fast, modern test runner.

### End-to-End Tests

```bash
ng e2e
```

Angular CLI does not bundle an e2e framework by default. Popular options:
- [Playwright](https://playwright.dev)
- [Cypress](https://www.cypress.io)

---

## Learn More

| Resource | Description |
|---|---|
| [Angular Official Docs](https://angular.dev) | Complete API reference and guides |
| [Angular Playground](https://angular.dev/playground) | Try Angular live in your browser |
| [Angular CLI Reference](https://angular.dev/tools/cli) | All CLI commands explained |
| [Angular Blog](https://blog.angular.dev) | Latest news and updates from the Angular team |

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a [GitHub Issue](https://github.com/CristianSifuentes/Angularity/issues) or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with dedication by [Cristian Sifuentes](https://github.com/CristianSifuentes)

</div>
