import { ArrowUp } from "lucide-react"

export const Footer=()=>{
    return (
        <footer className="py-12 px-12 bg-card/50 relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-foreground  ">
                {" "}
                &copy; {new Date().getFullYear()} <span className="text-primary">Ahmed Reda Salama</span> , All rights reserved .
            </p>
            <a href="#hero" title="go home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <ArrowUp/>
            </a>
        </footer>
    )
}