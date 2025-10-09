import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

const navLinks = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "Contact", href: "#Contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // 🔹 Scroll behavior (background blur)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Intersection Observer for scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter only visible sections
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          // Pick the section closest to the top
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
          !isMenuOpen && isScrolled
          ? "py-3 bg-background/80 shadow-xs backdrop-blur-md  "
          : "py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ahmed RS</span>{" "}
            Portfolio
          </span>
        </a>

        {/* 🌌 Desktop version */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, key) => (
            <a
              key={key}
              href={link.href}
              className={cn(
                "capitalize transition-colors duration-300",
                activeSection === link.href.replace("#", "")
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 📱 Mobile button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 📱 Mobile menu */}
        <div
          className={cn(
            "fixed  inset-0 origin-right bg-background/80 backdrop-blur-md z-45 flex flex-col items-center justify-center transition-all md:hidden duration-500",
            isMenuOpen
              ? "opacity-100 scale-x-100 pointer-events-auto "
              : "opacity-0 scale-x-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navLinks.map((link, key) => (
              <a
                key={key}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "capitalize transition-colors duration-300",
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
