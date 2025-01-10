import ImpactHero from "../components/ImpactHero";
import Beneficiaries from "../components/Beneficiaries";
import ImpactStories from "../components/ImpactStories";
import ImpactHighlights from "../components/ImpactHighlights";
import { aboutStats } from "../data";

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <Beneficiaries stats={aboutStats} />
      <ImpactStories />
      <ImpactHighlights />
    </>
  );
}
