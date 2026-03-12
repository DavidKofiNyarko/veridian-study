import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import AudioSection from "@/components/AudioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <FeaturesSection />
      <CommunitySection />
      <AudioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
