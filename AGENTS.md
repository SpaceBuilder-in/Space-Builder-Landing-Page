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

## React Doctor rules

Run `npx react-doctor@latest` after any significant change to check for issues. The project currently scores 100/100 — keep it that way. Configuration is in `doctor.config.json`.

### Buttons
- Every `<button>` must have an explicit `type` attribute (`type="button"`, `"submit"`, or `"reset"`). Browsers default to `type="submit"` which causes accidental form submissions.

### Framer Motion / motion/react
- Use `LazyMotion` + `m` instead of importing `motion` directly. This saves ~30kb per component.
  ```tsx
  import { LazyMotion, m, domAnimation } from "motion/react";
  // Wrap return with <LazyMotion features={domAnimation}>
  // Use <m.div> instead of <motion.div>
  ```
- `AnimatePresence` and hooks (`useMotionValue`, `useSpring`) are fine to import directly.

### Images (next/image)
- Every `<Image>` using `fill` must also include a `sizes` prop matching its container width to avoid generating oversized responsive images.

### Animations & CSS
- Animated `blur()` filters should stay under 10px. Large blurs on large elements consume significant GPU memory on mobile.
- Add `{ passive: true }` to scroll/wheel event listeners that don't call `preventDefault()`.

### Server Actions
- All exported server actions should be validated with Zod or equivalent at the top of the function, even for public forms.

### Component patterns
- Move static data (arrays, objects) to module scope outside the component — rebuilding them every render breaks memoization and wastes cycles.
- Use stable keys (`item.id`, `item.slug`, or positional keys like `prefix-${index}`) — never array indices for reorderable/filterable lists, and never `key++` or `Math.random()`.
- Avoid `dangerouslySetInnerHTML` — create a safe markdown/HTML renderer instead (see `src/lib/markdown.tsx` for the pattern).
- Avoid chaining `useState` + `useEffect` for derived values — compute them inline with `useMemo` or during render.
- Hydration-sensitive values like `new Date()` in JSX should use `suppressHydrationWarning` on the parent element.

### Barrel imports
- Prefer direct imports (`./svg/LayersArt`) over barrel files (`./svg`) for performance. Barrels pull in every export and bloat the bundle.

### Code health
- Run `npx react-doctor@latest` before committing — it catches issues that lint and typecheck miss (security sinks, performance regressions, dead code).
- Remove unused files and dependencies promptly. Unused code adds maintenance surface and slows installs.

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
