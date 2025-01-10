import colors from "../assets/images/colors.png";
import meeting from "../assets/images/meeting.png";

export default function Agenda() {
  return (
    <section>
      <div className="container">
        <div className="agenda flex justify-item align-center">
          <div className="agenda__textSection flex">
            <img className="agenda__colors" src={colors} alt="" />
            <div className="agenda__texts">
              <p>K - Knowledge and Education</p>
              <p>G - Gender Equity and Empowerment</p>
              <p>W - Water and Sanitation</p>
              <p>Y - Youth Development and Leadership</p>
              <p>C - Community Building and Support</p>
              <p>D - Diversity and Inclusion</p>
              <p>I - Innovation and Impact</p>
            </div>
          </div>
          <div>
            <img src={meeting} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
