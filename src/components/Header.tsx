import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tentang FEG", path: "/about" },
  { label: "Program", path: "/programs" },
  { label: "Sistem Pembelajaran", path: "/learning-system" },
  { label: "Admissions", path: "/admissions" },
  // { label: "Partner School", path: "/partner" },
  // { label: "Event", path: "/event" },
  // { label: "Blog", path: "/blog" },
  // { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-display text-lg font-bold text-primary-foreground">FEG</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-sm font-bold text-foreground leading-tight">Futuristic</span>
            <span className="font-display text-xs font-semibold text-primary uppercase tracking-widest leading-tight">Edu Global</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary uppercase tracking-wide",
                location.pathname === item.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link to="/admissions" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-sm">
            Daftar Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-md text-foreground hover:bg-muted"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="xl:hidden border-t border-border bg-background px-4 py-4 space-y-2 shadow-lg absolute w-full left-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 text-sm font-semibold rounded-md transition-colors uppercase tracking-wide",
                location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/admissions" className="block px-3 py-2 mt-4 text-sm font-semibold text-accent-foreground bg-accent rounded-md text-center">
            Daftar Sekarang
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;