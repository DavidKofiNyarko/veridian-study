import logo from "@/assets/veretas-lumina-logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#books", label: "Library" },
    { href: "#community", label: "Community" },
    { href: "#audio", label: "Audio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Veretas Lumina" className="h-8 w-auto" />
          <span className="font-serif text-xl font-bold text-foreground tracking-tight hidden sm:block">Veretas Lumina</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Sign in
          </button>
          <button className="gradient-gold text-accent-foreground px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity whitespace-nowrap">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-lg border-l border-border">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center gap-2 px-4 mb-8">
                  <img src={logo} alt="Veretas Lumina" className="h-8 w-auto" />
                  <span className="font-serif text-lg font-bold text-foreground">Veretas Lumina</span>
                </div>

                <nav className="flex flex-col gap-2 px-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto px-4 pb-8 flex flex-col gap-3">
                  <button className="w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-3 rounded-xl hover:bg-muted/50">
                    Sign in
                  </button>
                  <button className="w-full gradient-gold text-accent-foreground px-5 py-3 rounded-xl text-base font-semibold shadow-soft hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
