
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../../css/details.css"


export default function Detail(){
 
  const [character, setCharacter] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id])

    return(
     <div className="conteinerJsxDetails">
        <h1 style={{position:"relative"}}>Detalles</h1>
       <div className="containerData">
       <div className="containerH3">
        <h3 style={{position:"relative"}}>name : {character.name} </h3>
        <h3 style={{position:"relative"}} >status : {character.status} </h3>
        <h3 style={{position:"relative"}} >species : {character.species} </h3>
        <h3 style={{position:"relative"}} >gender : {character.gender} </h3>
        <h3 style={{position:"relative"}} >origin : {character.origin?.name} </h3>
      </div>
         <div style={{position:"relative"}} className="containerImg"><img src={character.image} alt="" ></img></div>
       </div>
     </div>
    )
}
