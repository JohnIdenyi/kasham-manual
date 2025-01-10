import { Link } from "react-router-dom";

export default function Community() {
  return (
    <section className="community">
      <div className="container">
        <div className="community__map">
          <div className="community__texts">
            <p className="community__desc">
              Join our community for donating and be a part of a positive change
            </p>
            <Link to="/donate" className="btn btn-primary community__btn">
              Support our course
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
