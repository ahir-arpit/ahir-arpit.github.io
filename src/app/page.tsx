import MainWrapper from "@/components/MainWrapper";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main id="home" className="bg-transparent min-h-screen">
      <Navbar />
      {/* The Scrollytelling Sequence */}
      <MainWrapper />

      {/* The Work Grid */}
      <Projects />

      {/* Tools and Technology */}
      <TechStack />

      {/* Custom Contact Footer */}
      <Footer />
    </main>
  );
}
