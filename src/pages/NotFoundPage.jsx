import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <FaExclamationTriangle />
      <h1 className="">404 Not Found</h1>
      <p className="">This page does not exist</p>
      <Link to="/" className="">
        Go Back
      </Link>
    </section>
  );
}
