import LatestUpdate from "./latestUpdate";
import Spinner from "./Spinner";
import blogs from "../services/blogs.json";

export default function LatestUpdateListings({ isHome = false }) {
  const blogsRecent = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section className={isHome ? "latest" : "latest--blog"}>
      <div className="container">
        <h3 className="latest__header">
          {isHome ? "Latest on Kasham" : "All blog posts"}
        </h3>
        <div className="latest__cards ">
          {blogsRecent.map((item) => {
            return <LatestUpdate key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
