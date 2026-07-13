import { BookOpen, FileCode2, FlaskConical, Terminal } from "lucide-react";

export const notesData = {
  en: {
    title: "Digital Garden",
    subtitle: "A collection of code snippets, tech experiments, and thoughts on bridging the gap between education and technology.",
    notes: [
      {
        id: "teaching-to-code",
        title: "Why Teaching English Made Me a Better Developer",
        category: "Thoughts",
        date: "June 2026",
        icon: BookOpen,
        color: "text-blue-500",
        excerpt: "How the patience and adaptability required to teach ESL translates directly into writing cleaner, more maintainable code and designing better user interfaces."
      },
      {
        id: "gemini-prompting",
        title: "Structured Output with Gemini 1.5",
        category: "Snippets",
        date: "May 2026",
        icon: Terminal,
        color: "text-emerald-500",
        excerpt: "A quick TypeScript snippet showing how to force the Gemini API to return strictly formatted JSON for predictable UI rendering."
      },
      {
        id: "python-rag-faiss",
        title: "Building a Local RAG with Python & FAISS",
        category: "Experiments",
        date: "April 2026",
        icon: FlaskConical,
        color: "text-purple-500",
        excerpt: "Notes on setting up a Retrieval-Augmented Generation system locally using sentence-transformers and FAISS for querying educational PDFs."
      },
      {
        id: "pdf-js-fabric",
        title: "Browser-based PDF Editing",
        category: "Snippets",
        date: "March 2026",
        icon: FileCode2,
        color: "text-amber-500",
        excerpt: "How I layered Fabric.js canvases over PDF.js renders to create an interactive web-based document editor."
      }
    ]
  },
  es: {
    title: "Jardín Digital",
    subtitle: "Una colección de fragmentos de código, experimentos tecnológicos y pensamientos sobre cómo unir la educación y la tecnología.",
    notes: [
      {
        id: "teaching-to-code",
        title: "Por qué enseñar inglés me hizo mejor desarrollador",
        category: "Pensamientos",
        date: "Junio 2026",
        icon: BookOpen,
        color: "text-blue-500",
        excerpt: "Cómo la paciencia y adaptabilidad necesarias para enseñar ESL se traducen directamente en escribir código más limpio y mantener mejores interfaces de usuario."
      },
      {
        id: "gemini-prompting",
        title: "Salida estructurada con Gemini 1.5",
        category: "Fragmentos",
        date: "Mayo 2026",
        icon: Terminal,
        color: "text-emerald-500",
        excerpt: "Un fragmento rápido de TypeScript que muestra cómo obligar a la API de Gemini a devolver JSON estrictamente formateado para un renderizado predecible."
      },
      {
        id: "python-rag-faiss",
        title: "Construyendo un RAG local con Python y FAISS",
        category: "Experimentos",
        date: "Abril 2026",
        icon: FlaskConical,
        color: "text-purple-500",
        excerpt: "Notas sobre cómo configurar un sistema de Generación Aumentada por Recuperación (RAG) localmente usando sentence-transformers y FAISS para consultar PDFs educativos."
      },
      {
        id: "pdf-js-fabric",
        title: "Edición de PDF en el navegador",
        category: "Fragmentos",
        date: "Marzo 2026",
        icon: FileCode2,
        color: "text-amber-500",
        excerpt: "Cómo superpuse canvas de Fabric.js sobre renderizados de PDF.js para crear un editor de documentos web interactivo."
      }
    ]
  }
};
