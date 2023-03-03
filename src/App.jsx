import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./View/Home/Home";
import { Route, Routes } from "react-router";
import Repositore from "./View/Repositore/Repositore";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repositore" element={<Repositore />} /> 
      </Routes>
      {/* <Cards /> */}

      <Footer />
    </div>
  );
}

export default App;
