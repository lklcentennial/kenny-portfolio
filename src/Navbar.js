
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm">
      <div className="container-lg">
      <Link className="navbar-brand text-danger fw-bold fs-4" to="/home">Kenny</Link>
        <div className="dropdown">
            <button className="btn btn-secondary btn-danger px-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={['fas', 'fa-bars']} />  
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li><a href="#home" className="dropdown-item">Home</a></li>
                <li><a href="#about" className="dropdown-item">About</a></li>
                <li><a href="#services" className="dropdown-item">Services</a></li>
                <li><a href="#projects" className="dropdown-item">Projects</a></li>
                <li><a href="#testimonials" className="dropdown-item">Testimonials</a></li>
                <li><a href="#contact" className="dropdown-item">Contact</a></li>
            </ul>
        </div>


        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                <FontAwesomeIcon icon={['fas', 'house-chimney-window']} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              <FontAwesomeIcon icon={['fas', 'fa-user']} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
              <FontAwesomeIcon icon={['fas', 'fa-diagram-project']} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
              <FontAwesomeIcon icon={['fas', 'fa-headphones']} /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              <FontAwesomeIcon icon={['fas', 'fa-address-book']} /> Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
