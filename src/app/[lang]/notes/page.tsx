"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { notesData } from "@/lib/notes-data";

export default function NotesPage() {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";
  const data = notesData[lang];

  return (
    <div className="container mx-auto px-6 py-12 lg:py-24 max-w-5xl">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {data.subtitle}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.notes.map((note, i) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass p-6 rounded-3xl border hover:border-accent transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-muted ${note.color}`}>
                <note.icon size={24} />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{note.date}</span>
            </div>
            
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                {note.category}
              </span>
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                {note.title}
              </h3>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {note.excerpt}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
