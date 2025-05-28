# Contributor Guide for n8n Community Node

## Getting started

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/hiasinho/n8n-nodes-codex.git
cd n8n-nodes-codex
npm install
```

Requires Node.js 20 or later.

## Repository structure

- Node source files are in `nodes/`.
- Credential definitions are in `credentials/`.
- Compiled files are output to `dist/` by the build script.

## Useful scripts

### Build

```bash
npm run build
```

Compiles TypeScript and copies icons.

### Watch for changes

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

Run `npm run lintfix` to fix issues automatically.

### Format

```bash
npm run format
```

## Pre-commit checklist

Run the following before committing:

```bash
npm run lint
npm run build
```

## Testing

This repository does not include a test setup. If you add tests, configure a framework such as Vitest or Jest and mock HTTP calls.

## Documentation

Replace the starter README with documentation for your node. Use `README_TEMPLATE.md` as a starting point and follow the n8n community node guidelines:

<https://docs.n8n.io/integrations/creating-nodes/overview/>
