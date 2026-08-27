import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Atom,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Compass,
  FlaskConical,
  Gamepad2,
  Globe2,
  Heart,
  Palette,
  Play,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Sprout,
  Swords,
  ToyBrick,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading, Sparkle } from "@/components/site/Sparkle";

import heroImg from "@/assets/hero.jpg";
import storyBalloon from "@/assets/story-balloon.jpg";
import storyLuna from "@/assets/story-luna.jpg";
import storySailor from "@/assets/story-sailor.jpg";
import storyGarden from "@/assets/story-garden.jpg";
import adventureImg from "@/assets/adventure-island.jpg";
import rabbit from "@/assets/mascot-rabbit.png";
import fox from "@/assets/mascot-fox.png";
import monster from "@/assets/mascot-monster.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WonderLearn — Let Curiosity Lead the Way for Kids 4-12" },
      {
        name: "description",
        content:
          "WonderLearn is a magical, ad-free learning world for kids aged 4-12: expert-curated stories, games and adventures across math, science, reading, art and life skills.",
      },
      { property: "og:title", content: "WonderLearn — Let Curiosity Lead the Way" },
      {
        property: "og:description",
        content:
          "A magical world where learning feels like an adventure. Stories, games and guided discovery for kids aged 4-12.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TOPICS = [
  { label: "Math Magic", icon: ToyBrick, tint: "bg-cream" },
  { label: "Science Lab", icon: FlaskConical, tint: "bg-sky-soft" },
  { label: "Reading Land", icon: BookOpen, tint: "bg-mint" },
  { label: "Art Studio", icon: Palette, tint: "bg-blush" },
  { label: "Geography", icon: Globe2, tint: "bg-cream" },
  { label: "Life Skills", icon: Sprout, tint: "bg-lilac" },
];

const STORIES = [
  { title: "The Starry Balloon", tag: "Friendship", img: storyBalloon },
  { title: "Luna and the Little Glow", tag: "Fantasy", img: storyLuna },
  { title: "The Brave Little Sailor", tag: "Adventure", img: storySailor },
  { title: "The Secret Garden", tag: "Kindness", img: storyGarden },
];

const GAMES = [
  { label: "Number Knight", icon: Swords, tint: "bg-mint" },
  { label: "Alphabet Balloons", icon: Sparkles, tint: "bg-cream" },
  { label: "Puzzle Playground", icon: Puzzle, tint: "bg-sky-soft" },
  { label: "Atom Adventure", icon: Atom, tint: "bg-lilac" },
  { label: "Memory Match", icon: Star, tint: "bg-blush" },
];

const REVIEWS = [
  {
    quote:
      "WonderLearn has made learning something my kids look forward to every day!",
    name: "Sarah M.",
  },
  {
    quote: "The stories are beautiful and the games are both fun and educational. Highly recommended!",
    name: "Daniel R.",
  },
  {
    quote: "Finally, a safe, creative and engaging platform that keeps my child inspired to learn.",
    name: "Priya S.",
  },
];

const BADGES = [
  { label: "Safe & Ad-Free", icon: ShieldCheck, tone: "text-leaf" },
  { label: "Expert Curated", icon: Star, tone: "text-sun" },
  { label: "Learn Through Play", icon: Gamepad2, tone: "text-brand" },
  { label: "For Ages 4–12", icon: Heart, tone: "text-destructive" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Topics />
        <Stories />
        <GamesSection />
        <FeaturedAdventures />
        <Parents />
        <OnTheGo />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-20" aria-labelledby="hero-title">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[620px]">
        <img
          src={heroImg}
          alt="Three children on a wooden bridge pointing at a floating castle in a magical library world"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative flex h-full flex-col items-center pt-10 text-center sm:pt-14">
          <h1
            id="hero-title"
            className="px-6 font-display text-4xl leading-tight text-brand drop-shadow-[0_2px_0_var(--card)] sm:text-5xl lg:text-6xl"
          >
            Let Curiosity
            <span className="mt-1 block text-leaf">Lead the Way</span>
          </h1>
          <p className="mt-4 max-w-sm px-6 font-display text-sm text-brand/90 sm:text-base">
            A magical world where learning feels like an adventure!
          </p>
          <button className="pill-btn pill-btn-sun mt-6 text-base">
            Start Exploring
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative z-30 mx-auto -mt-8 mb-[-26px] w-full max-w-4xl px-4">
        <ul className="toy-card grid grid-cols-2 gap-3 rounded-3xl px-5 py-4 sm:flex sm:items-center sm:justify-between">
          {BADGES.map(({ label, icon: Icon, tone }) => (
            <li key={label} className="flex items-center gap-2 sm:px-3">
              <Icon className={`size-5 shrink-0 ${tone}`} />
              <span className="font-display text-xs text-brand sm:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Topics() {
  return (
    <section id="explore" className="relative bg-mint/60 pt-20 pb-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Explore by Topic" />
        <div className="relative flex items-center justify-center gap-6">
          <img
            src={rabbit}
            alt="WonderLearn bunny mascot reading a book"
            width={640}
            height={640}
            loading="lazy"
            className="hidden w-28 animate-bob object-contain lg:block"
          />
          <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TOPICS.map(({ label, icon: Icon, tint }) => (
              <li key={label}>
                <button className="toy-card flex w-full flex-col items-center gap-3 px-3 py-5">
                  <span
                    className={`flex size-14 items-center justify-center rounded-2xl ${tint} text-brand`}
                  >
                    <Icon className="size-7" />
                  </span>
                  <span className="font-display text-xs text-brand sm:text-sm">{label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden w-28 shrink-0 flex-col gap-2 lg:flex">
            {["Discover", "Learn", "Have Fun"].map((sign, i) => (
              <span
                key={sign}
                className="rounded-full bg-sun px-4 py-2 text-center font-display text-xs text-sun-foreground shadow-card"
                style={{ marginLeft: i * 10 }}
              >
                {sign}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Carousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });

  return (
    <div className="relative">
      <button
        aria-label="Previous"
        onClick={() => scroll(-1)}
        className="absolute top-1/2 -left-2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-card sm:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <button
        aria-label="Next"
        onClick={() => scroll(1)}
        className="absolute top-1/2 -right-2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-card sm:flex"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

function Stories() {
  return (
    <section id="stories" className="bg-cream/70 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Magical Stories" action="View All Stories" />
        <Carousel>
          {STORIES.map((story) => (
            <article
              key={story.title}
              className="toy-card w-[240px] shrink-0 snap-start overflow-hidden sm:w-[260px]"
            >
              <img
                src={story.img}
                alt={story.title}
                width={768}
                height={512}
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-display text-base text-brand">{story.title}</h3>
                <span className="mt-2 inline-block rounded-full bg-mint px-3 py-1 text-[11px] font-semibold text-teal-deep">
                  {story.tag}
                </span>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function GamesSection() {
  return (
    <section id="games" className="bg-sky-soft/70 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Play & Learn" action="View All Games" />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GAMES.map(({ label, icon: Icon, tint }) => (
            <li key={label}>
              <button className={`toy-card group relative w-full ${tint} p-6`}>
                <Icon className="mx-auto size-10 text-brand" />
                <span className="mt-4 block font-display text-xs text-brand">{label}</span>
                <span className="mt-3 inline-flex size-8 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform group-hover:scale-110">
                  <Play className="size-4" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedAdventures() {
  const [active, setActive] = useState(0);
  const slides = [
    {
      title: "Island of Imagination",
      body: "Join Mia, Leo and Aria as they discover a floating island full of wonders, puzzles and new friends!",
    },
    {
      title: "The Cloud Explorers",
      body: "Sail above the clouds, collect star maps and learn how weather really works.",
    },
    {
      title: "Deep Sea Detectives",
      body: "Dive down with a curious crew to solve riddles hidden in a coral kingdom.",
    },
  ];
  const current = slides[active] ?? slides[0]!;


  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Featured Adventures" />
        <div className="toy-card grid overflow-hidden md:grid-cols-2">
          <img
            src={adventureImg}
            alt="A flying wooden ship carrying children between floating islands"
            width={1280}
            height={640}
            loading="lazy"
            className="h-56 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center gap-4 p-8">
            <h3 className="font-display text-2xl text-brand">
              <span className="text-leaf">{current.title.split(" ")[0]}</span>{" "}
              {current.title.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-sm text-muted-foreground">{current.body}</p>

            <button className="pill-btn pill-btn-sun w-fit text-sm">
              Start Adventure
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Show ${s.title}`}
              onClick={() => setActive(i)}
              className={`size-2.5 rounded-full transition-colors ${
                i === active ? "bg-leaf" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Parents() {
  return (
    <section id="about-us" className="bg-sky-soft/60 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title="Loved by Parents" />
        <ul className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.name} className="toy-card flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-lilac font-display text-brand">
                  {r.name[0]}
                </span>
                <p className="text-sm text-muted-foreground italic">“{r.quote}”</p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-display text-sm text-brand">– {r.name}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-sun text-sun" />
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OnTheGo() {
  return (
    <section className="relative overflow-hidden bg-mint/60 py-14">
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-4 px-6">
        <img
          src={monster}
          alt="Purple WonderLearn mascot holding a tablet"
          width={640}
          height={640}
          loading="lazy"
          className="hidden w-32 animate-float-slow object-contain sm:block"
        />
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkle className="size-4" />
            <h2 className="section-title text-2xl">Learning on the Go!</h2>
            <Sparkle className="size-4" />
          </div>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Download the WonderLearn app and continue the adventure anywhere, anytime.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {["App Store", "Google Play"].map((store) => (
              <button
                key={store}
                className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-left text-background shadow-card transition-transform hover:-translate-y-0.5"
              >
                <Compass className="size-5" />
                <span className="leading-tight">
                  <span className="block text-[9px] uppercase opacity-80">Get it on</span>
                  <span className="block font-display text-sm">{store}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <img
          src={fox}
          alt="Orange fox WonderLearn mascot waving"
          width={640}
          height={640}
          loading="lazy"
          className="hidden w-32 animate-bob object-contain sm:block"
        />
      </div>
    </section>
  );
}
