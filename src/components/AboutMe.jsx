import { Briefcase, Code2, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutMeSection = () => {
  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          {/* left section */}
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate front-end Web Developer{" "}
            </h3>
            <p className="text-foreground">
              with over 1 year of experience in web Development , I Specialize
              in Creating responsive ,accessible , and performant web
              applications using modern technologies.
            </p>
            <p className="text-foreground">
              I'm Passionate about creating elegant solutions to complex
              problems , and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever evolvong Web
              landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a className="cosmic-button" href="#contact">
                get in touch
              </a>
              <a
                className={cn(
                  "px-6 py-2 rounded-full text-primary hover:bg-primary/10",
                  "transition-colors duration-300 border-2"
                )}
                href="/AhmedRedaSalama-Resume.pdf"
                download
              >
                download CV
              </a>
            </div>
          </div>
          {/* right section */}
          <div className="grid grid-cols-1 gap-6">
            {/* item-1 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex sm:flex-row flex-col  items-center gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="size-6 text-primary" />
                </div>
                <div className="sm:text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-foreground">
                    creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            {/* item-2 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex  sm:flex-row flex-col items-center gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="size-6 text-primary" />
                </div>
                <div className="sm:text-left">
                  <h4 className="font-semibold text-lg">UI/Ux Design</h4>
                  <p className="text-foreground">
                    Designing intuitive user Interfaces and seamless user
                    experiences
                  </p>
                </div>
              </div>
            </div>
            {/* item-3 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex  sm:flex-row flex-col items-center gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="size-6 text-primary" />
                </div>
                <div className="sm:text-left">
                  <h4 className="font-semibold text-lg">Project Management </h4>
                  <p className="text-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
