# Base project for backend that uses Webpack, TypeScript, ESLint, and Jest

## Installation
```bash
npm i
```

## Building/bundling project
```bash
npm run build
```

## Testing project (no compiled, early testing, fastest debug)
```bash
npm run start:dev
```

## Testing project (compiled/bundled, production-like testing)
```bash
npm run start
```

## Important things to note
1. Set path alias: `@app`
2. All .d.ts defined inside ./typings folder using declare global {} will be globally available inside src .ts files without importing them
3. Make sure all .d.ts exports {}, that's a known hack to avoid error messages
4. Create as many __tests__ folders as may you want, but make sure they are created inside src folder
5. ESLint checks are disabled for .js files
6. Added many useful ESLint rules for a better and joyful development
7. If you have a better implementation and want to contribute, let me now creating an issue/pr