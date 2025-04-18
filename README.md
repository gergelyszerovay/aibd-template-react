# AIBD React Template

This project provides a standardized React boilerplate template based on React 19 with Vite.

## Features

- **React 19**: Latest React version with improved performance and features
- **Vite**: Fast development server and optimized build tooling
- **PNPM Package Manager**: Fast, disk space efficient package manager
- **TailwindCSS 3 Integration**: Utility-first CSS framework for rapid UI development
- **Zustand**: Lightweight state management
- **TypeScript**: Type safety and improved developer experience
- **Testing Setup**: Pre-configured with Vitest and Testing Library

## Prerequisites

- Node.js (latest LTS version recommended)
- PNPM (`npm install -g pnpm`)

## Getting Started

### Development Server

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start
```

Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

## Build

```bash
# Production build
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

```bash
# Run unit tests (single run)
pnpm test

# Run unit tests with watch mode
pnpm test:watch

# Run unit tests with code coverage
pnpm test:coverage
```

Tests are executed via [Vitest](https://vitest.dev/) with Testing Library for React component testing.

## Styling with TailwindCSS

This project includes TailwindCSS for styling components. The configuration file is located at `tailwind.config.js`.

## State Management

This project uses [Zustand](https://github.com/pmndrs/zustand) for state management, providing a simple and efficient way to manage application state.
