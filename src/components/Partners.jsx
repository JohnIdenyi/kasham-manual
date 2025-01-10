import { useEffect, useRef } from "react";
import partner1 from "../assets/images/partners/partner1.png";
import partner2 from "../assets/images/partners/partner2.png";
import partner3 from "../assets/images/partners/partner3.png";
import partner4 from "../assets/images/partners/partner4.png";
import partner5 from "../assets/images/partners/partner5.png";
import partner6 from "../assets/images/partners/partner6.png";
import partner7 from "../assets/images/partners/partner7.png";
import partner8 from "../assets/images/partners/partner8.png";
import partner9 from "../assets/images/partners/partner9.png";
import partner10 from "../assets/images/partners/partner10.png";
import partner11 from "../assets/images/partners/partner11.png";
import partner12 from "../assets/images/partners/partner12.png";
import partner13 from "../assets/images/partners/partner13.png";
import partner14 from "../assets/images/partners/partner14.png";
import partner15 from "../assets/images/partners/partner15.png";
import partner16 from "../assets/images/partners/partner16.png";
import partner17 from "../assets/images/partners/partner17.png";
import partner18 from "../assets/images/partners/partner18.png";

export default function Partners() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (slider) {
        scrollAmount += 1; // Adjust speed here
        if (scrollAmount >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          slider.scrollLeft = scrollAmount;
        }
      }
    };

    const interval = setInterval(slide, 20); // Adjust interval for smoothness
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="partners">
      <div className="container">
        <h3 className="partners__header">Our Partners</h3>
        <div className="partners__images flex align-center" ref={sliderRef}>
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner5} alt="" />
          <img src={partner6} alt="" />
          <img src={partner7} alt="" />
          <img src={partner8} alt="" />
          <img src={partner9} alt="" />
          <img src={partner10} alt="" />
          <img src={partner11} alt="" />
          <img src={partner12} alt="" />
          <img src={partner13} alt="" />
          <img src={partner14} alt="" />
          <img src={partner15} alt="" />
          <img src={partner16} alt="" />
          <img src={partner17} alt="" />
          <img src={partner18} alt="" />
        </div>
      </div>
    </section>
  );
}
