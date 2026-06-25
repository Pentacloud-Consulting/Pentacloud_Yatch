import Navbar from "@/Components/Navbar";
import Yatchhero from "@/Yatch/Home/Yatchhero";
import HeroStats from "@/Yatch/Home/HeroStats";
import CreaftedPerpection from "@/Yatch/Home/CreaftedPerpection";
import Interactive from "@/Yatch/Home/Interactive";
import Yatchlifestyle from "@/Yatch/Home/Yatchlifestyle";
import Crafterdbeyound from "@/Yatch/Home/Crafterdbeyound";
import Destination from "@/Yatch/Home/Destination";
import Outfleet from "@/Yatch/Home/Outfleet";
import Testimonials from "@/Yatch/Home/Testimonials";
import CTA from "@/Yatch/Home/CTA";
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