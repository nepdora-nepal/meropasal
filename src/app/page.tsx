import FeaturedDrops from "@/components/home/featured-drops";
import FeatureGrid from "@/components/home/featured-grid";
import Hero from "@/components/home/home-hero";
import NewDrops from "@/components/home/new-drops";
import ValueProps from "@/components/home/our-values";
import ProductHighlight from "@/components/home/product-highlight";
import StorySection from "@/components/home/story-section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <NewDrops />
      <FeatureGrid />
      <StorySection />
      <FeaturedDrops />
      <ProductHighlight />
      <ValueProps />
    </>
  );
};

export default HomePage;
