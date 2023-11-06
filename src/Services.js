import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

const Services = () => {
  return (
    <section className="services py-5" id="services">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">What I Do</h2>
            </div>
          </div>
        </div>
        <div className="row text-center">
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                    <div className="icon my-3 text-danger fs-2">
                        <FontAwesomeIcon icon={["fas", "fa-code"]} />
                    </div>
                    <h3 className="fs-5 py-2">Web Development</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur a</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                    <div className="icon my-3 text-danger fs-2">
                        <FontAwesomeIcon icon={["fas", "fa-lightbulb"]} />
                    </div>
                    <h3 className="fs-5 py-2">Programming</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur a</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                    <div className="icon my-3 text-danger fs-2">
                        <FontAwesomeIcon icon={["fas", "fa-info"]} />
                    </div>
                    <h3 className="fs-5 py-2">IT Support</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur a</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
