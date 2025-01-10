import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import Vision from "../components/Vision";
import Beneficiaries from "../components/Beneficiaries";
import Founder from "../components/Founder";
import BoardAndTeam from "../components/BoardAndTeam";
import { aboutStats } from "../data";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Vision />
      <Beneficiaries stats={aboutStats} />
      <Founder />
      <BoardAndTeam />
    </>
  );
}
