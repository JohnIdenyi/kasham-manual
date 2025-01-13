import { Link } from "react-router-dom";
import "../animation.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="container">
        <div className="hero__section hero--animation">
          <div className="hero__mobile hero--animation"></div>
          <div className="hero__text">
            <h1 className="hero__header">
              Empowering Women, And Transforming Communities
            </h1>
            <p className="hero__desc">
              Join us in our mission to improve the lives of women, girls,
              youth, and communities in Nigeria
            </p>
            <div className="hero__buttons">
              <Link to="/about-us" className="btn btn-secondary">
                Learn More
              </Link>
              <Link to="/donate" className="btn btn-primary">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
