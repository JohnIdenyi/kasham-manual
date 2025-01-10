import ImpactStoryCard from "./ImpactStoryCard";
import { impactDetails } from "../data";

export default function ImpactStories({ img, text }) {
  return (
    <section className="impact-stories">
      <div className="impact-stories__cards">
        {impactDetails.map((item, index) => {
          return <ImpactStoryCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
