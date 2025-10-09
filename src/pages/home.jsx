import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/Hero.";
import { AboutMeSection } from "../components/AboutMe";
import { SkillsSection } from "../components/Skils";
import { ProjectsSection } from "../components/Projects";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* bg effects */}
      <StarBackground />
      {/* navbar  */}
      <NavBar />
      {/* main */}
      <main className="">
        {/* hero */}
        <HeroSection />
        {/* about me  */}
        <AboutMeSection />
        {/* Skills */}
        <SkillsSection/>
        {/* projects */}
        <ProjectsSection/>
        {/* Conatcts */}
        <ContactSection/>
      </main>
      {/* footer */}
      <Footer/>
    </div>
  );
};
export default Home;
