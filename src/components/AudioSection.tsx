import { Headphones, Play, SkipForward, Volume2 } from "lucide-react";

const AudioSection = () => {
  return (
    <section id="audio" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Audiobooks</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Listen Anywhere, Anytime</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Every book in our library comes with a professionally narrated audio version. 
              Switch seamlessly between reading and listening — your progress stays in sync.
            </p>
            <div className="space-y-4">
              {["Professional narration by trusted voices", "Adjustable playback speed", "Background listening support", "Synced progress with reading"].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-foreground font-sans">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audio player mockup */}
          <div className="glass-card rounded-3xl p-8 shadow-elevated">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center shadow-card">
                <Headphones className="h-10 w-10 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Walking in Grace</h3>
                <p className="text-sm text-muted-foreground font-sans">Chapter 4 — Letting Go</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">Narrated by Emily Carter</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-gold rounded-full" style={{ width: "42%" }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground font-sans">12:34</span>
                <span className="text-xs text-muted-foreground font-sans">29:18</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward className="h-5 w-5 rotate-180" />
              </button>
              <button className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-card hover:opacity-90 transition-opacity">
                <Play className="h-6 w-6 text-accent-foreground ml-0.5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
