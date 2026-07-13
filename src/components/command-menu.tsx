"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Code2, FileText, Folder, Home, Monitor, Moon, Sun, Terminal } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] bg-background/80 backdrop-blur-sm">
      <div 
        className="fixed inset-0" 
        onClick={() => setOpen(false)} 
      />
      
      <Command 
        className="relative z-50 w-full max-w-2xl overflow-hidden rounded-xl border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <Command.Input 
          autoFocus
          placeholder="Type a command or search..." 
          className="flex h-14 w-full border-b bg-transparent px-5 py-3 text-lg outline-none placeholder:text-muted-foreground text-foreground"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          
          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-items]]:mt-2">
            <Command.Item
              onSelect={() => runCommand(() => router.push("/"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Home size={16} /> Home
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/about"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Terminal size={16} /> About Me
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/cv"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <FileText size={16} /> Interactive CV
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/archive"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Folder size={16} /> Project Archive
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Case Studies" className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-items]]:mt-2">
            <Command.Item
              onSelect={() => runCommand(() => router.push("/work/cpe"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Code2 size={16} /> CPE Exam Platform
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/work/carta-clara"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Code2 size={16} /> Carta Clara
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-items]]:mt-2">
            <Command.Item
              onSelect={() => runCommand(() => setTheme("light"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Sun size={16} /> Light Mode
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => setTheme("dark"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Moon size={16} /> Dark Mode
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => setTheme("system"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground aria-selected:bg-accent aria-selected:text-white transition-colors"
            >
              <Monitor size={16} /> System Theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
