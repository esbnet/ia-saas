import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navibar";

export default function LandingPage() {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
