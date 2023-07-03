import React from "react";
import {NavLink} from "react-router-dom"

 export default function Nav(){
 
    return(
        <nav className="containerNav">
            <div className="containerBotonesNav">
            <button className= "btn1">
                <NavLink  to="/home"> Home </NavLink>
            </button>
            <button className= "btn2">
                <NavLink  to="/Abaout"> Abaout </NavLink>
            </button>
            </div>
        </nav>
    )
}

