const Projects = () => {
  return (
    <section className="projects py-5" id="projects">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="projects-item">
                    <img src="images/ecommerce.jpg" alt="projects item" className="w-100 img-thumbnail" />
                    <h3 className="text-capitalize fs-5 my-2">ShopGenuis</h3>
                    <p className="mb-4"><a href="" className="text-danger text-decoration-none">Live Demo</a></p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="projects-item">
                    <img src="images/freelance.jpeg" alt="projects item" className="w-100 img-thumbnail" />
                    <h3 className="text-capitalize fs-5 my-2">PayRider</h3>
                    <p className="mb-4"><a href="" className="text-danger text-decoration-none">Live Demo</a></p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="projects-item">
                    <img src="images/blog.jpeg" alt="projects item" className="w-100 img-thumbnail" />
                    <h3 className="text-capitalize fs-5 my-2">Blog</h3>
                    <p className="mb-4"><a href="" className="text-danger text-decoration-none">Live Demo</a></p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
