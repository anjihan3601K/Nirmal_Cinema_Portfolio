import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Film, Play, Quote } from "lucide-react";

import { getProject } from "../lib/projects";

export const Route = createFileRoute("/story/$storyId")({
  loader: ({ params }) => {
    const project = getProject(params.storyId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story not found | Nirmal Sai Pothini" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Story | Nirmal Sai Pothini`;
    return {
      meta: [
        { title },
        { name: "description", content: project.logline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.logline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { project } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background">
      {/* Cinematic shutter opening */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-background curtain-top" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-background curtain-bottom" />
      </div>

      <section className="relative film-grain overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover story-hero-zoom"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-28 lg:pt-36">
          <Link
            to="/"
            hash="work"
            className="story-in inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>

          <div className="story-in story-delay-1 mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <Film className="h-3.5 w-3.5" />
            {project.category}
          </div>

          <h1 className="story-in story-delay-2 mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-6xl">
            {project.title}
          </h1>

          <p className="story-in story-delay-3 mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground lg:text-2xl">
            {project.logline}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="story-in story-delay-4 mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch on YouTube
            </a>
          )}
        </div>
      </section>

      <section className="relative spotlight-bg py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="story-in story-delay-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-xs uppercase tracking-widest text-primary">
                  {detail.label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-7">
            {project.synopsis.map((paragraph, index) => (
              <p
                key={index}
                className={`story-in story-delay-${Math.min(index + 2, 5)} text-lg leading-relaxed text-muted-foreground`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="story-in story-delay-5 mt-16 rounded-2xl border border-border bg-card p-8">
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 font-serif text-2xl italic leading-relaxed text-foreground">
              Every story starts as a feeling I couldn't explain — the script is
              just me trying.
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
              Nirmal Sai Pothini — {project.role}
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
