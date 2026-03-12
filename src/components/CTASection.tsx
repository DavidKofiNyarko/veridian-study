const CTASection = () => {
  return (
    <section className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of modern believers reading, studying, and growing together. 
            Your first book is on us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="gradient-gold text-accent-foreground px-10 py-4 rounded-2xl text-base font-semibold shadow-card hover:opacity-90 transition-all hover:shadow-elevated">
              Create Free Account
            </button>
            <button className="bg-card text-foreground px-10 py-4 rounded-2xl text-base font-semibold shadow-soft border border-border hover:shadow-card transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
