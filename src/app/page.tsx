
import HeroSection from "@/components/HeroSeciton";
import AboutUs from "@/components/AboutUs";
const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">

      <HeroSection />
      <AboutUs />
    </section>
  );
};

export default HomePage;
