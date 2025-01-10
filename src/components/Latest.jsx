import latest1 from "../assets/images/latest-1.png";
import latest2 from "../assets/images/latest-2.png";
import latest3 from "../assets/images/latest-3.png";

export default function Latest() {
  return (
    <section className="latest">
      <div className="container">
        <h3 className="latest__header">Latest on Kasham</h3>
        <div className="latest__cards flex">
          <div className="latest__card">
            <img src={latest1} alt="" />
            <div className="latest__card-text">
              <p className="latest__subheader">Kasham</p>
              <p>
                KGWYCD Launches New Education Initiative in Northern Nigeria
              </p>
              <div className="latest__date flex justify-item align-center">
                <span>Project Update</span>
                <span>22nd Aug 2024</span>
              </div>
            </div>
          </div>
          <div className="latest__card">
            <img src={latest2} alt="" />
            <div className="latest__card-text">
              <p className="latest__subheader">Kasham</p>
              <p>
                KGWYCD Launches New Education Initiative in Northern Nigeria
              </p>
              <div className="latest__date flex justify-item align-center">
                <span>Project Update</span>
                <span>22nd Aug 2024</span>
              </div>
            </div>
          </div>
          <div className="latest__card">
            <img src={latest3} alt="" />
            <div className="latest__card-text">
              <p className="latest__subheader">Kasham</p>
              <p>
                KGWYCD Launches New Education Initiative in Northern Nigeria
              </p>
              <div className="latest__date flex justify-item align-center">
                <span>Project Update</span>
                <span>22nd Aug 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
