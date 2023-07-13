import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/details.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="conteinerJsxDetails">
      <h1 style={{ position: "relative" }}>Detalles</h1>
      <div className="containerData">
        <div className="containerH3">
          <h3 style={{ position: "relative" }}>name : {character.name} </h3>
          <h3 style={{ position: "relative" }}>status : {character.status} </h3>
          <h3 style={{ position: "relative" }}>
            species : {character.species}{" "}
          </h3>
          <h3 style={{ position: "relative" }}>gender : {character.gender} </h3>
          <h3 style={{ position: "relative" }}>
            origin : {character.origin?.name}{" "}
          </h3>
        </div>
        <div style={{ position: "relative" }} className="containerImg">
          <img src={character.image} alt=""></img>
        </div>
      </div>
    </div>
  );
}
