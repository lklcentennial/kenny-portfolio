import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateMailtoLink = () => {
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    return `mailto:kennyli0023@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <FontAwesomeIcon icon={["fas", "fa-envelope"]} />
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Email</h3>
                <p className="text-muted">kennyli0023@gmail.com</p>
              </div>
            </div>
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <FontAwesomeIcon icon={["fas", "fa-phone"]} />
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Phone</h3>
                <p className="text-muted">1 647 216 ****</p>
              </div>
            </div>
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <FontAwesomeIcon icon={["fab", "fa-linkedin-in"]} />
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Linkedin</h3>
                <p className="text-muted">
                  https://www.linkedin.com/in/kenny-lkl/
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <a
                      href={generateMailtoLink()}
                      className="btn btn-danger px-3"
                      target="_blank"
                    >
                      Send
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
