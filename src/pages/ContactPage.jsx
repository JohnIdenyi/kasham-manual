import { useState } from "react";
import { toast } from "react-toastify";
import contactImage from "../assets/images/contact.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    check: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for your message. It has been sent");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      check: false,
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="flex justify-item">
          <div className="contact__text-container">
            <h1 className="contact__header">Get In touch</h1>
            <p className="contact__desc">
              Our friendly team would love to hear from you.
            </p>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__name flex">
                <div>
                  <label className="contact__label" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    className="contact__input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="contact__label" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    className="contact__input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="contact__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="contact__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="contact__textarea"
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex align-center">
                <input
                  className="contact__input-check"
                  type="checkbox"
                  id="check"
                  name="check"
                  required
                  value={formData.check}
                  onChange={handleChange}
                />
                <label className="contact__label-check" htmlFor="check">
                  You agree to our friendly privacy policy.
                </label>
              </div>
              <button className="contact__btn" type="submit">
                Send message
              </button>
            </form>
          </div>
          <div className="contact__image">
            <img src={contactImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
