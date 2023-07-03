import React from "react";
export default function SearchBar(props) {

const [id, setId] = React.useState("")

function handleChange(event) {
   console.log(event.target.value)
   setId(event.target.value);
 }

   return (
      <div className="containerBtn containerBotonesNav ">
         <div className="containerInput">
         <input type='search' className="inputBtn"  onChange={handleChange}  value={id}/>
         <button onClick={()=> {props.onSearch(id)}} className="btnBuscador">Agregar</button>
         </div>
      </div>
   );
}
