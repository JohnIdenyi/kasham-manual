import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

export default function Hamburger({ menu, setMenu }) {
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menu]);

  return !menu ? (
    <div className="hamburger" onClick={() => setMenu(true)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  ) : (
    <div className="mobile__nav">
      <div className="flex justify-item align-center">
        <div className="nav__logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="mobile__nav-exit" onClick={() => setMenu(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
              fill="#F8F8F8"
            />
          </svg>
        </div>
      </div>

      <ul className="mobile__nav-lists">
        <li>
          <NavLink
            className="nav__link mobile__nav-link"
            to="/"
            onClick={() => setMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link mobile__nav-link"
            to="/about-us"
            onClick={() => setMenu(false)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link mobile__nav-link"
            to="/impact"
            onClick={() => setMenu(false)}
          >
            Impact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link mobile__nav-link"
            to="/blogs"
            onClick={() => setMenu(false)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link mobile__nav-link"
            to="/contact-us"
            onClick={() => setMenu(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            className="nav__btn nav--mobile-btn btn btn-primary"
            onClick={() => setMenu(false)}
          >
            Donate
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
