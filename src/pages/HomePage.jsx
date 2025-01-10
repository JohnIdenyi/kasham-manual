import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Beneficiaries from "../components/Beneficiaries";
import Agenda from "../components/Agenda";
import Initiative from "../components/Initiative";
import LatestUpdateListings from "../components/LatestUpdateListings";
import Video from "../components/Video";
import Community from "../components/Community";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import { homeStats } from "../data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Beneficiaries stats={homeStats} />
      <Agenda />
      <Initiative />
      <LatestUpdateListings isHome={true} />
      <Video />
      <Community />
      <Partners />
      <Testimonials />
    </>
  );
}
