import Hero from "@/components/hero/Hero";
import Faq from "@/components/faq/Faq";
import IntroNarrative from "@/components/hero/IntroNarrative";
import ImageCta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/cta/Cta";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <IntroNarrative />
      <Faq /> 
      {/* <CTA/> */}
      <Footer />
     
    </main>
  );
}
