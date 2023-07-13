import React from "react";
export default function SearchBar(props) {

const [id, setId] = React.useState("")

function handleChange(event) {
   console.log(event.target.value)
   setId(event.target.value);
 }

   return (
      <div>
         <div className="containerInputHome">
         <input type='search' className="inputBtn"  onChange={handleChange}  value={id}/>
         <button onClick={()=> {props.onSearch(id)}} className="btnBuscador">Agregar</button>
         <button onClick={()=> {props.handleRandomId()}} className="btnBuscador">Agregar Random</button>
         </div>
      </div>
   );
}
