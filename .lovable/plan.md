

## Plan: Simplify Project Management

Since this is a static Vite/React app (no server-side file reading), we can't dynamically parse files at build time without adding complexity. Here are two realistic approaches:

### Option A: Single config file (Recommended)
Keep the same pattern as `siteConfig.ts` — one clean `projects.ts` file where each project is a simple object. Add a `visible` flag so you can show/hide projects without commenting code. This is the simplest, most maintainable approach.

### Option B: Separate files per project
Create `src/data/projects/` folder with one file per project (e.g., `project-one.ts`), plus an `index.ts` that imports and re-exports them all. Feels more modular but still requires manual imports since Vite can't auto-discover files at runtime.

### Recommendation: Option A with improvements

Enhance `src/data/projects.ts` to:
1. Add a `visible: boolean` field to the `Project` interface (defaults conceptually to `true`)
2. Add clear comments like siteConfig so it's obvious how to add/edit/hide projects
3. Filter by `visible` in `Projects.tsx` instead of commenting out blocks
4. Add optional fields like `link` (live URL) and `repo` (GitHub URL) for future use

**Changes:**
- **`src/data/projects.ts`** — Add `visible` field, add section comments, uncomment all projects (hidden ones get `visible: false`)
- **`src/components/Projects.tsx`** — Filter: `projects.filter(p => p.visible !== false)`

This way, to add a project you just copy-paste a block and fill in the fields. To hide one, set `visible: false`.

