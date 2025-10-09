import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
export default function NotFound() {
  return (
    <>
    <ThemeToggle/>
    <StarBackground/>
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-background text-foreground">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors duration-300"
        >
        <ArrowLeft className="size-5" />
        Back to Home
      </Link>
    </section>
          </>
  );
}
