import { Link } from "react-router-dom";
import "../../css/cards.modules.css"
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";


export function Card(props) {

 const [isFav, setFav] = useState(false)
 const dispatch = useDispatch();

function handleFavorite(){
 if(isFav === true){
   setFav(false)
   dispatch(removeFav(props.id))
 } else {
   setFav(true)
   dispatch(addFav(props))
 }
}

useEffect(() => {
   props.myFavorites.forEach((isFav) => {
      if (isFav.id === props.id) {
         setFav(true);
      }
   });
}, [props.myFavorites, props.id]);

   return (
       <div className="card">
             {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick= {() => props.onClose(props.id)} className="button">X</button>
        <div className="containerName">
         <Link style={{ textDecoration: "none" }} to={`/detail/${props.id}`}>
         <h2 className="titP"> {props.name} </h2>
         </Link>
          </div>
         <div className="containerPs"> 
         <p className="tit"> {"status :"} {props.status}</p>
         <p className="tit">{"species :"} {props.species}</p>
         <p className="tit">{"gender :"} {props.gender}</p>
        </div>
         <img src={props.image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {
 return {
   myFavorites: state.myFavorites
 }

}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (props) => dispatch(addFav(props)),
      removeFav: (id) => dispatch(removeFav(id))
   }
   }

export default connect(
   mapStateToProps,
   mapDispatchToProps 
)(Card)