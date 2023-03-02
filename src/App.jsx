import Navbar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./View/Home/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ChangeForgetPassword" element={<ForgotPassword />} /> */}
      </Routes>
      {/* <Cards /> */}

      <Footer />
    </div>
  );
}

export default App;
