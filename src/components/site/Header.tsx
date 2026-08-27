import { useState } from "react";
import { BookOpenText, Menu, Search, Sparkles, X } from "lucide-react";

const NAV = ["Home", "Explore", "Stories", "Games", "About Us"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-sky-soft text-brand">
            <BookOpenText className="size-6" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl text-brand">
              Wonder<span className="text-leaf">Learn</span>
            </span>
            <span className="block text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Imagine · Discover · Grow
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-display text-sm text-brand/80 transition-colors hover:text-leaf"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-full border-2 border-sky-soft bg-card text-brand transition-colors hover:bg-sky-soft"
          >
            <Search className="size-4" />
          </button>
          <button className="pill-btn pill-btn-sun hidden text-sm sm:inline-flex">Log In</button>
          <button className="pill-btn pill-btn-leaf hidden text-sm sm:inline-flex">
            <Sparkles className="size-4" />
            Join Now
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border-2 border-sky-soft text-brand lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-card px-5 py-3 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 font-display text-brand hover:bg-sky-soft"
            >
              {item}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <button className="pill-btn pill-btn-sun flex-1 text-sm">Log In</button>
            <button className="pill-btn pill-btn-leaf flex-1 text-sm">Join Now</button>
          </div>
        </nav>
      )}
    </header>
  );
}
