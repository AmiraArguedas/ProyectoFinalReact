import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "../Pages/Main"
import AboutUs from '../Pages/AboutUs';
import Services from '../Pages/Servicies';
import Contact from "../Pages/Contact"
import Alianzas from "../Pages/Alianzas"
import Login from "../Pages/Login"
import Register from '../Pages/Register';

function Routing() {
  return (
    <div>
         <Router>
        <Routes>
                <Route path ="/" element= {<Main />} />
                <Route path ="/AboutUs" element= {<AboutUs />} />
                <Route path ="/Services" element= {<Services />} />
                <Route path ="/Contact" element= {<Contact />} />
                <Route path ="/Alianzas" element= {<Alianzas />} />
                <Route path ="/Login" element= {<Login />} />
                <Route path ="/Register" element= {<Register />} />
        </Routes>
    </Router>
    </div>
  )
}

export default Routing