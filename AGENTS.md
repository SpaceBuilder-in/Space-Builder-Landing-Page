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
- **Always run `npm run build` before deploying to production** - `tsc --noEmit` can miss build-time errors that only surface during `next build`
- **Always rebase instead of merge** - Keep git history linear and clean. Use `git rebase` when integrating changes from main or other branches.
- **Always get updated at the start of every session** - Before doing any work, run `git checkout main && git pull` to fetch latest, then `git checkout <branch> && git rebase main` to bring your working branch up to date. This avoids stale work and merge conflicts.

## Team & Contact

- **Team**: Atharv (dange), Pallab, Shyam, Pritam
- **Official emails**:
  - `atharvdange@spacebuilder.in` - Atharv
  - `contact@spacebuilder.in` - General contact
  - `help@spacebuilder.in` - Support
  - `socials@spacebuilder.in` - Socials
  - `pallabdev@spacebuilder.in` - Pallab
  - `shyamhz@spacebuilder.in` - Shyam
  - `pritam@spacebuilder.in` - Pritam
- **Domain**: spacebuilder.in
