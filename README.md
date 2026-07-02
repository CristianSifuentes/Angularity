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
├── 07 · Build & Quality
│   ├── ❯ Building for Production
│   └── ❯ Testing
│
└── 08 · Community
    ├── ❯ Learn More
    ├── ❯ Contributing
    └── ❯ License
```

| # | Section | Description |
|:---:|---|---|
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
| 10 | [Production Build](#building-for-production) | AOT, tree-shaking & bundling |
| 11 | [Testing](#testing) | Unit tests with Vitest & e2e options |
| 12 | [Learn More](#learn-more) | Official docs, playground & blog |
| 13 | [Contributing](#contributing) | How to contribute |
| 14 | [License](#license) | MIT License |

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
