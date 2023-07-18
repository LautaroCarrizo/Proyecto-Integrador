import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, CLEAR, CLOSEFAV } from "./actionsTypes";
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, {character}).then(({ data }) => { //?PONEMOS LA RUTA, Y MANDOS LA INFO "CHARACTER ENTRE CORCHETES"
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
         console.log(data)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };
 
 export const orderCards = (orden) => {
   return {type: ORDER, payload: orden}
};
 export const filterCards = (gender) => {
   return {type: FILTER, payload: gender}
 }
 export const clearFilters = () => {
   return {type:CLEAR}
}