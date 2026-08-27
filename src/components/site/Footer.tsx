import { BookOpenText, Facebook, Instagram, Youtube } from "lucide-react";

const COLUMNS = [
  { title: "Quick Links", items: ["Explore", "Stories", "Games", "About Us"] },
  { title: "For Parents", items: ["Parent Guide", "Safety", "Subscription", "Help Center"] },
  { title: "Support", items: ["Contact Us", "FAQ", "Privacy Policy", "Terms of Use"] },
];

export function Footer() {
  return (
    <footer className="bg-teal-deep pt-12 pb-6 text-mint">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-2xl bg-mint/20">
              <BookOpenText className="size-5" />
            </span>
            <span className="font-display text-xl">WonderLearn</span>
          </div>
          <p className="mt-1 text-[10px] tracking-[0.18em] uppercase opacity-80">
            Imagine · Discover · Grow
          </p>
          <p className="mt-4 text-sm opacity-90">
            Making learning magical for every child.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-base">{col.title}</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#top" className="transition-opacity hover:opacity-100 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl px-6">
        <h3 className="font-display text-base">Stay Connected</h3>
        <p className="mt-1 text-sm opacity-90">Subscribe to our newsletter</p>
        <form
          className="mt-3 flex max-w-md items-center gap-2 rounded-full bg-card/95 p-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="pill-btn pill-btn-sun text-sm">
            Subscribe
          </button>
        </form>
        <div className="mt-5 flex gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#top"
              aria-label="Social link"
              className="flex size-9 items-center justify-center rounded-full bg-mint/20 transition-colors hover:bg-mint/35"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="mt-8 border-t border-mint/20 pt-4 text-center text-xs opacity-75">
          © 2026 WonderLearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
