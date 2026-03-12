import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rachel M.",
    role: "Small Group Leader",
    quote: "Selah has transformed how our small group studies together. The built-in Bible references and discussion features make it so easy to go deeper.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Seminary Student",
    quote: "The highlighting and note-taking features are incredible for study. I can organize my thoughts across multiple books seamlessly.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Working Professional",
    quote: "I listen to the audio versions during my commute and switch to reading at night. The synced progress is a game-changer for busy schedules.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Loved by Readers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-7 shadow-soft border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm font-sans leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm font-sans">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
