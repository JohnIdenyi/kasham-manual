import { Link } from "react-router-dom";

export default function LatestUpdate({ id, image, description }) {
  return (
    <div className="latest__card">
      <img className="latest__image" src={image} alt="" />
      <div className="latest__card-text">
        <p>{description}</p>
        <div className="latest__date flex justify-item align-center">
          <span>Project Update</span>
          <Link to={`/blogs/${id}`} className="latest__link">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
