import { BookMarked } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookMarked className="h-6 w-6 text-accent" />
              <span className="font-serif text-lg font-bold">Selah</span>
            </div>
            <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed">
              A modern reading platform designed for believers who want to go deeper in their faith.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Platform</h4>
            <ul className="space-y-2.5">
              {["Library", "Study Groups", "Audiobooks", "Pricing"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40 font-sans">
            © 2026 Selah. All rights reserved. Made with love for the modern believer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
