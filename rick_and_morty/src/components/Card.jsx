export default function Card(props) {
   return (
      <div className="card">
         <button onClick={props.onClose} className="button">X</button>
         <h2 className="tit"> {props.name} </h2>
         <h2 className="tit">{props.status}</h2>
         <h2 className="tit">{props.species}</h2>
         <h2 className="tit">{props.gender}</h2>
         <h2 className="tit">{props.origin}</h2>
         <img src={props.image} alt=''  className="img3"/>
      </div>
   );
}
