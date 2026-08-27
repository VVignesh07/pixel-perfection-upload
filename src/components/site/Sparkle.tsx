import { Sparkles } from "lucide-react";

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <Sparkles
      aria-hidden="true"
      className={`animate-twinkle text-sun ${className}`}
    />
  );
}

export function SectionHeading({
  title,
  action,
  id,
}: {
  title: string;
  action?: string;
  id?: string;
}) {
  return (
    <div id={id} className="relative mb-8 flex items-center justify-center gap-3">
      <Sparkle className="size-5" />
      <h2 className="section-title text-2xl sm:text-3xl">{title}</h2>
      <Sparkle className="size-5" />
      {action && (
        <button className="pill-btn pill-btn-ghost absolute right-0 hidden text-xs sm:inline-flex">
          {action}
        </button>
      )}
    </div>
  );
}
