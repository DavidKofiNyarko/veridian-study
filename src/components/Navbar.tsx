import { BookOpen, Headphones, Users, Highlighter, BookMarked, MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <BookMarked className="h-7 w-7 text-accent" />
          <span className="font-serif text-xl font-bold text-foreground tracking-tight">Selah</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#books" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Library</a>
          <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Community</a>
          <a href="#audio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Audio</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Sign in
          </button>
          <button className="gradient-gold text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
