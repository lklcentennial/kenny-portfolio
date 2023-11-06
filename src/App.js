import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Freelancer from './Freelancer';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        
        <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/home' element={<Home />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/projects' element={<Projects />}/>
            <Route exact path='/services' element={<Services />}/>
            <Route exact path='/contact' element={<Contact />}/>
            <Route exact path='*' element={<Home />}/>
          </Routes>
        </Router>
        <About />
        <Services />
        <Projects />
        <Freelancer />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
