import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

const Projects = [
  {
    id: 1,
    title: "Amazon-clone",
    Description:
      "E-commerce web app with authentication, cart system, and modern responsive UI.",
    image: "/projects/Amazon-Clone.png",
    tags: ["Next.js", "Tailwind", "Swiper.js", "ReduxToolKit"],
    demo: "https://amazon-clone-bay-tau.vercel.app/",
    repo: "https://github.com/eslamshaban060/Amazon-Clone",
  },
  {
    id: 2,
    title: "Restaurant Web App",
    Description:
      "Food ordering app with cart, category filters, and Google Maps integration.",
    image: "/projects/restaurant.png",
    tags: ["React.js", "Tailwind", "ReduxToolKit", "Axios"],
    demo: "https://karam-el-sham-restaurant-sigma.vercel.app/",
    repo: "https://github.com/Ahmed-RS-22/Karam-ElSham-restaurant",
  },
  {
    id: 7,
    title: "velora perfumes",
    Description:
      "perfumes e-commerce app with back-end seervice (supabase)",
    image: "/projects/velora.png",
    tags: ["React.js", "SupaBase", "ReduxToolKit", "Tailwind"],
    demo: "https://perfumes-velora.vercel.app/",
    repo: "https://github.com/Ahmed-RS-22/perfumes---velora",
  },
  {
    id: 3,
    title: "Gadget Guru",
    Description:
      "Full-stack electronics platform with IC database, logic simulator, and Karnaugh map simplifier.",
    image: "/projects/Gaget-Guru.png",
    tags: ["React.js", "Leaflet", "react-Flow", "Axios"],
    demo: "https://gadget-guru-tau.vercel.app/",
    repo: "https://github.com/Ahmed-RS-22/gadget-guru-",
  },
  {
    id: 4,
    title: "Task Manager App",
    Description:
      "CRUD-based task manager with persistent storage and clean Material UI design.",
    image: "/projects/ToDo.png",
    tags: ["React.js", "Tailwind", "Material UI", "Context API"],
    demo: "https://todo-list-hazel-eight-37.vercel.app/",
    repo: "https://github.com/Ahmed-RS-22/TODO-List",
  },
  {
    id: 5,
    title: "Movies App",
    Description:
      "Movie browser showing trending films, details, and smooth UI animations.",
    image: "/projects/movies.png",
    tags: ["HTML/CSS", "Tailwind", "JavaScript"],
    demo: "https://ahmed-rs-22.github.io/movies-App/",
    repo: "https://github.com/Ahmed-RS-22/movies-App",
  },
  {
    id: 6,
    title: "Registration System",
    Description:
      "Simple registration form with input validation and clean design.",
    image: "/projects/form.png",
    tags: ["HTML/CSS", "Tailwind", "JavaScript"],
    demo: "https://ahmed-rs-22.github.io/registration-system/",
    repo: "https://github.com/Ahmed-RS-22/registration-system",
  },
];
export const ProjectsSection = () => {
      useEffect(() => {
        const lines = document.querySelectorAll(".project");
        console.log(lines);
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(
            (entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("an");
              } else {
                entry.target.classList.remove("an");
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
    <section className="py-24 px-4 relative" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          here are some of my recent projects was carefully crafted with
          attention to detail , performance ,and user experience.
        </p>
        <div className="grid project grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group fade-in-up transform-[translateY(30px)_scale(0.5)] bg-card card-hover rounded-lg overflow-hidden shadow-xs "
            >
              <div className="h-48 overflow-hidden">
                <a target="_blank" href={project.demo} className="h-full w-full">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:cursor-pointer"
                  />
                  </a>
              </div>
              <div className="p-6 ">
                <div className="min-h-20">
                  <div className="flex  flex-wrap gap-2 mb-1">
                    {project.tags.map((tag,key) => (
                      <span key={key} className="rounded-full px-2 py-1 text-xs font-medium text-primary bg-foreground/10 border-3 ">
                        {tag}{" "}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold  mb-1">
                  {project.title}{" "}
                </h3>
                <p className="text-foreground text-sm mb-4">
                  {project.Description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      target="_blank"
                      title="watch demo"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                      href={project.demo}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                    title="GitHub Repo"
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                      href={project.repo}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/Ahmed-RS-22" target="_blank" className="cosmic-button w-fit flex mx-auto items-center gap-2 ">
                Check my GitHub <ArrowRight className="animate-pulse" size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
};
