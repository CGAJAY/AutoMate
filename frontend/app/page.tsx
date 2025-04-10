import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesWeOffer from './components/ServicesWeOffer';
import AIAssistantPreview from './components/AIAssistantPreview';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyChooseUs />
      <ServicesWeOffer />
      <AIAssistantPreview />
    </div>
  );
}
