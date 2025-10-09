import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
      id="hero"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="sm:text-4xl text-3xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ahmed
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2">
              {" "}
              Salama
            </span>
          </h1>
          <p className="text-lg md:text-xl  text-foreground  max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end web Development , I build Interfaces that
            are both beautiful and functional .
          </p>
          <div className="">
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              view my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-foreground mb-2">scroll </span>
      <ArrowDown className="size-5 text-primary"/>
      </div>
    </section>
  );
};
