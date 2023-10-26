import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import About from "./About";



function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <NavLink to="/">Home  ||  </NavLink>
        <NavLink to="/student">Student  ||  </NavLink>
        <NavLink to="/contact">Contact us  ||  </NavLink>
        <NavLink to="/about">About us    </NavLink>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/student" element={ <Student/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        
        </BrowserRouter>
        
        </>

    )
}
export default RouteCompo