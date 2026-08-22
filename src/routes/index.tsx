import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Clapperboard,
  Film,
  Mail,
  PenTool,
  Play,
  Quote,
  ScrollText,
  Sparkles,
  Star,
  Theater,
  User,
} from "lucide-react";

import heroPortrait from "../assets/hero-portrait.jpg";
import lateNightImg from "../assets/project-late-night.jpg";
import fatherSonImg from "../assets/project-father-son.jpg";
import loveStoryImg from "../assets/project-love-story.jpg";
import studentLifeImg from "../assets/project-student-life.jpg";
import nirmalPortrait from "../assets/nirmal-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nirmal Sai Pothini | Actor · Director · Story Writer",
      },
      {
        name: "description",
        content:
          "Portfolio of Nirmal Sai Pothini — actor, director, and story writer crafting emotionally charged cinema.",
      },
      {
        property: "og:title",
        content: "Nirmal Sai Pothini | Actor · Director · Story Writer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Nirmal Sai Pothini — actor, director, and story writer crafting emotionally charged cinema.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LATE_NIGHT_URL = "https://www.youtube.com/watch?v=Rg-5pQS_0Ks";

const projects = [
  {
    id: "late-night",
    title: "Late Night",
    role: "Actor",
    category: "Short Film",
    description:
      "A heartfelt student love story that lingers in the quiet hours between midnight conversations and unspoken feelings.",
    image: lateNightImg,
    accent: "from-primary/20 to-transparent",
    featured: true,
    link: LATE_NIGHT_URL,
  },
  {
    id: "father-son",
    title: "Untitled — Father & Son Revenge",
    role: "Story Writer",
    category: "Feature Concept",
    description:
      "An epic revenge saga woven through ancient combat arts, bloodline honor, and the cost of vengeance across generations.",
    image: fatherSonImg,
    accent: "from-accent/20 to-transparent",
    featured: false,
    link: null,
  },
  {
    id: "love-story",
    title: "Untitled Love Story",
    role: "Story Writer",
    category: "Feature Concept",
    description:
      "A tender narrative exploring love, longing, and the moments that define us before we even realize it.",
    image: loveStoryImg,
    accent: "from-primary/20 to-transparent",
    featured: false,
    link: null,
  },
  {
    id: "student-life",
    title: "Untitled — A Student's Life",
    role: "Story Writer",
    category: "Social Drama",
    description:
      "The journey of a gifted student from a poor family whose dreams collide with society's indifference and the ego of power.",
    image: studentLifeImg,
    accent: "from-accent/20 to-transparent",
    featured: false,
    link: null,
  },
];

const skills = [
  {
    icon: Theater,
    title: "Acting",
    description:
      "Bringing raw, authentic emotion to every frame. From intimate close-ups to explosive dramatic arcs.",
  },
  {
    icon: Clapperboard,
    title: "Direction",
    description:
      "Crafting visual language that speaks louder than dialogue. Building worlds through composition, pacing, and performance.",
  },
  {
    icon: PenTool,
    title: "Story Writing",
    description:
      "Spinning stories rooted in emotion, society, and the human condition — from student romances to revenge epics.",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
}) {
  const { ref, visible } = useReveal();
  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : "";
  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "zoom"
          ? "reveal-zoom"
          : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function CinematicLoader() {
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 1900);
    const t2 = setTimeout(() => setDone(true), 2900);
    document.body.style.overflow = "hidden";
    const t3 = setTimeout(() => {
      document.body.style.overflow = "";
    }, 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-background ${exiting ? "curtain-top" : ""}`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-background ${exiting ? "curtain-bottom" : ""}`}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="film-grain absolute inset-0" />
        <div className="spotlight-bg absolute inset-0" />
        <Film className="reel-spin h-10 w-10 text-primary" />
        <p className="title-in mt-6 font-serif text-2xl text-foreground sm:text-4xl">
          NIRMAL SAI POTHINI
        </p>
        <p className="flicker mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Actor · Director · Writer
        </p>
        <div className="mt-8 h-px w-48 overflow-hidden bg-border">
          <div className="loader-bar h-full w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function useParallax(factor = 0.15) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * factor);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor]);

  return offset;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground">
            Nirmal Sai Pothini
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a
            href="#work"
            className="story-link transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#about"
            className="story-link transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#skills"
            className="story-link transition-colors hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="story-link transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Get in touch</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const offset = useParallax(0.25);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="spotlight-bg ambient-drift absolute inset-0"
        style={{ transform: `translate3d(0, ${offset * 0.4}px, 0)` }}
      />
      <div className="film-grain absolute inset-0" />

      <div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 lg:flex-row lg:justify-between lg:gap-12"
        style={{
          transform: `translate3d(0, ${offset * -0.3}px, 0)`,
          opacity: Math.max(0, 1 - offset / 420),
        }}
      >
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Actor · Director · Story Writer</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Nirmal Sai
              <span className="block text-primary">Pothini</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Crafting stories that hit before the first cut. An actor, director,
              and writer building cinema rooted in emotion, society, and the
              moments that stay with you long after the credits roll.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                <Play className="h-4 w-4 fill-current" />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-base font-medium text-foreground transition-all hover:bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <Mail className="h-4 w-4" />
                Collaborate
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} variant="zoom" className="mt-12 lg:mt-0">
          <div
            className="relative"
            style={{ transform: `translate3d(0, ${offset * 0.18}px, 0)` }}
          >
            <div className="ambient-drift absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl" />
            <div className="group relative aspect-[3/4] w-72 overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-2xl shadow-primary/20 sm:w-80 lg:w-96">
              <img
                src={nirmalAvatar.url}
                alt="Illustrated cinematic avatar of Nirmal Sai Pothini"
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
                width={450}
                height={600}
              />
              <div className="film-grain absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/10 to-primary/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={heroPortrait}
                  alt="Cinematic portrait"
                  className="w-full object-cover"
                  width={1280}
                  height={1600}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Quote className="mb-2 h-8 w-8 text-primary/70" />
                  <p className="font-serif text-xl italic text-foreground">
                    "Every story is a heartbeat. My job is to make you feel it."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                About
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                A storyteller in front of, behind, and beneath the camera.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nirmal Sai Pothini is an emerging actor, director, and writer
                with a deep love for cinema that moves people. Whether it is the
                quiet ache of a student romance in{" "}
                <span className="text-foreground">Late Night</span>, the
                thunder of a father-son revenge epic, or the unflinching gaze of
                a social drama — his work chases truth over spectacle.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                He believes the best films do not just entertain; they echo the
                lives we live, the battles we hide, and the love we never say out
                loud.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Method Acting", "Visual Storytelling", "Screenwriting", "Character Direction"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Selected Work
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Stories on screen and page.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A growing collection of films acted, directed, and narratives
              written from the heart.
            </p>
          </Reveal>
        </div>

        <div className="masonry">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 4) as 1 | 2 | 3 | 4}
              className="masonry-item"
            >
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={1280}
                    height={900}
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-60`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                    <Film className="h-3.5 w-3.5" />
                    {project.category}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Role: {project.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Craft
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Three lenses. One vision.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={(index + 1) as 1 | 2 | 3}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <skill.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      <div className="spotlight-bg absolute inset-0" />
      <div className="film-grain absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Let's Create
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Ready to bring the next story to life?
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you are casting, collaborating, or looking for a fresh voice
            with a camera-ready perspective — let's talk.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:nirmalsaipothini@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              <Mail className="h-5 w-5" />
              nirmalsaipothini@gmail.com
            </a>
            <a
              href={LATE_NIGHT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <Play className="h-5 w-5 fill-current" />
              Watch Late Night
            </a>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-10 flex justify-center gap-6 text-muted-foreground">
            {[
              { label: "Instagram", href: "#" },
              { label: "IMDb", href: "#" },
              { label: "YouTube", href: LATE_NIGHT_URL },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href === "#" ? undefined : "_blank"}
                rel="noreferrer"
                className="story-link text-sm font-medium transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <ScrollText className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg text-foreground">
            Nirmal Sai Pothini
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nirmal Sai Pothini. Crafted for cinema.
        </p>
        <p className="text-sm text-muted-foreground">
          Actor · Director · Story Writer
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <CinematicLoader />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
