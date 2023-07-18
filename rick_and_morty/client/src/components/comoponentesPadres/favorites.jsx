import { useSelector } from "react-redux";
//import style from "../../css/"
import Card from "../componentesHijos/Card";
import { orderCards, filterCards, clearFilters } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = () => {

    let myFavorites = useSelector((state) => state.myFavorites);
    console.log(myFavorites)
    const dispatch = useDispatch();
    const [aux, setAux] = useState({ order: "null", filter: "null" })


    const handleOrder = (event) => {
        if (event.target.value !== "null"){
            dispatch(orderCards(event.target.value))
            setAux(({...aux, order: event.target.value}))
        }
    }
    
    const handleFilter = (event) => {
        if (event.target.value !== "null"){
            dispatch(filterCards(event.target.value))
            setAux(({...aux, filter: event.target.value}))  
        }
    }
    
    const handleClear = () => {
        setAux({ order: "null", filter: "null" })
        dispatch(clearFilters())
    }
    console.log(myFavorites)
    return(
        <div>
            <div>
                <select id="order" value={aux.order} onChange={handleOrder} >
                    <option value="null" disabled>Select order</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select id="filter" value={aux.filter} onChange={handleFilter} >
                    <option value="null" disabled>Select filter</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>

                <button onClick={handleClear}>CLEAR FILTERS</button>
            </div>        
            <div>
            {myFavorites?.map((fav) => {
                return <Card 
                    key={fav.id}
                    id={fav.id} 
                    name={fav.name} 
                    status={fav.status} 
                    species={fav.species} 
                    gender={fav.gender} 
                    origin={fav.origin.name} 
                    image={fav.image} 
                    />;
                })}
            </div>
        </div>
    )
};

export default Favorites;