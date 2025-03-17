import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from "./Contact.jsx";
import Team from "./Team.jsx";
import Sponsers from "./Sponsers.jsx";
import Events from "./Events.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import NoSponsors from "./components/NoSponser.jsx";

const App = ()=>{
    return (
        <div>
        <Router>
            <Routes>
                <Route path="/faq" element={<Contact/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path = "/sponsers" element = {<NoSponsors/>}/>
                <Route path="/events" element = {<Events/>}/>
                <Route path="/" element = {<Home/>}/>
                <Route path="/about" element = {<About/>}/>
            </Routes>
        </Router>
        </div>
        
    )
}

export default App