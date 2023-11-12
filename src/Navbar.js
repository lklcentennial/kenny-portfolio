
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm">
      <div className="container-lg">
      <a className="navbar-brand text-danger fw-bold fs-4" href="#home">Kenny</a>
        {/* <div className="dropdown">
            <button className="btn btn-secondary btn-danger px-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={['fas', 'fa-bars']} />  
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li><a href="#home" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'house-chimney-window']} />&nbsp;Home</a></li>
                <li><a href="#about" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'fa-user']} />&nbsp; About</a></li>
                <li><a href="#services" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'fa-headphones']} />&nbsp; Services</a></li>
                <li><a href="#projects" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'fa-diagram-project']} />&nbsp; Projects</a></li>
                <li><a href="#testimonials" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'fa-comment']} />&nbsp; Testimonials</a></li>
                <li><a href="#contact" className="dropdown-item"><FontAwesomeIcon icon={['fas', 'fa-address-book']} />&nbsp; Contact</a></li>
            </ul>
        </div> */}


        <button
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
              <a className="nav-link active" aria-current="page" href="#home">
                <FontAwesomeIcon icon={['fas', 'house-chimney-window']} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
              <FontAwesomeIcon icon={['fas', 'fa-user']} /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
              <FontAwesomeIcon icon={['fas', 'fa-headphones']} /> Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
              <FontAwesomeIcon icon={['fas', 'fa-diagram-project']} /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
              <FontAwesomeIcon icon={['fas', 'fa-headphones']} /> Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
              <FontAwesomeIcon icon={['fas', 'fa-address-book']} /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
