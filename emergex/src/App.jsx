
import './App.css';
import About from './components/About';
import Comrade from './components/Comrade';
 
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Introloader from './components/Introloader';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Objectives from './components/Objectives';
import Partner from './components/Partner';
 
import Traction from './components/Traction';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
// import Aboutd from '../public/Aboutd';


function App() {
  // Function to check if the device is mobile
  const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <ReactLenis root>
      <div>
        <Introloader />
        <div>
          <Navbar />
          <LandingPage />
          <About />
          <Traction />
          <Partner />
          <Objectives />
          <Comrade/>
          <Gallery />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
