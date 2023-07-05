
import { ADD_FAV, REMOVE_FAV } from "./actionsTypes"

const InitialState = {
  myFavorites : []
}

 const reducer = (state = InitialState, actions) => {
  
    switch(actions.type){
      case ADD_FAV :
        return {
            ...state, 
            myFavorites:[...state.myFavorites, actions.payload]
        }

        case REMOVE_FAV:
            let idDef = parseInt(actions.payload)
            return {
                ...state,
                myFavorites:[...state.myFavorites.filter((elem) => elem.id !== idDef)  ] 
            }



     default: return {...state}   
    }



}
export default reducer