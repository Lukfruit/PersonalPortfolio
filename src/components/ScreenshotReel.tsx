import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Screenshot } from "@/data/projects";

interface ScreenshotReelProps {
  screenshots?: Screenshot[];
}

export const ScreenshotReel: React.FC<ScreenshotReelProps> = ({ screenshots }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!screenshots || screenshots.length === 0) return null;

  const active = activeIndex !== null ? screenshots[activeIndex] : null;

  return (
    <>
      <div className="-mx-8 px-8 pb-2">
        <ul
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:thin]"
          style={{ scrollbarColor: "hsl(var(--muted-foreground) / 0.4) transparent" }}
        >
          {screenshots.map((shot, i) => (
            <li
              key={`${shot.src}-${i}`}
              className="snap-start shrink-0 w-64 sm:w-72"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-secondary/60 border border-border">
                  <img
                    src={shot.src}
                    alt={shot.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center truncate">
                  {shot.label}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-5xl bg-background border-border p-4">
          <DialogTitle className="sr-only">{active?.label ?? "Screenshot"}</DialogTitle>
          {active && (
            <div className="space-y-3">
              <div className="w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-secondary/40 rounded-md">
                <img
                  src={active.src}
                  alt={active.label}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">{active.label}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
