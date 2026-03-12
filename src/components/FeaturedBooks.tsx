import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import { Star } from "lucide-react";

const books = [
  {
    title: "Walking in Grace",
    author: "Sarah Mitchell",
    cover: bookCover1,
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    title: "Seasons of Devotion",
    author: "James Wright",
    cover: bookCover2,
    rating: 4.7,
    tag: "New Release",
  },
  {
    title: "Mountains of Faith",
    author: "David Chen",
    cover: bookCover3,
    rating: 4.8,
    tag: "Staff Pick",
  },
];

const FeaturedBooks = () => {
  return (
    <section id="books" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Curated Library</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Book Series</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Hand-picked series designed to deepen your understanding and strengthen your walk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {books.map((book, i) => (
            <div
              key={book.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="glass-card text-xs font-semibold px-3 py-1.5 rounded-lg font-sans text-foreground">
                    {book.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground font-sans mb-3">{book.author}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-foreground font-sans">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-card transition-all">
            Browse All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
