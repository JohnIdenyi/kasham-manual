import { useLocation } from "react-router-dom";

export default function Beneficiaries({ stats }) {
  const { pathname } = useLocation();

  return (
    <section className="benefits">
      <div className="container">
        {pathname !== "/" ? (
          <h3 className="benefits__header">Key Achievements</h3>
        ) : null}
        <div className="benefits__cards flex justify-item">
          {stats.map((stat, index) => {
            return (
              <div className="benefits__card" key={index}>
                <img src={stat.statsImage} alt="" />
                <p className="benefits__desc">{stat.statsHeader}</p>
                <p className="benefits__number">{stat.statsNumber}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
