import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">About Me</h2>
            </div>
          </div>
        </div>

        {/* <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div className="section-title text-center">
              <div className="about-text">
                <h3 className="fs-4 mb-3">
                  I'm{" "}
                  <span className="text-danger fs-4 fw-bold">Ka Lam LEE</span> ,
                  a Full Stack IT Specialist
                </h3>
                <p className="text-muted">
                  A savvy IT wizard who can code, IP network, and administrate
                  system. <br />A curious and creative problem solver who
                  thrives on new challenges and opportunities.
                </p>
              </div>
              <div className="row text-center text-uppercase my-3">
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">8+</h4>
                    <p className="text-muted">Years Experience</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">30+</h4>
                    <p className="text-muted">Projects Completed</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">95</h4>
                    <p className="text-muted">Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                  <a
                    href="resume.pdf"
                    target="_blank"
                    className="btn btn-danger px-3 me-3"
                  >
                    <FontAwesomeIcon icon={["far", "fa-file-pdf"]} /> My Resume
                  </a>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/kenny-lkl/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "fa-linkedin-in"]} />
                    </a>
                    &nbsp;
                    <a href="https://github.com/lklcentennial" target="_blank">
                      <FontAwesomeIcon icon={["fab", "fa-github"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h3 className="fs-4 mb-3">
                I'm <span className="text-danger fs-4 fw-bold">Ka Lam LEE</span>{" "}
                , a Full Stack IT Specialist
              </h3>
              <p className="text-muted">
                A savvy IT wizard who can code, IP network, and administrate
                system. <br />A curious and creative problem solver who thrives
                on new challenges and opportunities.
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">8+</h4>
                  <p className="text-muted">Years Experience</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">30+</h4>
                  <p className="text-muted">Projects Completed</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">95</h4>
                  <p className="text-muted">Positive Reviews</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center">
                <a
                  href="Portfolio Resume.pdf"
                  target="_blank"
                  className="btn btn-danger px-3 me-3"
                >
                  <FontAwesomeIcon icon={["far", "fa-file-pdf"]} /> My Resume
                </a>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/kenny-lkl/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "fa-linkedin-in"]} />
                  </a>
                  &nbsp;
                  <a href="https://github.com/lklcentennial" target="_blank">
                    <FontAwesomeIcon icon={["fab", "fa-github"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="skill-item my-4">
              <h3 className="fs-6">IP Networking</h3>
              <div class="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item my-4">
              <h3 className="fs-6">Software Engineering</h3>
              <div class="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item my-4">
              <h3 className="fs-6">System</h3>
              <div class="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/* <div className="skill-item mb-4">
              <h3 className="fs-6">BootStrap</h3>
              <div class="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
