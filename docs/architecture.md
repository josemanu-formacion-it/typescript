# Project Architecture

## Overview
This project is structured as a mono-repo (though currently simple) where shared logic is kept in the `lib` directory at the root, and specific functionality is implemented in modules like `modulo-1`.

## Shared Logic
The `lib` folder is intended to be included in the compilation of each module. This is achieved by:
1. Including `../lib/**/*` in the `include` section of the module's `tsconfig.json`.
2. Setting `rootDir` to `../` in the module's `tsconfig.json` to allow the compiler to see the parent directory.

## Compilation and Execution
- **Compilation**: Use `npx tsc` from within a module directory. This will generate the compiled JavaScript in the module's `dist/` folder, maintaining the directory structure (e.g., `dist/lib/` and `dist/modulo-1/src/`).
- **Execution**: Use `npx tsx src/index.ts` for direct execution of TypeScript files, or `node dist/modulo-1/src/index.js` for compiled execution.
