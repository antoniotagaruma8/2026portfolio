"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { SurpriseMeButton } from "./SurpriseMeButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  dict: any;
  lang: string;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.work, href: `/${lang}/#work` },
    { name: dict.about, href: `/${lang}/about` },
    { name: dict.cv, href: `/${lang}/cv` },
    { name: dict.notes, href: `/${lang}/notes` },
    { name: dict.archive, href: `/${lang}/archive` },
    { name: "Contact", href: `/${lang}/#contact` },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/40 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between transition-all relative">
        <Link href={`/${lang}`} className="font-extrabold text-xl md:text-2xl tracking-tighter shrink-0 z-50">
          anton<span className="text-gradient">.io/</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === `/${lang}` && link.href === `/${lang}/#work` ? false : false); // active state logic usually requires more complex checking with hashes
            // Simplified active check that works well enough for paths
            const isPathActive = pathname === link.href.split('#')[0] && pathname !== `/${lang}`;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isPathActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {isPathActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 z-50">
          <div className="flex items-center">
            <SurpriseMeButton dict={dict?.surprise} />
            <div className="w-px h-5 bg-border mx-3 p-0" />
            <LanguageSwitcher currentLang={lang} />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-full border border-border bg-background hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
            >
              <div className="glass-card rounded-[2rem] p-4 flex flex-col gap-2 border border-border shadow-2xl">
                {navLinks.map((link) => {
                  const isPathActive = pathname === link.href.split('#')[0] && pathname !== `/${lang}`;
                  return (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl font-semibold transition-colors ${
                        isPathActive ? 'bg-accent/10 text-accent' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
