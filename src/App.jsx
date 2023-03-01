import Navbar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./View/Home/Home";
import LandingPage from "./View/Landing/LandingPage";

import Cards from "./Components/Cards/Cards";
import Description from "./Components/Description/Description";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Cards />
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
