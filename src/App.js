// import components
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Properties from "./pages/Properties";
import SingleProperty from "./pages/SingleProperty";
import About from "./pages/About";
import Footer from "./components/Footer";

// import react Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
