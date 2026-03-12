import { BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-warm" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-slide-up">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 font-sans">
              A Modern Reading Experience
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
              Read, Study &<br />
              <span className="text-gradient-gold">Grow in Faith</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 font-sans leading-relaxed">
              Dive into curated Christian book series with built-in Bible references, 
              audio narration, study groups, and a beautiful reading experience designed 
              for the modern believer.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="gradient-gold text-accent-foreground px-8 py-4 rounded-2xl text-base font-semibold shadow-card hover:opacity-90 transition-all hover:shadow-elevated">
                Start Reading Free
              </button>
              <button className="bg-card text-foreground px-8 py-4 rounded-2xl text-base font-semibold shadow-soft border border-border hover:shadow-card transition-all">
                Explore Library
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "500+", label: "Books" },
                { value: "12K+", label: "Readers" },
                { value: "200+", label: "Study Groups" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in-slow hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Books, coffee and reading glasses on a warm linen surface with golden morning light"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-sans">Currently Reading</p>
                  <p className="text-xs text-muted-foreground font-sans">Chapter 4 of 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
