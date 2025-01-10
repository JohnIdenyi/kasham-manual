import aboutHero from "../assets/images/about-hero.png";

export default function AboutHero() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about__header">
          Together, we create lasting change in the lives of girls, women,
          youth, and communities across Nigeria.
        </h1>
        <img src={aboutHero} alt="" />
      </div>
    </section>
  );
}
