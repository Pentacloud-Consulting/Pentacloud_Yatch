import Navbar from "@/Components/Navbar";
import Yatchhero from "@/Yatch/Yatchhero";
import HeroStats from "@/Yatch/HeroStats";
import CreaftedPerpection from "@/Yatch/CreaftedPerpection";
import Interactive from "@/Yatch/Interactive";
import Yatchlifestyle from "@/Yatch/Yatchlifestyle";
import Crafterdbeyound from "@/Yatch/Crafterdbeyound";
import Destination from "@/Yatch/Destination";
import Outfleet from "@/Yatch/Outfleet";
import Testimonials from "@/Yatch/Testimonials";
import CTA from "@/Yatch/CTA";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Yatchhero />
      <div className="light-theme">
        <Destination />
        <CreaftedPerpection />
        <HeroStats />
        <Interactive />
        <Yatchlifestyle />
        <Crafterdbeyound />
        <Outfleet />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}