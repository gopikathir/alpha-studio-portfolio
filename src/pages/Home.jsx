import Hero from "../components/Hero/Hero";
import FeaturedGallery from "../components/FeaturedGallery/FeaturedGallery";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedGallery />
      <ServicesPreview />
      <WhyChoose />
      <CTA />
    </>
  );
}

export default Home;
