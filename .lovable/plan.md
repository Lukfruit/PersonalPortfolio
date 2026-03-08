

## Problem

On GitHub Pages, the URL is `lukfruit.github.io/teal-parallax-portfolio/`. React Router's `BrowserRouter` without a `basename` expects routes at `/`, so the path `/teal-parallax-portfolio/` matches nothing. The `ThemeToggle` is outside the router, which is why it still appears.

## Fix

**`src/App.tsx`** — Add a conditional `basename` to `BrowserRouter`:

```tsx
<BrowserRouter basename="/teal-parallax-portfolio">
```

But to avoid breaking the Lovable preview (where paths start at `/`), we need to detect the environment. Since `vite.config.ts` already sets `base` conditionally using `GITHUB_ACTIONS`, we can use the same approach with a Vite env variable:

**`vite.config.ts`** — Pass the base path as a define:
```ts
define: {
  __BASE_PATH__: JSON.stringify(isGHPages ? "/teal-parallax-portfolio" : ""),
},
```

**`src/App.tsx`** — Use it:
```tsx
<BrowserRouter basename={(window as any).__BASE_PATH__ || ""}>
```

Actually, a simpler approach: detect at runtime whether the URL starts with `/teal-parallax-portfolio`:

**`src/App.tsx`** only:
```tsx
const basename = window.location.pathname.startsWith("/teal-parallax-portfolio")
  ? "/teal-parallax-portfolio"
  : "";

// Then:
<BrowserRouter basename={basename}>
```

This requires zero build config changes and works in both Lovable preview and GitHub Pages.

## Summary

One small change to `src/App.tsx` — detect the base path at runtime so React Router matches routes correctly on GitHub Pages while keeping the Lovable preview working.

