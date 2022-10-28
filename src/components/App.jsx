import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Portfolio from "./Portfolio";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";


function App(){
    return(
        <div>
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/portfolio" element={<Portfolio />} exact />
                    <Route path="/about" element={<About />} exact /> 
                    <Route path="/contact" element={<Contact/>} exact />
                </Routes>
            </Router>
        </div>
        
    )
    
}

export default App;