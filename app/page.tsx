import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import TherapyAreas from "@/components/TherapyAreas";
import InfoBlocks from "@/components/InfoBlocks";
import TeamSection from "@/components/TeamSection";
import Affiliations from "@/components/Affiliations";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <FeatureSection />
      <TherapyAreas />
      <InfoBlocks />
      <TeamSection />
      <Affiliations />
    </div>
  );
}
