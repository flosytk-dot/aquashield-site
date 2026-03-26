import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Applications from "@/components/Applications";
import ColorLineup from "@/components/ColorLineup";
import Specifications from "@/components/Specifications";
import PurchaseGuide from "@/components/PurchaseGuide";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Problems />
        <Solutions />
        <Applications />
        <ColorLineup />
        <Specifications />
        <PurchaseGuide />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
