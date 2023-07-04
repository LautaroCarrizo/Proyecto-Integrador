import Card from './Card';
import  "../../css/cards.modules.css"

export default function Cards(props) {
  
   return (
      <div className='containerCard'>
         {props.characters.map((element) => (  
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
