import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import MaterialGrid from "@/components/MaterialGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryBar />
      <MaterialGrid />
      <Footer />
    </div>
  );
};

export default Index;
