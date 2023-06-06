import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Navbar =()=>{
    return(
        <div className="Navbarsection">
            <div className="container">
                <div className="navinfo">
                    <div className="logo">
                        <h2 className="logotitle">Ultra profile</h2>
                    </div>
                    <ul className="ullist">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">work</a></li>
                        <li><a href="#">profile</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">socialmedia</a></li>
                        <li><a href="#">footer</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;