import Navbar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";
import Description from "./Components/Description/Description";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Description />
      <Cards />
      <Footer/>
      
    </div>
  );
}

export default App;
