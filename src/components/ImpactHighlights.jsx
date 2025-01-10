import { Link } from "react-router-dom";
import highlightImg1 from "../assets/images/highlight-1.png";
import highlightImg2 from "../assets/images/highlight-2.png";
import highlightImg3 from "../assets/images/highlight-3.png";

export default function ImpactHighlights() {
  return (
    <section className="highlight">
      <div className="highlight__card">
        <div className="highlight__text-container">
          <p className="highlight__header">Impact stories</p>
          <p className="highlight__desc">
            Through our Medical Outreach initiative, we've reached several
            remote communities, providing over 5,000 people with access to
            essential healthcare services.
          </p>
        </div>
        <img className="highlight__image" src={highlightImg1} alt="" />
      </div>
      <div className="highlight__card">
        <div className="highlight__text-container highlight--order-2">
          <p className="highlight__header">Impact stories</p>
          <p className="highlight__desc">
            Our Youth Leadership program has empowered over 1,000 young people
            to take active roles in their communities.
          </p>
        </div>
        <img className="highlight__image" src={highlightImg2} alt="" />
      </div>
      <div className="highlight__card">
        <div className="highlight__text-container">
          <p className="highlight__header">Impact stories</p>
          <p className="highlight__desc">
            "Reaching the under-reached, our initiative has made a significant
            impact by delivering essential services and support to street
            hawkers. We're ensuring this underserved group gains access to
            opportunities, resources, and a brighter future
          </p>
        </div>
        <img className="highlight__image" src={highlightImg3} alt="" />
      </div>

      <div className="community__texts community--margin">
        <p className="community__desc highlight--community">
          Join our community for donating and be a part of a positive change
        </p>
        <Link to="/donate" className="btn btn-primary community__btn">
          Donate now
        </Link>
      </div>
    </section>
  );
}
