import { connect } from "react-redux";
import Card from "../componentesHijos/Card";
export  function Favorites(props){



    return (
        <div>
            {props.myFavorites.map((element) => (  
           <Card key={element.id}
           onClose={props.onClose}
           id= {element.id}
           name={element.name}
           status={element.status}
           species={element.species}
           gender={element.gender}
           origin={element.origin.name}
           image={element.image} >
           </Card>
         ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    }
   
   }
export default connect(
    mapStateToProps,
    null
 )(Favorites)