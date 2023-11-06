const Home = () => {
    return (
        <section className="home py-5" id="home">
            <div className="container-lg">
                <div className="row min-vh-100 align-item-center align-content-center">
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="home-img text-center">
                            <img src="images/myself1.png" className="rounded-circle mw-100" alt="profile" width="450" height="450"/>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 order-md-first d-flex align-items-center">
                        <div className="home-text ">
                            <p className="text-muted mb-1">Hello I'm</p>
                            <h1 className="text-danger text-uppercase fs-1 fw-bold">Programmer</h1>
                            <h2 className="fs-4">Kenny LEE</h2>
                            <p className="mt-4 text-muted">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#projects" className="btn btn-danger px-3 mt-3">My Projects</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        
    );
}
 
export default Home;