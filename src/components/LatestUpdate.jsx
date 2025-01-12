import { Link } from "react-router-dom";

export default function LatestUpdate({ id, image, description, date }) {
  return (
    <div className="latest__card">
      <img src={image} alt="" />
      <div className="latest__card-text">
        <p>{description}</p>
        <div className="latest__date flex justify-item align-center">
          <Link to={`/blogs/${id}`} className="latest__link">
            Read More
          </Link>
          {/* <span>{date}</span> */}
        </div>
      </div>
    </div>
  );
}
