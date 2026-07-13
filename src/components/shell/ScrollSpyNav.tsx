"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  id: string;
}

const defaultNavItems: NavItem[] = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Résumé", href: "#resume", id: "resume" },
  { name: "Contact", href: "#contact", id: "contact" },
];

interface ScrollSpyNavProps {
  navItems?: NavItem[];
  theme?: "teal" | "blue" | "amber";
}

export function ScrollSpyNav({ navItems, theme = "teal" }: ScrollSpyNavProps) {
  const items = navItems || defaultNavItems;
  const isCustom = !!navItems;

  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = params?.lang || "en";
  const isHome = pathname === `/${lang}` || pathname === `/`;

  // Scroll-spy is active on homepage (default nav) or when custom nav items are provided
  const shouldSpy = isHome || isCustom;

  useEffect(() => {
    if (!shouldSpy) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } 
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // Fix: last section never enters the observer zone because there's
    // no content below it. Activate it when the user reaches the bottom.
    const lastId = items[items.length - 1]?.id;
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (nearBottom && lastId) {
        setActiveId(lastId);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldSpy, items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (shouldSpy) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden mt-4 mb-2 flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-teal transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
        <span>Menu</span>
      </button>

      <nav className={cn("lg:mt-12 w-40 lg:block", isOpen ? "block mb-6" : "hidden")}>
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = shouldSpy && activeId === item.id;
            const href = shouldSpy ? `#${item.id}` : `/${lang}#${item.id}`;
            
            return (
              <li key={item.id}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, item.id)}
                  className={cn(
                    "nav-item",
                    theme === "blue" && "nav-item-blue",
                    theme === "amber" && "nav-item-amber",
                    isActive && "active"
                  )}
                >
                  <span className="nav-dot" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
