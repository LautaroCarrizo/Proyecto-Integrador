import { ADD_FAV, REMOVE_FAV,FILTER, ORDER,CLEAR  } from "./actionsTypes";


const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer  = (state= initialState, action) => {

    switch (action.type) {
        case ADD_FAV: 
            return { 
                ...state, 
                myFavorites:  action.payload,
                allCharacters: action.payload
                    };
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites:  action.payload,
                allCharacters: action.payload
                    };
        case FILTER:
            return {
                ...state, 
                myFavorites: state.allCharacters.filter((char) => char.gender == action.payload)
            };
        case ORDER:
                const allCharacters2 = [...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                action.payload === "A" 
                ? allCharacters2.sort((a, b) => a.id - b.id)
                : allCharacters2.sort((a, b) => b.id - a.id)
                };
                case CLEAR:
                    return {
                        ...state,
                        myFavorites: state.allCharacters
                        };
        default:
            return {...state};
    }
};

export default reducer ;

