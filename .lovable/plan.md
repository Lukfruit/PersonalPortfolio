

## Adaptive Project Grid Layout

**The logic:** Based on total visible project count, split projects into rows where the last 1-2 rows use 2 columns (centered) to avoid orphans.

- **count % 3 === 0** (3, 6, 9...): All rows are 3 columns. No special handling.
- **count % 3 === 1** (4, 7, 10...): First `count - 4` items in 3-col grid, last 4 items in a centered 2-col grid (forming a square).
- **count % 3 === 2** (5, 8, 11...): First `count - 2` items in 3-col grid, last 2 items in a centered 2-col grid (trapezoid).

**Mobile priority:** Both grids use `grid-cols-1` at small screens, only switching to 2 or 3 columns at `md:`/`lg:` breakpoints.

### Changes

**`src/components/Projects.tsx`** -- Split the visible projects array into two groups based on the modulo logic above. Render the first group in the existing `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` grid. Render the second group (if any) in a `grid-cols-1 md:grid-cols-2` grid with `max-w` constrained and `mx-auto` centered, so the 2-col portion is narrower and visually centered beneath the 3-col section. Both grids share the same `gap-8`.

Roughly:
```tsx
const visible = projects.filter(p => p.visible !== false);
const remainder = visible.length % 3;
const splitAt = remainder === 0 ? visible.length : remainder === 1 ? visible.length - 4 : visible.length - 2;
const topGroup = visible.slice(0, Math.max(splitAt, 0));
const bottomGroup = visible.slice(Math.max(splitAt, 0));

// Render topGroup in 3-col grid
// Render bottomGroup in centered 2-col grid (max-w-[calc(66.666%+1rem)] mx-auto)
```

The `max-w` on the bottom grid ensures the 2 columns match the width of 2 out of 3 columns above, keeping alignment clean. On mobile, `max-w` is overridden to `100%` so single-column layout is unaffected.

