import './App.css';
import ContactUs from './Components/ContactUs';
import ExpertPanel from './Components/ExpertPanel';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';
import OnlineModeSection from './Components/OnlineModeSection';
import ProductShowcase from './Components/ProductShowcase';
import Services from './Components/Services';
import { Testomonial } from './Components/Testomonial';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HeroSection/>
        <Services/>
        <ProductShowcase/>
        <OnlineModeSection/>
        <Testomonial/>
        <ExpertPanel/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
