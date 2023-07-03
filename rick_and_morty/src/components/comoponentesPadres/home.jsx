import React from "react";
import Cards from "../componentesHijos/Cards";
import SearchBar from '../componentesHijos/SearchBar';


export default function Home(props){
 
    return (
         <div className="containerHome">
             <h1>Personajes</h1>
             <SearchBar onSearch={props.onSearch} />
             <Cards characters={props.characters} onClose={props.onClose}/>
         </div>
    )
}
