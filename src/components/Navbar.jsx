import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const threshold = 100;

    if (scrollHeight > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const showIsActiveLink = ({ isActive }) => {
    return isActive ? "nav__link nav--active" : "nav__link";
  };

  return (
    <nav className={`nav ${scrolled ? "nav--fixed" : ""}`}>
      <div className="container">
        <div className="flex justify-item align-center">
          <div className="nav__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="nav__lists flex align-center">
            <li>
              <NavLink to="/" className={showIsActiveLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={showIsActiveLink}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/impact" className={showIsActiveLink}>
                Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={showIsActiveLink}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={showIsActiveLink}>
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink to="/donate" className="nav__btn btn btn-primary">
            Donate
          </NavLink>
          <Hamburger menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </nav>
  );
}
