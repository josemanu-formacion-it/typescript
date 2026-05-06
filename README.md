# TypeScript Learning Project

This repository contains a collection of TypeScript modules and a shared library.

## Project Structure

- `lib/`: Shared utility functions and types.
- `docs/`: Project-wide documentation.
- `modulo-1/`: First module focused on basic statistics and TypeScript fundamentals.

## Shared Library (lib/)

The `lib` directory contains core logic that can be reused across different modules:
- `math-utils.ts`: Statistical calculation functions.
- `types.ts`: Shared interface definitions.

## Modules

### Modulo 1: Basic Statistics
Located in `modulo-1/`, this module demonstrates how to use the shared library to perform statistical analysis on sales data.

## Getting Started

1. Install dependencies in the root (if any) or in the specific module:
   ```bash
   cd modulo-1
   npm install
   ```

2. Run the example:
   ```bash
   npx tsx src/index.ts
   ```
