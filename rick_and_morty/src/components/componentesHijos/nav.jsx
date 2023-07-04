import React from "react";
import {NavLink} from "react-router-dom"
import "../../css/nav.modules.css"
 export default function Nav(){
 
    return(
        <nav className="containerNav">
            <h1 className="tituloNav">Rick and Morty App</h1>
            <div className="containerBotonesNav">
            <button className= "btn1">
                <NavLink style={{ textDecoration: "none" }} to="/home"> Home </NavLink>
            </button>
            <button className= "btn1">
                <NavLink style={{ textDecoration: "none" }} to="/Abaout"> Abaout </NavLink>
            </button>
            <button className= "btn1">
                <NavLink style={{ textDecoration: "none" }} to="/"> LogOut </NavLink>
            </button>
            </div>
        </nav>
    )
}

