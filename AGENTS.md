<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Linting: oxlint (`npm run lint`)
- Formatting: oxfmt (`npm run fmt:fix`)
- Type checking: `npm run typecheck`
- Pre-commit hooks run typecheck, lint, and format automatically
- Commit messages follow Conventional Commits via commitlint
- **Always run `npm run build` before deploying to production** — `tsc --noEmit` can miss build-time errors that only surface during `next build`
