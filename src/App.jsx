import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./View/Home/Home";
import { Route, Routes } from "react-router";
import Repositore from "./View/Repositore/Repositore";
import About from "./View/About/About";
import LandingPage from "./View/Landing/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Repositore" element={<Repositore />} /> 
        <Route path="/About" element={<About />} /> 
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
