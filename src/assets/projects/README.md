# Project assets

Each subfolder name matches a project `id` from `src/data/projects.ts`.

Drop screenshots directly into the project's folder — they'll show up
automatically in the reel inside the project modal.

## Filenames → labels

By default, the label is derived from the filename:

- `01-customer-clusters.png` → **Customer Clusters**
- `revenue_share.jpg` → **Revenue Share**

The leading `NN-` / `NN_` prefix is stripped (and used only for ordering).

## manifest.json (optional)

Drop a `manifest.json` in a project folder to override anything:

```json
{
  "title": "Optional override",
  "description": "Short card text override",
  "detailedDescription": "Long-form overview override",
  "challengesSolutions": [
    { "challenge": "...", "solution": "..." }
  ],
  "tags": ["Optional", "Override"],
  "repo": "https://github.com/...",
  "link": "https://...",
  "firefoxAddon": "https://...",
  "screenshots": [
    { "file": "01-clusters.png", "label": "Customer Clusters" },
    { "file": "02-revenue-share.png" }
  ]
}
```

Any field you omit falls back to the value defined in
`src/data/projects.ts`. If `screenshots` is omitted, every image in the
folder is included in alphabetical order.
