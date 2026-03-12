import { BookOpen, Highlighter, Users, Headphones, BookMarked, MessageCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Immersive Reading",
    description: "Beautiful, distraction-free reading interface with adjustable fonts, themes, and layout for hours of comfortable study.",
  },
  {
    icon: BookMarked,
    title: "Tap Bible Refs",
    description: "Every Bible reference is interactive — tap to instantly view the verse in context without leaving your page.",
  },
  {
    icon: Highlighter,
    title: "Highlights & Notes",
    description: "Mark passages with color-coded highlights and add personal notes that sync across all your devices.",
  },
  {
    icon: Headphones,
    title: "Audio Narration",
    description: "Listen to professionally narrated audiobook versions, perfect for commutes, workouts, or bedtime.",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Join or create study groups to read together, share insights, and discuss chapters with fellow believers.",
  },
  {
    icon: MessageCircle,
    title: "Discussions",
    description: "Engage in thoughtful discussions on every chapter, share reflections, and learn from diverse perspectives.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Platform Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Everything You Need to Grow</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Built for deep reading, meaningful study, and authentic community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-7 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
