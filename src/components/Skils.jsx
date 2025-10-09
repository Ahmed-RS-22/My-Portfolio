import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // =========================
  // 🌐 Front-End Development
  // =========================
  { name: "HTML5", level: 95, category: "Front-end" },
  { name: "CSS3", level: 95, category: "Front-end" },
  { name: "JavaScript (ES6+)", level: 85, category: "Front-end" },
  { name: "React.js", level: 80, category: "Front-end" },
  { name: "Next.js", level: 65, category: "Front-end" },
  { name: "Redux Toolkit", level: 80, category: "Front-end" },
  // =========================
  // 🎨 Styling & UI Libraries
  // =========================
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Bootstrap", level: 85, category: "Styling" },
  // =========================
  // 💡 Other Front-End Concepts
  // =========================
  { name: "Responsive Web Design", level: 90, category: "Concepts" },
  { name: "UI/UX Best Practices", level: 80, category: "Concepts" },
  { name: "Performance Optimization", level: 75, category: "Concepts" },
  // =========================
  // ⚙️ Tools & Platforms
  // =========================
  { name: "Git/GitHub", level: 90, category: "Tools" },
  // { name: "Vercel", level: 85, category: "Tools" },
  { name: "NPM/Vite", level: 80, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },

  // =========================
  // 🔗 APIs & Data Handling
  // =========================
  { name: "APIs / Axios / JSON ", level: 80, category: "APIs" },
  //   { name: "Axios", level: 80, category: "Back-end / APIs" },
  //   { name: "JSON", level: 90, category: "Back-end / APIs" },

  // =========================
  // 🤝 Soft & Team Skills
  // =========================
  //   { name: "Team Collaboration", level: 90, category: "Soft Skills" },
  //   { name: "Problem Solving", level: 85, category: "Soft Skills" },
  //   { name: "Debugging", level: 80, category: "Soft Skills" },
  //   { name: "Time Management", level: 85, category: "Soft Skills" },
  //   { name: "Code Review", level: 80, category: "Soft Skills" },
  //   { name: "Remote Collaboration", level: 75, category: "Soft Skills" },
];
const categories = ["All", "Front-end", "Styling", "Tools", "Concepts", "APIs"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills =skills.filter((skill)=> activeCategory === "All" ||skill.category ===activeCategory)
  // intersection  observer for animation
  useEffect(() => {
    const lines = document.querySelectorAll(".line");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("an-grow");
          } else {
            entry.target.classList.remove("an-grow");
          }
        },
        {
          root: null,
          threshold: 0.4,
        }
      );
    });
    lines.forEach((line) => observer.observe(line));

    return () => {
      lines.forEach((line) => observer.unobserve(line));
    };
  }, []);
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="skills">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        {/* fliter category */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors border-2 duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/40 text-foreground hover:bg-primary-foreground/30 hover:text-primary"
              )}
            >
              {" "}
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg card-hover cursor-pointer shadow-xs"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-primary-foreground/50 h-2 rounded-full overflow-hidden">
                <div
                  className="line bg-primary h-2 rounded-full origin-left  "
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="mt-1 text-right">
                <span className="text-sm text-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
