import { useParams } from "react-router-dom";
import SocialMediaLinks from "../components/SocialMediaLinks";
import blogs from "../services/blogs.json";

export default function BlogPage() {
  const { id } = useParams();

  const blog = blogs.filter((item) => {
    return item.id === id;
  });

  console.log(blog);

  return (
    <section className="blog-single">
      <div className="container">
        <div className="blog-single__hero flex justify-item align-center">
          <h2 className="blog-single__hero-header">News</h2>
          <p className="blog-single__hero-desc">{blog[0].description}</p>
        </div>
        <img src={blog[0].coverPhoto} alt="" />
        <h1 className="blog-single__header">{blog[0].title}</h1>
        <div className="blog-single__desc-container">
          {blog[0].detailTexts.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <SocialMediaLinks />
    </section>
  );
}
