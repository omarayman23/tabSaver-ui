import { Hero } from "./Hero";
import { Features } from "./Features";
import { Stats } from "./Stats";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

