import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.png";

export default function Mission() {
  return (
    <section className="mission">
      <div className="container">
        <h3 className="mission__header">Driving Change, Empowering Lives</h3>
        <div className="mission__cards">
          <div className="mission__card card--1">
            <p>Health</p>
            <h4>Support their health</h4>
          </div>
          <div className="mission__card card--2">
            <p className="card--2_text">
              Let's join hands together and put a smile on their face
            </p>
            <div className="hands-image"></div>
          </div>
          <div className="mission__card card--3">
            <p>Lifestyle</p>
            <h4>Help give them better lives</h4>
          </div>
          <div className="mission__card card--4">
            <p>Culture</p>
            <h4>The hope for a better future</h4>
          </div>
          <div className="mission__card card--5">
            <p>Join 1000+ people to Donate</p>
            <Link to="/donate" className="mission__donate flex justify-item">
              <p>Donate Now</p>
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="mission__card card--6">
            <p>Education</p>
            <h4>Sponsor Kids in Education</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
