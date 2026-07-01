<div align="center">

# Angularity

**A professional Angular 22 reference project exploring the core pillars of the Angular platform.**

[![Angular](https://img.shields.io/badge/Angular-22.0.0-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Angular CLI](https://img.shields.io/badge/Angular_CLI-22.0.4-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev/tools/cli)

</div>

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
