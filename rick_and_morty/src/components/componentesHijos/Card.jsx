import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className="card">
         <button onClick= {() => props.onClose(props.id)} className="button">X</button>
        <div className="containerName">
         <Link  to={`/detail/${props.id}`}>
         <h2 className="titP"> {props.name} </h2>
         </Link>
          </div>
         <div className="containerPs"> 
         <p className="tit"> {"status :"} {props.status}</p>
         <p className="tit">{"species :"} {props.species}</p>
         <p className="tit">{"gender :"} {props.gender}</p>
        </div>
         <img src={props.image} alt=''  className="img3"/>
      </div>
   );
}
