import { Link, useLocation } from "react-router-dom";
import "../../css/cards.modules.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

export function Card({
  id,
  name,
  species,
  gender,
  origin,
  status,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setFav] = useState(false);
  
  function handleFavorite() {
    if (isFav === true) {
      setFav(false);
      removeFav(id);
    } else {
      setFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        origin,
        status,
        image,
        onClose,
        addFav,
        removeFav,
        myFavorites,
      });
    }
  }

  useEffect(() => {
   if (myFavorites) {
     myFavorites?.forEach((fav) => {
       if (fav.id === id) {
         setFav(true);
       }
     });
   }
 }, [myFavorites, id]);
 let location = useLocation()
  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
         {location.pathname !== "/Favorites" && (
      <button className="button">
        X
      </button>
    )}
      <div className="containerName">
        <Link style={{ textDecoration: "none" }} to={`/detail/${id}`}>
          <h2 className="titP"> {name} </h2>
        </Link>
      </div>
      <div className="containerPs">
        <p className="tit">
          {" "}
          {"status :"} {status}
        </p>
        <p className="tit">
          {"species :"} {species}
        </p>
        <p className="tit">
          {"gender :"} {gender}
        </p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
