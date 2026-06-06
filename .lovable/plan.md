## Goal

Each project gets a horizontal scrolling screenshot strip in its modal, placed between the description and the Overview section. Screenshots are auto-discovered from a folder, labeled by filename (or overridden via `manifest.json`), and the manifest can also hold the textual content currently hardcoded in `projects.ts`.

## Folder layout

```text
src/assets/projects/
  hm-data-project/
    manifest.json
    01-clusters.png
    02-revenue-share.png
  youtube-tab-analyser/
    manifest.json
    popup.png
  linguaweb/
    ...
```

The folder name matches the project `id` already used in `projects.ts`.

## manifest.json shape

All fields optional — anything omitted falls back to the value in `projects.ts` (or, for screenshots, to a label derived from the filename: `01-revenue-share.png` → `Revenue Share`).

```json
{
  "title": "H&M Data Analytics",
  "description": "Short card description...",
  "detailedDescription": "Multi-paragraph overview...",
  "challengesSolutions": [
    { "challenge": "...", "solution": "..." }
  ],
  "tags": ["Python", "Pandas"],
  "repo": "https://github.com/...",
  "link": "...",
  "firefoxAddon": "...",
  "screenshots": [
    { "file": "01-clusters.png", "label": "Customer Clusters" },
    { "file": "02-revenue-share.png" }
  ]
}
```

If `screenshots` is omitted, every image in the folder is included in alphabetical order with auto-derived labels. If `screenshots` is present, only listed files appear, in that order.

## Auto-discovery (Vite)

Use `import.meta.glob` to pull in every image and every manifest at build time, with no manual imports:

```ts
const images = import.meta.glob(
  "@/assets/projects/*/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, query: "?url", import: "default" }
);
const manifests = import.meta.glob(
  "@/assets/projects/*/manifest.json",
  { eager: true, import: "default" }
);
```

A new `src/data/loadProjects.ts` merges these with the base array in `projects.ts` (kept as fallback / source of truth for ordering and visibility) and exports the final `projects` list with a `screenshots: { src, label }[]` field added.

Adding a new project later = create the folder, drop a `manifest.json`, drop screenshots. No code changes.

## UI changes

**New component** `src/components/ScreenshotReel.tsx`:
- Horizontal scrolling strip (`overflow-x-auto`, snap points, hidden scrollbar).
- Each item: image in a fixed-height card with caption label beneath.
- Click image → opens shadcn `Dialog` lightbox showing full image + label.
- Hidden entirely when a project has zero screenshots.

**`ProjectModal.tsx`**: insert `<ScreenshotReel screenshots={project.screenshots} />` after the short description block and before the Overview / detailedDescription section. No other layout changes.

## Files touched

- new: `src/assets/projects/<id>/manifest.json` (one starter manifest per existing visible project, copying current text so nothing regresses)
- new: `src/data/loadProjects.ts`
- new: `src/components/ScreenshotReel.tsx`
- edit: `src/data/projects.ts` — keep as the base list (id, visible, fallback fields); re-export via `loadProjects.ts` so existing imports keep working
- edit: `src/components/ProjectModal.tsx` — render the reel in the new slot
- edit: `src/components/Projects.tsx` and `src/pages/ProjectDetail.tsx` if they import directly from `projects.ts` — switch to the merged loader

No screenshots are added in this pass — the reels will simply be hidden until you drop images into the folders.
