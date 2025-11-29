import Herosection from './components/Herosection';
import FeaturesSection from "./components/FeaturesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import PricingSection from "./components/PricingSection"
import  FooterSection  from './components/FooterSection';
export default function Home() {
  return (
    <main>
      <Herosection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}


