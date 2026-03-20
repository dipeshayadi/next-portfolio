import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#121212]">
      {/* 
        This wrapper holds the 500vh ScrollyCanvas and the Overlay.
        They share the same scroll space.
      */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* 
        The Projects grid is rendered naturally after the 500vh scroll container ends.
      */}
      <Projects />
      

      
      <Footer />
    </main>
  );
}
