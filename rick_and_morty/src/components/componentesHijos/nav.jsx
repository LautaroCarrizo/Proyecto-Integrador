import React from "react";
import {NavLink, useNavigate} from "react-router-dom"
import "../../css/nav.modules.css"
 export default function Nav(props){

    const navigate = useNavigate()
    function handleLogOut (){
        props.setAccess(false)
        navigate("/")
     }
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
                <NavLink style={{ textDecoration: "none" }} to="/Favorites"> Favorites </NavLink>
            </button>
            <button onClick={handleLogOut}  style={{ textDecoration: "none" }} className= "btn1">
               LogOut 
            </button>
            </div>
        </nav>
    )
}

