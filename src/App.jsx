import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useSelector, useDispatch } from "react-redux";

import Project from "./pages/Project.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";

function App() {

    const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`App app ${mode}`}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
