"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const notes = [
  {
    year: "2026",
    title: "Why Teaching English Made Me a Better Developer",
    url: "/notes/teaching-to-code"
  },
  {
    year: "2026",
    title: "Structured Output with Gemini 1.5",
    url: "/notes/gemini-prompting"
  },
  {
    year: "2026",
    title: "Building a Local RAG with Python & FAISS",
    url: "/notes/python-rag-faiss"
  },
  {
    year: "2026",
    title: "Browser-based PDF Editing",
    url: "/notes/pdf-js-fabric"
  }
];

export function NotesSection() {
  return (
    <section id="notes" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Notes
        </h2>
      </div>

      <ul className="group/list">
        {notes.map((note, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
            className="mb-12"
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg p-4 -m-4 rounded-xl hover:bg-white/5">
              <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {note.year}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <div>
                    <a
                      className="inline-flex items-baseline font-bold leading-tight hover:text-accent-pink focus-visible:text-accent-pink group/link text-base md:text-lg"
                      href={note.url}
                      aria-label={note.title}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {note.title}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                      </span>
                    </a>
                  </div>
                </h3>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
