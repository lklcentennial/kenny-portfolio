import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

const Testimonials = () => {
  return (
    <section className="testimonials py-5" id="testimonials">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div
              id="carousel1"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="0"
                  className="active bg-danger"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className="bg-danger"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  className="bg-danger"
                ></button>
              </div>

              <div class="carousel-inner p-1">
                {/* testi item start */}
                <div className="testi-item carousel-item active bg-white shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="images/11.jpeg"
                      alt="author img"
                      className="img-thumbnail rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Raj Himachal</h3>
                      <p className="text-muted m-0">Seo Manager</p>
                    </div>
                  </div>
                  <p className="text-muted mt-3">
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat
                  </p>
                  <div className="rating text-danger">
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                  </div>
                </div>
                {/* testi item end */}

                {/* testi item start */}
                <div className="testi-item carousel-item bg-white shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="images/22.jpeg"
                      alt="author img"
                      className="img-thumbnail rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Raj Himachal</h3>
                      <p className="text-muted m-0">Seo Manager</p>
                    </div>
                  </div>
                  <p className="text-muted mt-3">
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat
                  </p>
                  <div className="rating text-danger">
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                  </div>
                </div>
                {/* testi item end */}

                {/* testi item start */}
                <div className="testi-item carousel-item bg-white shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="images/33.jpeg"
                      alt="author img"
                      className="img-thumbnail rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Raj Himachal</h3>
                      <p className="text-muted m-0">Seo Manager</p>
                    </div>
                  </div>
                  <p className="text-muted mt-3">
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat
                  </p>
                  <div className="rating text-danger">
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                    <FontAwesomeIcon icon={["fas", "fa-star"]} />
                  </div>
                </div>
                {/* testi item end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
