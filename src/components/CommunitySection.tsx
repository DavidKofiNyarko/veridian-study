import { MessageCircle, Heart, Clock } from "lucide-react";

const discussions = [
  {
    user: "Grace T.",
    avatar: "G",
    group: "Walking in Grace — Ch. 4",
    message: "The part about surrendering control really spoke to me. I've been holding on too tightly to my plans instead of trusting God's timing.",
    likes: 24,
    replies: 8,
    time: "2h ago",
  },
  {
    user: "Marcus L.",
    avatar: "M",
    group: "Mountains of Faith — Ch. 7",
    message: "Does anyone else find the connection between Abraham's journey and our modern struggles so powerful? I highlighted so many passages this chapter.",
    likes: 31,
    replies: 12,
    time: "4h ago",
  },
  {
    user: "Abigail R.",
    avatar: "A",
    group: "Seasons of Devotion — Ch. 2",
    message: "Starting this book with my small group next week. The discussion questions at the end of each chapter are incredible.",
    likes: 18,
    replies: 5,
    time: "6h ago",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Community</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Conversation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Connect with thousands of readers sharing insights, reflections, and encouragement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {discussions.map((d, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-accent-foreground font-sans">{d.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground text-sm font-sans">{d.user}</span>
                    <span className="text-xs text-muted-foreground font-sans">in</span>
                    <span className="text-xs font-medium text-accent font-sans">{d.group}</span>
                  </div>
                  <p className="text-foreground/80 text-sm font-sans leading-relaxed mb-3">{d.message}</p>
                  <div className="flex items-center gap-5">
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors">
                      <Heart className="h-3.5 w-3.5" />
                      <span className="text-xs font-sans">{d.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span className="text-xs font-sans">{d.replies}</span>
                    </button>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs font-sans">{d.time}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
