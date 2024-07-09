import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Qualification from './components/qualification/qualification';
import Certifications from './components/Certifications/certifications';
import Experience from './components/Experience/experience';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Qualification/>
      <Certifications/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
