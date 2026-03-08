

## Plan: Fat tags span 2 rows, keep column justification

Sorry for the confusion — let me clarify the approach.

The current layout uses a 3-column grid where column 1 is right-aligned, column 2 is centered, and column 3 is left-aligned. This creates a nice visual cluster. We keep all of that.

The change: instead of every tag being the same height, longer tags (8+ chars like "Scikit-learn", "Matplotlib") will be **taller** — spanning 2 grid rows — while short tags ("Python", "Pandas") stay at 1 row.

### How it works

The grid stays 3 columns. We set `grid-auto-rows` to a small unit (e.g., `1rem`), so a normal tag spans 1 row (~1rem tall) and a fat tag spans 2 rows (~2rem tall). The column justification logic (`justify-end` / `justify-center` / `justify-start`) stays exactly as-is — it's based on `tagIndex % 3` (position within a row of 3).

### Visual example (5 tags: Python, Pandas, Scikit-learn, Matplotlib, Seaborn)

```text
Column 1 (right)  |  Column 2 (center)  |  Column 3 (left)
─────────────────────────────────────────────────────────────
   [Python]        |     [Pandas]         | ┌──────────────┐
                   |                      | │ Scikit-learn  │
                   |                      | └──────────────┘
┌──────────────┐   |    [Seaborn]         |
│  Matplotlib  │   |                      |
└──────────────┘   |                      |
```

Fat tags naturally push into the next row's vertical space, while the 3-column position and justification remain intact.

### Changes in `src/components/ProjectCard.tsx`

1. Set grid container to `grid-auto-rows: 1rem` (half a normal tag height)
2. For each tag: if `tag.length >= 8`, apply `row-span-2` + taller padding; else `row-span-1` + compact padding
3. **Keep** the column justification logic exactly as-is (`tagIndex % 3` determines `justify-end` / `justify-center` / `justify-start`)
4. Keep `getMaxTagWidth` for consistent horizontal sizing

