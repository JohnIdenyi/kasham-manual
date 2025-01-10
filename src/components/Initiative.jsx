import youth from "../assets/images/youth.png";
import { impactDetails, initiatives } from "../data";
import ImpactStoryCard from "./ImpactStoryCard";

export default function Initiative() {
  return (
    <section className="initiative">
      <div className="container">
        <div className="initiative__cards flex">
          {initiatives.map((item, index) => {
            return (
              <div className="initiative__card" key={index}>
                <img className="initiative__image" src={item.image} alt="" />
                <p className="initiative__text">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="youth flex align-center justify-item">
          <div className="text-container">
            <h3>Empowering Youth: Building Tomorrow's Leaders</h3>
            <p>
              The youth are the backbone of our future, and at KGWYCDI, we are
              committed to equipping them with the tools and opportunities they
              need to thrive. Our youth-focused programs are designed to foster
              leadership, provide education, and create pathways to economic
              independence, ensuring that young people can contribute
              meaningfully to their communities.
            </p>
            <div className="key">
              <p>Key Initiatives:</p>
              <ul>
                <li>Youth Leadership Programs</li>
                <li>Educational Support</li>
                <li>Vocational Training and Entrepreneurship</li>
              </ul>
            </div>
          </div>
          <div className="img-container">
            <img src={youth} alt="" />
          </div>
        </div>
      </div>
      <div className="impact-stories">
        <ImpactStoryCard {...impactDetails[0]} />
      </div>
    </section>
  );
}
