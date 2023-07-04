import React from "react";
import Cards from "../componentesHijos/Cards";
import SearchBar from '../componentesHijos/SearchBar';
import "../../css/home.modules.css"


export default function Home(props){
 
    return (
         <div className="containerHome">
            <div className="containerTit"><h1>Personajes</h1></div> 
            <h2 className="tituloSearch">Buscar Personaje</h2>
            <SearchBar handleRandomId={props.handleRandomId} onSearch={props.onSearch} /> 
             <Cards characters={props.characters} onClose={props.onClose}/>
         </div>
    )
}
