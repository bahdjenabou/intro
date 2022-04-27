import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import GenerateNumber from "./pages/GenerateNumber";
import { Routes, Route } from "react-router-dom";
import GenerateFood from "./pages/GenerateFood";
import GenerateD from "./pages/GenerateD";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<GenerateNumber />} />
          <Route path="/food" element={<GenerateFood />} />
          <Route path="/dice" element={<GenerateD />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
