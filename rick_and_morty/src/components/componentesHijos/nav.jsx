import React from "react";
import {NavLink} from "react-router-dom"
import SearchBar from './SearchBar';

 export default function Nav({onSearch}){
 
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
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

