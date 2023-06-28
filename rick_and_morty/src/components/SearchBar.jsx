import React from "react";
export default function SearchBar(props) {
   return (
      <div className="containerBtn">
         <h3 className="tituloBuscarPersonajes">Buscar Personaje {":"}</h3>
         <div className="containerInput">
         <input type='search' className="inputBtn"/>
         <button onClick={props.onSearch} className="btnBuscador">Agregar</button>
         </div>
      </div>
   );
}
