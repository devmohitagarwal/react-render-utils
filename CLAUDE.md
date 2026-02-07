# CLAUDE.md

## Project Overview

react-render-utils is a lightweight React utility library providing declarative conditional rendering components and pluralisation helpers. Published to npm as `react-render-utils`.

## Build & Test

```bash
npm run build    # Compiles to dist/cjs (CommonJS) and dist/mjs (ESM)
npm test         # Runs Jest test suite
```

Build uses `tsc` directly (no bundler). Two tsconfig variants: `tsconfig.cjs.json` and `tsconfig.esm.json` both extend `tsconfig.json`. Post-build, `scripts/lib.sh` writes `package.json` files into each dist folder to set module type.

## Project Structure

```
src/
  index.tsx          # Re-exports all public API
  when/When.tsx      # <When> conditional component (generic, supports callbacks)
  switch/Switch.tsx  # <Switch> multi-case component (O(1) lookup)
  switch/Types.ts    # Switch type validation with compile-time error messages
  range/Range.tsx    # <Range> numeric range component
  range/Types.ts     # Range types using template literal types
  pluralise/pluralise.tsx  # pluralise() and pluraliseWithCount() functions
```

## Public API

- `When<T>` - if/else rendering based on truthiness, supports ReactNode or `(value: NonNullable<T>) => ReactNode`
- `Switch<T>` - multi-case rendering, string/number values only, "Default" fallback key
- `Range` - numeric range rendering, ranges as `"start-end"` strings, "Default" fallback
- `pluralise(count, singular, plural)` - returns correct word form
- `pluraliseWithCount(count, singular, zeroText?, plural?, hideCount?)` - returns formatted "N items" string

## Conventions

- TypeScript strict mode
- Props interfaces live in separate `Types.ts` files (except When which is inline)
- Components are default-exported, also re-exported as named from index
- Utility functions are named exports only
- Peer dependencies: React >=16, React DOM >=16
- Dual CJS/ESM output
