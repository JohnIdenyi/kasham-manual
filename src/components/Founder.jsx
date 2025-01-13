import founder from "../assets/images/founder.png";

export default function Founder() {
  return (
    <section className="founder">
      <div className="container">
        <div className="founder__details flex justify-item">
          <div className="founder__text">
            <h3 className="founder__header founder--desktop">
              Meet our founder
            </h3>
            <p>
              Growing up in Nigeria, I witnessed firsthand the challenges that
              many face, from limited access to education and healthcare to the
              daily struggles of poverty and gender inequality. These
              experiences shaped my understanding of the profound impact that
              even small acts of empowerment can have on transforming lives.
              When I founded KGWYCD in 2016, it was with a clear vision: to
              create sustainable, community-driven solutions that uplift the
              most vulnerable members of society. Our mission is rooted in a
              deep commitment to addressing the root causes of social
              challenges—whether it's through health initiatives, education, or
              economic empowerment. For me, this journey is personal. I've seen
              the resilience of women who rise above adversity, the hope in the
              eyes of young people when given the chance to learn, and the
              strength of communities that come together to solve their own
              problems. This is why we continue to fight for a future where
              every girl, woman, and youth can achieve their full potential,
              free from the constraints of poverty and discrimination. KGWYCD is
              more than just an organization; it's a movement built on the
              belief that change is possible when we work together.
            </p>
            <p className="founder__bottom-text">Dinnatu Dama Maji</p>
          </div>
          <div>
            <h3 className="founder__header founder--mobile">
              Meet our founder
            </h3>
            <img src={founder} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
